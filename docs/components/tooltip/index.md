# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

::: demo 在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解。

<div class="demo-tooltip-container">
  <!-- 顶部行 -->
  <div class="demo-tooltip-row">
    <zp-tooltip content="Top Left prompts info" placement="top-start" trigger="hover">
      <zp-button>top-start</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Top Center prompts info" placement="top" trigger="hover">
      <zp-button>top</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Top Right prompts info" placement="top-end" trigger="hover">
      <zp-button>top-end</zp-button>
    </zp-tooltip>
  </div>

  <!-- 中间行：左侧和右侧 -->
  <div style="display: flex; justify-content: space-between; width: 100%; margin: 20px 0;">
    <!-- 左侧列 -->
    <div style="display: flex; flex-direction: column; gap: 20px; align-items: flex-start;">
      <zp-tooltip content="Left Top prompts info" placement="left-start" trigger="hover">
        <zp-button>left-start</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Left Center prompts info" placement="left" trigger="hover">
        <zp-button>left</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Left Bottom prompts info" placement="left-end" trigger="hover">
        <zp-button>left-end</zp-button>
      </zp-tooltip>
    </div>

    <!-- 右侧列 -->
    <div style="display: flex; flex-direction: column; gap: 20px; align-items: flex-end;">
      <zp-tooltip content="Right Top prompts info" placement="right-start" trigger="hover">
        <zp-button>right-start</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Right Center prompts info" placement="right" trigger="hover">
        <zp-button>right</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Right Bottom prompts info" placement="right-end" trigger="hover">
        <zp-button>right-end</zp-button>
      </zp-tooltip>
    </div>
  </div>

  <!-- 底部行 -->
  <div class="demo-tooltip-row">
    <zp-tooltip content="Bottom Left prompts info" placement="bottom-start" trigger="hover">
      <zp-button>bottom-start</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Bottom Center prompts info" placement="bottom" trigger="hover">
      <zp-button>bottom</zp-button>
    </zp-tooltip>
    <zp-tooltip content="Bottom Right prompts info" placement="bottom-end" trigger="hover">
      <zp-button>bottom-end</zp-button>
    </zp-tooltip>
  </div>
</div>

:::

```vue
<template>
  <zp-tooltip content="Top Left prompts info" placement="top-start" trigger="hover">
    <zp-button>top-start</zp-button>
  </zp-tooltip>
  <zp-tooltip content="Top Center prompts info" placement="top" trigger="hover">
    <zp-button>top</zp-button>
  </zp-tooltip>
  <zp-tooltip content="Top Right prompts info" placement="top-end" trigger="hover">
    <zp-button>top-end</zp-button>
  </zp-tooltip>
</template>
```

## 触发方式

使用 `trigger` 属性来设置触发方式，可选值为 `hover` 和 `click`。

::: demo 使用 `trigger` 属性来设置触发方式。

<div class="demo-message-group">
<zp-tooltip content="这是 hover 触发的提示" trigger="hover">
  <zp-button>Hover 触发</zp-button>
</zp-tooltip>
<zp-tooltip content="这是 click 触发的提示" trigger="click">
  <zp-button>Click 触发</zp-button>
</zp-tooltip>
</div>

:::

```vue
<zp-tooltip content="这是 hover 触发的提示" trigger="hover">
  <zp-button>Hover 触发</zp-button>
</zp-tooltip>
<zp-tooltip content="这是 click 触发的提示" trigger="click">
  <zp-button>Click 触发</zp-button>
</zp-tooltip>
```

