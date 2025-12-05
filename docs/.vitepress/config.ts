import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  title: 'Element ZP Plus',
  description: '基于 Vue 3 的组件库',
  lang: 'zh-CN',
  base: '/element-zp-plus/',
  // Vite 配置
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    },
    optimizeDeps: {
      include: ['vue', '@fortawesome/vue-fontawesome', '@fortawesome/fontawesome-svg-core']
    },
    ssr: {
      noExternal: ['element-zp-plus']
    }
  },

  // 主题配置
  themeConfig: {
    // 网站标题
    siteTitle: 'Element ZP Plus',

    // Logo
    logo: '/favicon.ico',

    // 导航栏
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件总览',
          items: [{ text: 'Overview 组件总览', link: '/components/' }]
        },
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Alert 警告', link: '/components/alert' },
            { text: 'Tooltip 文字提示', link: '/components/tooltip' },
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Message 消息提示', link: '/components/message' }
          ]
        },
        {
          text: 'Form 表单组件',
          items: [
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' }
          ]
        },
        {
          text: 'Data 数据展示',
          items: [{ text: 'Dropdown 下拉菜单', link: '/components/dropdown' }]
        }
      ]
    },

    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/heidiug' }],

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: '',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 Element ZP Plus'
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '目录'
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 可以在这里配置 markdown-it 插件
    }
  }
})
