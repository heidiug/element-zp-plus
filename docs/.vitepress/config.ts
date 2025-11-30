import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { readdirSync } from 'fs'
import container from 'markdown-it-container'

// 自动扫描组件目录生成侧边栏
function getComponentsSidebar() {
  const componentsDir = fileURLToPath(new URL('../../src/components', import.meta.url))
  const sidebar: any[] = []
  
  try {
    const entries = readdirSync(componentsDir, { withFileTypes: true })
    
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== 'Common') {
        const componentName = entry.name
        const componentPath = `/components/${componentName.toLowerCase()}`
        
        sidebar.push({
          text: componentName,
          link: `${componentPath}/`,
          items: [
            { text: '基础用法', link: `${componentPath}/` },
            { text: 'API', link: `${componentPath}/api` }
          ]
        })
      }
    }
  } catch (error) {
    console.warn('Failed to scan components directory:', error)
  }
  
  return sidebar
}

export default defineConfig({
  title: 'zp-element-plus',
  description: 'A Vue 3 Component Library',
  
  // 主题配置
  themeConfig: {
    // Logo 配置
    logo: {
      text: 'zp-element-plus',
      alt: 'zp-element-plus'
    },
    
    // 导航栏
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button/index' }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
      {
          text: '开始',
        items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/installation' }
        ]
      }
    ],
      '/components/': getComponentsSidebar()
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于'
    },
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 zp-element-plus'
    }
  },
  
  // Vite 配置
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/vars.css";`
        }
      }
    },
    ssr: {
      noExternal: ['vitepress']
    },
    // 修复 VitePress 2.0.0-alpha.15 的 VPTeamPageTitle.vue 错误
    optimizeDeps: {
      exclude: []
    }
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config(md) {
      // 使用 markdown-it-container 插件支持 ::: demo 语法
      md.use(container, 'demo', {
        validate(params: string) {
          return params.trim().match(/^demo\s*(.*)$/)
        },
        render(tokens: any[], idx: number) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
          const description = m && m.length > 1 ? m[1] : ''
          
          if (tokens[idx].nesting === 1) {
            // opening tag - 直接返回，让 VitePress 处理 Vue 组件
            const descAttr = description ? ` description="${md.utils.escapeHtml(description)}"` : ''
            return `<DemoBlock${descAttr}>\n`
          } else {
            // closing tag
            return '</DemoBlock>\n'
          }
        }
      })
      
      // 处理代码块：在 demo 块关闭后的代码块作为源代码显示
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const prevToken = tokens[idx - 1]
        
        // 检查前一个 token 是否是 demo 块的关闭标签
        if (prevToken && prevToken.type === 'container_demo_close') {
          // 这是源代码，包装在特殊标记中（放在 DemoBlock 外部）
          const code = fence(tokens, idx, options, env, self)
          return `<div class="demo-code">${code}</div>`
        }
        
        return fence(tokens, idx, options, env, self)
      }
    }
  }
})
