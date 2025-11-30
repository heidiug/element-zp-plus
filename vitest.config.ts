import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    // 1. 关键：设置测试环境为 jsdom，用于模拟浏览器DOM
    environment: 'jsdom',

    // 2. 关键：使 expect, test/it 等方法全局可用，无需在每个测试文件中导入
    globals: true,

    // 3. (可选) 设置测试文件匹配规则
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],

    // 4. (可选) 设置覆盖率报告
    coverage: {
      provider: 'v8', // 或者 'istanbul'
      reporter: ['text', 'json', 'html']
    }
  }
})
