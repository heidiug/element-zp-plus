# Button 按钮

常用的操作按钮。

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style>
.button-demo .zp-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<DemoContainer>
  <template #demo>
    <div class="button-demo">
      <zp-button>Default</zp-button>
      <zp-button type="primary">Primary</zp-button>
      <zp-button type="success">Success</zp-button>
      <zp-button type="info">Info</zp-button>
      <zp-button type="warning">Warning</zp-button>
      <zp-button type="danger">Danger</zp-button>
    </div>
    <div class="button-demo">
      <zp-button plain>Plain</zp-button>
      <zp-button type="primary" plain>Primary</zp-button>
      <zp-button type="success" plain>Success</zp-button>
      <zp-button type="info" plain>Info</zp-button>
      <zp-button type="warning" plain>Warning</zp-button>
      <zp-button type="danger" plain>Danger</zp-button>
    </div>
    <div class="button-demo">
      <zp-button round>Round</zp-button>
      <zp-button type="primary" round>Primary</zp-button>
      <zp-button type="success" round>Success</zp-button>
      <zp-button type="info" round>Info</zp-button>
      <zp-button type="warning" round>Warning</zp-button>
      <zp-button type="danger" round>Danger</zp-button>
    </div>
    <div class="button-demo">
      <zp-button circle><zp-icon icon="search" /></zp-button>
      <zp-button type="primary" circle><zp-icon icon="edit" /></zp-button>
      <zp-button type="success" circle><zp-icon icon="check" /></zp-button>
      <zp-button type="info" circle><zp-icon icon="message" /></zp-button>
      <zp-button type="warning" circle><zp-icon icon="star" /></zp-button>
      <zp-button type="danger" circle><zp-icon icon="trash" /></zp-button>
    </div>
  </template>
  <template #code>

```vue
<template>
  <zp-button>Default</zp-button>
  <zp-button type="primary">Primary</zp-button>
  <zp-button type="success">Success</zp-button>
  <zp-button type="info">Info</zp-button>
  <zp-button type="warning">Warning</zp-button>
  <zp-button type="danger">Danger</zp-button>

  <zp-button plain>Plain</zp-button>
  <zp-button type="primary" plain>Primary</zp-button>
  <zp-button type="success" plain>Success</zp-button>
  <zp-button type="info" plain>Info</zp-button>
  <zp-button type="warning" plain>Warning</zp-button>
  <zp-button type="danger" plain>Danger</zp-button>

  <zp-button round>Round</zp-button>
  <zp-button type="primary" round>Primary</zp-button>
  <zp-button type="success" round>Success</zp-button>
  <zp-button type="info" round>Info</zp-button>
  <zp-button type="warning" round>Warning</zp-button>
  <zp-button type="danger" round>Danger</zp-button>

  <zp-button circle><zp-icon icon="search" /></zp-button>
  <zp-button type="primary" circle><zp-icon icon="edit" /></zp-button>
  <zp-button type="success" circle><zp-icon icon="check" /></zp-button>
  <zp-button type="info" circle><zp-icon icon="message" /></zp-button>
  <zp-button type="warning" circle><zp-icon icon="star" /></zp-button>
  <zp-button type="danger" circle><zp-icon icon="trash" /></zp-button>
</template>
```

  </template>
</DemoContainer>

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用，它接受一个 `Boolean` 值。

<DemoContainer>
  <template #demo>
    <div class="button-demo">
      <zp-button disabled>Disabled</zp-button>
      <zp-button type="primary" disabled>Disabled</zp-button>
      <zp-button type="success" disabled>Disabled</zp-button>
      <zp-button type="info" disabled>Disabled</zp-button>
      <zp-button type="warning" disabled>Disabled</zp-button>
      <zp-button type="danger" disabled>Disabled</zp-button>
    </div>
  </template>
  <template #code>

```vue
<template>
  <zp-button disabled>Disabled</zp-button>
  <zp-button type="primary" disabled>Disabled</zp-button>
  <zp-button type="success" disabled>Disabled</zp-button>
  <zp-button type="info" disabled>Disabled</zp-button>
  <zp-button type="warning" disabled>Disabled</zp-button>
  <zp-button type="danger" disabled>Disabled</zp-button>
</template>
```

  </template>
