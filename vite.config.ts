import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer';

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      include: ['src/index.ts', 'src/components/**/*.ts', 'src/components/**/*.vue'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types'
    }),
    visualizer({
      open: true,
      filename: 'dist/volume-analysis.html'
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
      entry: {
        'zp-element-plus': resolve(__dirname, 'src/index.ts'),
      },
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
    // 生产环境关闭 sourcemap：减小打包体积，保护源码，提升加载速度
    // 组件库用户可以通过 TypeScript 类型定义了解 API，不需要 Source Map
    sourcemap: false,
    // 生产环境自动压缩（Vite 默认会压缩，这里明确配置）
    minify: 'terser',
    rollupOptions: {
      plugins: [ visualizer({
        open: true,
        filename: 'dist/volume-analysis.html'
      }) ],
      external: [
        'vue',
        '@floating-ui/core',
        '@floating-ui/vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ], // 外部化依赖，避免重复打包
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@floating-ui/core': 'FloatingUICore',
          '@floating-ui/vue': 'FloatingUIVue',
          '@fortawesome/fontawesome-svg-core': 'FontAwesomeCore',
          '@fortawesome/free-solid-svg-icons': 'FontAwesomeSolidIcons',
          '@fortawesome/vue-fontawesome': 'FontAwesomeVue',
          '@popperjs/core': 'Popper',
          'async-validator': 'AsyncValidator'
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
