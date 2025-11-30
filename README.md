# zp-element-plus

**企业级 Vue 3 组件库 - 一个基于 Vue 3 的现代化 UI 组件库**

## 📋 项目简介

zp-element-plus 是一个功能完善、设计精美的 Vue 3 组件库，提供丰富的 UI 组件和完整的文档系统。组件库采用现代化的前端技术栈，提供直观的 API 设计和优秀的开发体验，帮助开发者快速构建高质量的企业级应用。

## ✨ 核心功能

### 🎨 丰富的组件库

提供 11+ 个高质量组件，覆盖大部分业务场景：

- **Button** - 按钮组件，支持多种类型、尺寸和状态
- **Input** - 输入框组件，支持清空、密码显示、图标等
- **Form** - 表单组件，支持验证规则和自定义验证
- **Select** - 选择器组件，支持搜索、远程搜索、自定义渲染
- **Switch** - 开关组件，支持文字描述和扩展值类型
- **Icon** - 图标组件，基于 FontAwesome
- **Alert** - 警告提示组件
- **Message** - 消息提示组件，支持多种类型
- **Tooltip** - 文字提示组件
- **Dropdown** - 下拉菜单组件
- **Collapse** - 折叠面板组件

### 📚 完整的文档系统

- 基于 VitePress 构建的现代化文档站点
- 每个组件都有详细的使用示例和 API 文档
- 支持在线预览和代码展示
- 响应式设计，支持移动端访问

### 🎯 TypeScript 支持

- 完整的 TypeScript 类型定义
- 提供良好的类型提示和类型检查
- 支持类型安全的组件使用

### 🧪 完善的测试体系

- 基于 Vitest 的单元测试
- 组件测试覆盖
- 持续集成支持

## 🛠️ 技术栈

### 前端框架

- **Vue 3.5+** - 渐进式 JavaScript 框架
- **TypeScript 5.9+** - 类型安全的 JavaScript 超集
- **Vite 7+** - 下一代前端构建工具

### UI 组件库

- **自定义组件** - 基于 Vue 3 开发的组件库
- **FontAwesome** - 图标库支持

### 文档系统

- **VitePress 2.0+** - 基于 Vite 的静态站点生成器
- **Markdown** - 文档编写格式

### 表单验证

- **async-validator 4.2+** - 异步表单验证库

### 工具库

- **lodash-es** - JavaScript 工具库
- **@floating-ui/vue** - 浮动元素定位库
- **@popperjs/core** - 工具提示定位库

### 测试框架

- **Vitest 4.0+** - 基于 Vite 的单元测试框架
- **@vue/test-utils** - Vue 组件测试工具

### 样式处理

- **Sass** - CSS 预处理器
- **PostCSS** - CSS 后处理器

## 📁 项目结构

```
element-zp-plus/
├── docs/                          # 文档目录
│   ├── .vitepress/               # VitePress 配置
│   │   ├── config.ts             # 配置文件
│   │   └── theme/                # 主题配置
│   │       ├── index.ts          # 主题入口
│   │       ├── style.css         # 主题样式
│   │       └── components/        # 主题组件
│   │           └── DemoBlock.vue # 演示块组件
│   ├── components/               # 组件文档
│   │   ├── button/               # Button 组件文档
│   │   │   ├── index.md          # 使用示例
│   │   │   └── api.md            # API 文档
│   │   ├── input/                # Input 组件文档
│   │   ├── form/                 # Form 组件文档
│   │   └── ...                   # 其他组件文档
│   └── guide/                    # 指南文档
│       ├── index.md              # 介绍
│       └── installation.md       # 安装指南
├── src/                          # 源代码目录
│   ├── components/               # 组件源码
│   │   ├── Alert/                # Alert 组件
│   │   │   ├── zpAltert.vue      # 组件文件
│   │   │   ├── type.ts           # 类型定义
│   │   │   ├── style.css         # 样式文件
│   │   │   └── zpAltert.test.ts  # 测试文件
│   │   ├── Button/               # Button 组件
│   │   ├── Form/                 # Form 组件
│   │   │   ├── zpForm.vue        # 表单组件
│   │   │   ├── zpFormItem.vue    # 表单项组件
│   │   │   ├── type.ts           # 类型定义
│   │   │   └── style.css         # 样式文件
│   │   ├── Input/                # Input 组件
│   │   ├── Select/               # Select 组件
│   │   ├── Switch/               # Switch 组件
│   │   └── ...                   # 其他组件
│   ├── hooks/                    # 组合式函数
│   │   ├── useClickOutside.ts   # 点击外部区域
│   │   ├── useEventListener.ts  # 事件监听
│   │   └── useZindex.ts          # Z-index 管理
│   ├── styles/                   # 样式文件
│   │   ├── index.css             # 主样式文件
│   │   ├── reset.css             # 重置样式
│   │   └── vars.css              # CSS 变量
│   └── App.vue                   # 根组件
├── package.json                  # 项目配置
├── vite.config.ts                # Vite 配置
├── tsconfig.json                 # TypeScript 配置
└── README.md                     # 项目说明
```

## 🚀 快速开始

### 环境要求

- **Node.js** >= 20.19.0 或 >= 22.12.0
- **pnpm** >= 8.0.0（推荐）或 npm >= 9.0.0

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev

# 或
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动

### 文档开发

```bash
# 启动文档开发服务器
pnpm docs:dev

# 或
npm run docs:dev
```

文档服务器将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
# 构建项目
pnpm build

# 或
npm run build

