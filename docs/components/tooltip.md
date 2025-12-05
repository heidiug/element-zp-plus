# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

<DemoContainer>
  <template #demo>
    <zp-tooltip content="Top Left 提示文字" placement="top-start">
      <zp-button>上左</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Top Center 提示文字" placement="top">
      <zp-button>上边</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Top Right 提示文字" placement="top-end">
      <zp-button>上右</zp-button>
    </zp-tooltip>
    <br />
    <br />
    <zp-tooltip content="Left Start 提示文字" placement="left-start">
      <zp-button>左上</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Left Center 提示文字" placement="left">
      <zp-button>左边</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Left End 提示文字" placement="left-end">
      <zp-button>左下</zp-button>
    </zp-tooltip>
    <br />
    <br />
    <zp-tooltip content="Right Start 提示文字" placement="right-start">
      <zp-button>右上</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Right Center 提示文字" placement="right">
      <zp-button>右边</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Right End 提示文字" placement="right-end">
      <zp-button>右下</zp-button>
    </zp-tooltip>
    <br />
    <br />
    <zp-tooltip content="Bottom Left 提示文字" placement="bottom-start">
      <zp-button>下左</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Bottom Center 提示文字" placement="bottom">
      <zp-button>下边</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Bottom Right 提示文字" placement="bottom-end">
      <zp-button>下右</zp-button>
    </zp-tooltip>
  </template>
  <template #code>

```vue
<template>
  <zp-tooltip content="Top Left 提示文字" placement="top-start">
    <zp-button>上左</zp-button>
  </zp-tooltip>
  <zp-tooltip content="Top Center 提示文字" placement="top">
    <zp-button>上边</zp-button>
  </zp-tooltip>
  <zp-tooltip content="Top Right 提示文字" placement="top-end">
    <zp-button>上右</zp-button>
  </zp-tooltip>
</template>
```

  </template>
</DemoContainer>

## 主题

Tooltip 组件提供了两个不同的主题：`dark` 和 `light`。

<DemoContainer>
  <template #demo>
    <zp-tooltip content="Dark theme" placement="top">
      <zp-button>Dark</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Light theme" placement="bottom">
      <zp-button>Light</zp-button>
    </zp-tooltip>
  </template>
  <template #code>

```vue
<template>
  <zp-tooltip content="Dark theme" placement="top">
    <zp-button>Dark</zp-button>
  </zp-tooltip>
  <zp-tooltip content="Light theme" placement="bottom">
    <zp-button>Light</zp-button>
  </zp-tooltip>
</template>
```

  </template>
</DemoContainer>

## 更多内容

展示多行文本和设置格式。

<DemoContainer>
  <template #demo>
    <zp-tooltip placement="top">
      <template #content>
        <div>多行信息</div>
        <div>第二行信息</div>
      </template>
      <zp-button>多行内容</zp-button>
    </zp-tooltip>
  </template>
  <template #code>

```vue
<template>
  <zp-tooltip placement="top">
    <template #content>
      <div>多行信息</div>
      <div>第二行信息</div>
    </template>
    <zp-button>多行内容</zp-button>
  </zp-tooltip>
</template>
```

  </template>
</DemoContainer>

## 触发方式

鼠标悬停触发（默认）。

<DemoContainer>
  <template #demo>
    <zp-tooltip content="点击触发" trigger="click">
      <zp-button>点击</zp-button>
    </zp-tooltip>
  </template>
  <template #code>

```vue
<template>
  <zp-tooltip content="点击触发" trigger="click">
    <zp-button>点击</zp-button>
  </zp-tooltip>
</template>
```

  </template>
</DemoContainer>

## Tooltip API

### Tooltip Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 显示的内容，也可以通过 `slot#content` 传入 | `string` | — |
| placement | Tooltip 的出现位置 | `Placement` | `top` |
| trigger | 触发方式 | `'hover' \| 'click'` | `hover` |
| manual | 手动控制模式，设置为 `true` 后，鼠标进入和离开不会触发显示/隐藏 | `boolean` | `false` |
| propper-options | Popper.js 的参数 | `Partial<Options>` | — |

### Tooltip Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| visible-change | 显示状态改变时触发 | `(visible: boolean) => void` |
| click-outside | 点击外部区域时触发 | `(value: boolean) => void` |

### Tooltip Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示 tooltip | — |
| hide | 隐藏 tooltip | — |

### Tooltip Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发 Tooltip 显示的元素 |
| content | 自定义 Tooltip 的内容 |

