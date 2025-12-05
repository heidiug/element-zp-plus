import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      include: ['src/index.ts', 'src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // 库模式打包
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ZpElementPlus',
      fileName: (format) => {
        if (format === 'es') {
          return 'zp-element-plus.js'
        }
        if (format === 'umd') {
          return 'zp-element-plus.umd.cjs'
        }
        return `zp-element-plus.${format}.js`
      },
      formats: ['es', 'umd']
    },
    // 生成 sourcemap（与 rollup.config.js 保持一致）
    sourcemap: true,
    // 生产环境自动压缩（Vite 默认会压缩，这里明确配置）
    minify: 'terser',
    rollupOptions: {
      external: ['vue'], // 外部化依赖，避免重复打包
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue', // 告诉 Rollup Vue 是一个全局变量，而不是模块导入
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'zp-element-plus.css'
          }
          return `${chunkInfo.name}.js`
        }
      }
    }
  }
})
