# 快速开始

本节将介绍如何在项目中使用 zp-element-plus。

## 安装

### 使用 npm 安装

```bash
npm install zp-element-plus
```

### 使用 pnpm 安装

```bash
pnpm add zp-element-plus
```

### 使用 yarn 安装

```bash
yarn add zp-element-plus
```

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
import { createApp } from 'vue'
import ZpElementPlus from 'zp-element-plus'
import 'zp-element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ZpElementPlus)
app.mount('#app')
```

## 按需引入

为了减小打包体积，你可以只引入需要的组件。

```typescript
import { createApp } from 'vue'
import { ZpButton, ZpIcon } from 'zp-element-plus'
import App from './App.vue'

const app = createApp(App)
app.component('ZpButton', ZpButton)
app.component('ZpIcon', ZpIcon)
app.mount('#app')
```

## 开始使用

现在你可以开始使用组件了！

```vue
<template>
  <zp-button type="primary">按钮</zp-button>
</template>
```