</DemoContainer>

## 文字按钮

没有边框和背景色的按钮。

<DemoContainer>
  <template #demo>
    <div class="button-demo">
      <zp-button text>文字按钮</zp-button>
      <zp-button type="primary" text>文字按钮</zp-button>
      <zp-button type="success" text>文字按钮</zp-button>
      <zp-button type="info" text>文字按钮</zp-button>
      <zp-button type="warning" text>文字按钮</zp-button>
      <zp-button type="danger" text>文字按钮</zp-button>
    </div>
  </template>
  <template #code>

```vue
<template>
  <zp-button text>文字按钮</zp-button>
  <zp-button type="primary" text>文字按钮</zp-button>
  <zp-button type="success" text>文字按钮</zp-button>
  <zp-button type="info" text>文字按钮</zp-button>
  <zp-button type="warning" text>文字按钮</zp-button>
  <zp-button type="danger" text>文字按钮</zp-button>
</template>
```

  </template>
</DemoContainer>

## 图标按钮

使用图标为按钮添加更多的含义。 可以在按钮中使用图标，也可以单独使用图标作为按钮。

<DemoContainer>
  <template #demo>
    <div class="button-demo">
      <zp-button type="primary" icon="edit">编辑</zp-button>
      <zp-button type="primary" icon="share">分享</zp-button>
      <zp-button type="primary" icon="delete">删除</zp-button>
      <zp-button type="primary" icon="search">搜索</zp-button>
      <zp-button type="primary"><zp-icon icon="check" /> 上传</zp-button>
    </div>
  </template>
  <template #code>

```vue
<template>
  <zp-button type="primary" icon="edit">编辑</zp-button>
  <zp-button type="primary" icon="share">分享</zp-button>
  <zp-button type="primary" icon="delete">删除</zp-button>
  <zp-button type="primary" icon="search">搜索</zp-button>
  <zp-button type="primary"><zp-icon icon="check" /> 上传</zp-button>
</template>
```

  </template>
</DemoContainer>

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<DemoContainer>
  <template #demo>
    <zp-button type="primary" :loading="loading" @click="handleClick">
      {{ loading ? '加载中' : '点击加载' }}
    </zp-button>
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <zp-button type="primary" :loading="loading" @click="handleClick">
    {{ loading ? '加载中' : '点击加载' }}
  </zp-button>
</template>
```

  </template>
</DemoContainer>

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<DemoContainer>
  <template #demo>
    <div class="button-demo">
      <zp-button size="large">Large</zp-button>
      <zp-button>Default</zp-button>
      <zp-button size="small">Small</zp-button>
    </div>
    <div class="button-demo">
      <zp-button type="primary" size="large">Large</zp-button>
      <zp-button type="primary">Default</zp-button>
      <zp-button type="primary" size="small">Small</zp-button>
    </div>
  </template>
  <template #code>

```vue
<template>
  <zp-button size="large">Large</zp-button>
  <zp-button>Default</zp-button>
  <zp-button size="small">Small</zp-button>

  <zp-button type="primary" size="large">Large</zp-button>
  <zp-button type="primary">Default</zp-button>
  <zp-button type="primary" size="small">Small</zp-button>
</template>
```

  </template>
</DemoContainer>

## Button API

### Button Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| size | 按钮尺寸 | `'large' \| 'small'` | — |
| plain | 是否为朴素按钮 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| round | 是否为圆角按钮 | `boolean` | `false` |
| circle | 是否为圆形按钮 | `boolean` | `false` |
| text | 是否为文字按钮 | `boolean` | `false` |
| icon | 图标名称 | `string` | — |
| loading | 是否加载中状态 | `boolean` | `false` |
| native-type | 原生 type 属性 | `'button' \| 'submit' \| 'reset'` | `button` |
| autofocus | 是否自动聚焦 | `boolean` | `false` |

### Button Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内容 |

### Button Exposes

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| buttonRef | 按钮元素引用 | `Ref<HTMLButtonElement>` |

