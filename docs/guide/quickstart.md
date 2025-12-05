# 快速开始

## 安装

### 使用 npm

```bash
npm install element-zp-plus
```

### 使用 pnpm

```bash
pnpm add element-zp-plus
```

### 使用 yarn

```bash
yarn add element-zp-plus
```

## 引入组件

### 完整引入

在 `main.ts` 中引入所有组件：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ElementZPPlus from 'element-zp-plus'
import 'element-zp-plus/dist/index.css'

const app = createApp(App)
app.use(ElementZPPlus)
app.mount('#app')
```

### 按需引入

如果你只需要使用部分组件，可以按需引入：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { ZpButton, ZpIcon } from 'element-zp-plus'
import 'element-zp-plus/dist/index.css'

const app = createApp(App)
app.component('ZpButton', ZpButton)
app.component('ZpIcon', ZpIcon)
app.mount('#app')
```

## 使用组件

在模板中使用组件：

```vue
<template>
  <div>
    <zp-button type="primary">主要按钮</zp-button>
    <zp-icon icon="user" />
  </div>
</template>
```

## 下一步

- 查看 [组件总览](/components/) 了解所有可用组件
- 查看各个组件的详细文档和示例