# 预览构建结果
pnpm preview

# 或
npm run preview
```

### 构建文档

```bash
# 构建文档
pnpm docs:build

# 或
npm run docs:build

# 预览文档构建结果
pnpm docs:preview

# 或
npm run docs:preview
```

## 🧪 测试

```bash
# 运行测试
pnpm test

# 或
npm run test

# 监听模式
pnpm test:watch

# 或
npm run test:watch

# 生成覆盖率报告
pnpm test:coverage

# 或
npm run test:coverage
```

## 🎨 组件使用示例

### Button 按钮

```vue
<template>
  <zp-button type="primary">主要按钮</zp-button>
  <zp-button type="success">成功按钮</zp-button>
  <zp-button type="warning">警告按钮</zp-button>
</template>
```

### Input 输入框

```vue
<template>
  <zp-input v-model="value" placeholder="请输入内容" clearable />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

### Form 表单

```vue
<template>
  <zp-form ref="formRef" :model="formModel" :rules="rules">
    <zp-form-item label="姓名" prop="name">
      <zp-input v-model="formModel.name" placeholder="请输入姓名" />
    </zp-form-item>
  </zp-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formModel = reactive({
  name: ''
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ]
}

const formRef = ref()
</script>
```

### Select 选择器

```vue
<template>
  <zp-select v-model="value" :options="options" placeholder="请选择" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' }
]
</script>
```

### Switch 开关

```vue
<template>
  <zp-switch v-model="value" active-text="开启" inactive-text="关闭" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>
```

## 🎨 功能特性

### 组件设计

- **统一的 API 设计** - 所有组件遵循一致的使用方式
- **丰富的配置选项** - 支持多种使用场景
- **完善的类型定义** - 提供完整的 TypeScript 支持
- **响应式设计** - 适配各种屏幕尺寸

### 开发体验

- **详细的文档** - 每个组件都有完整的使用示例
- **在线预览** - 文档中可直接预览组件效果
- **代码示例** - 提供可直接使用的代码片段
- **类型提示** - 完善的 TypeScript 类型支持

### 用户体验

- **流畅的动画** - 精心设计的过渡动画
- **直观的交互** - 符合用户习惯的操作方式
- **完善的反馈** - 清晰的状态提示和错误信息
- **无障碍支持** - 遵循 WAI-ARIA 标准

## 📝 开发规范

### 代码风格

- 使用 TypeScript 进行类型检查
- 遵循 Vue 3 Composition API 最佳实践
- 使用 ESLint 和 Prettier 进行代码格式化
- 组件命名采用 PascalCase
- 文件命名采用 camelCase

### 代码检查

```bash
# 运行 ESLint
pnpm lint

# 或
npm run lint

# 格式化代码
pnpm format

# 或
npm run format
```

### 类型检查

```bash
# 运行类型检查
pnpm type-check

# 或
npm run type-check
```

### 提交规范

- 使用语义化提交信息
- 提交前运行类型检查和代码检查

## 🔧 配置说明

### Vite 配置

项目使用 Vite 作为构建工具，配置文件位于 `vite.config.ts`

### TypeScript 配置

TypeScript 配置文件：
- `tsconfig.json` - 主配置
- `tsconfig.app.json` - 应用配置
- `tsconfig.node.json` - Node 配置

### ESLint 配置

ESLint 配置文件位于 `eslint.config.ts`，支持：
- Vue 3 语法检查
- TypeScript 类型检查
- 代码风格检查

### Prettier 配置

Prettier 配置文件位于 `.prettierrc.json`

### VitePress 配置

VitePress 配置文件位于 `docs/.vitepress/config.ts`，支持：
- 自动生成侧边栏
- 自定义主题
- Markdown 扩展

## 📦 依赖说明

### 核心依赖

- `vue` - Vue 框架
- `@floating-ui/vue` - 浮动元素定位
- `@popperjs/core` - 工具提示定位
- `async-validator` - 表单验证
- `lodash-es` - 工具库
- `@fortawesome/fontawesome-svg-core` - FontAwesome 核心
- `@fortawesome/free-solid-svg-icons` - FontAwesome 图标
- `@fortawesome/vue-fontawesome` - FontAwesome Vue 组件

### 开发依赖

- `typescript` - TypeScript 编译器
- `vite` - 构建工具
- `vue-tsc` - Vue TypeScript 检查
- `vitepress` - 文档生成工具
- `vitest` - 测试框架
- `eslint` - 代码检查工具
- `prettier` - 代码格式化工具
- `sass` - CSS 预处理器
- `postcss` - CSS 后处理器

## 🐛 问题排查

### 常见问题

#### 依赖安装失败

```bash
# 清除缓存后重新安装
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 类型检查错误

```bash
# 运行类型检查
pnpm type-check
```

#### 开发服务器启动失败

- 检查端口是否被占用
- 确认 Node.js 版本是否符合要求

#### 文档构建失败

- 检查 VitePress 配置是否正确
- 确认所有依赖已正确安装

#### 组件样式不生效

- 确认已正确导入样式文件
- 检查 CSS 变量是否正确配置

## 📄 许可证

本项目采用 MIT 许可证

## 👥 贡献指南

欢迎提交 Issue 和 Pull Request！

### 贡献步骤

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献规范

- 遵循项目的代码风格
- 添加必要的测试用例
- 更新相关文档
- 确保所有测试通过

## 📮 联系方式

如有问题或建议，请通过 Issue 反馈。

---

**zp-element-plus** - 让 Vue 3 开发更简单、更高效！
