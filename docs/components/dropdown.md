# Dropdown 下拉菜单

向下弹出的列表。

<script setup>
const handleCommand = (key) => {
  console.log('点击了', key)
}
</script>

## 基础用法

移动到下拉菜单上，展开更多操作。

<DemoContainer>
  <template #demo>
    <zp-dropdown>
      <zp-button>下拉菜单</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1" @click="handleCommand('1')">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2" @click="handleCommand('2')">狮子头</zp-dropdown-item>
          <zp-dropdown-item item-key="3" @click="handleCommand('3')">螺蛳粉</zp-dropdown-item>
          <zp-dropdown-item item-key="4" divided @click="handleCommand('4')">双皮奶</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
  </template>
  <template #code>

```vue
<template>
  <zp-dropdown>
    <zp-button>下拉菜单</zp-button>
    <template #dropdown>
      <zp-dropdown-menu>
        <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
        <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
        <zp-dropdown-item item-key="3">螺蛳粉</zp-dropdown-item>
        <zp-dropdown-item item-key="4" divided>双皮奶</zp-dropdown-item>
      </zp-dropdown-menu>
    </template>
  </zp-dropdown>
</template>
```

  </template>
</DemoContainer>

## 触发方式

可以配置点击触发。

<DemoContainer>
  <template #demo>
    <zp-dropdown trigger="click">
      <zp-button>点击触发</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
          <zp-dropdown-item item-key="3">螺蛳粉</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
  </template>
  <template #code>

```vue
<template>
  <zp-dropdown trigger="click">
    <zp-button>点击触发</zp-button>
    <template #dropdown>
      <zp-dropdown-menu>
        <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
        <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
        <zp-dropdown-item item-key="3">螺蛳粉</zp-dropdown-item>
      </zp-dropdown-menu>
    </template>
  </zp-dropdown>
</template>
```

  </template>
</DemoContainer>

## 不同方向

支持 6 个弹出位置。

<DemoContainer>
  <template #demo>
    <zp-dropdown placement="top">
      <zp-button>上</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
    <zp-dropdown placement="bottom">
      <zp-button>下</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
    <zp-dropdown placement="left">
      <zp-button>左</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
    <zp-dropdown placement="right">
      <zp-button>右</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
  </template>
  <template #code>

```vue
<template>
  <zp-dropdown placement="top">
    <zp-button>上</zp-button>
    <template #dropdown>
      <zp-dropdown-menu>
        <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
        <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
      </zp-dropdown-menu>
    </template>
  </zp-dropdown>
</template>
```

  </template>
</DemoContainer>

## 禁用菜单项

通过 `disabled` 属性禁用菜单项。

<DemoContainer>
  <template #demo>
    <zp-dropdown>
      <zp-button>下拉菜单</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2" disabled>狮子头</zp-dropdown-item>
          <zp-dropdown-item item-key="3">螺蛳粉</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
  </template>
  <template #code>

```vue
<template>
  <zp-dropdown>
    <zp-button>下拉菜单</zp-button>
    <template #dropdown>
      <zp-dropdown-menu>
        <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
        <zp-dropdown-item item-key="2" disabled>狮子头</zp-dropdown-item>
        <zp-dropdown-item item-key="3">螺蛳粉</zp-dropdown-item>
      </zp-dropdown-menu>
    </template>
  </zp-dropdown>
</template>
```

  </template>
</DemoContainer>

## 分割线

通过 `divided` 属性添加分割线。

<DemoContainer>
  <template #demo>
    <zp-dropdown>
      <zp-button>下拉菜单</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
          <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
          <zp-dropdown-item item-key="3" divided>螺蛳粉</zp-dropdown-item>
          <zp-dropdown-item item-key="4">双皮奶</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
  </template>
  <template #code>

```vue
<template>
  <zp-dropdown>
    <zp-button>下拉菜单</zp-button>
    <template #dropdown>
      <zp-dropdown-menu>
        <zp-dropdown-item item-key="1">黄金糕</zp-dropdown-item>
        <zp-dropdown-item item-key="2">狮子头</zp-dropdown-item>
        <zp-dropdown-item item-key="3" divided>螺蛳粉</zp-dropdown-item>
        <zp-dropdown-item item-key="4">双皮奶</zp-dropdown-item>
      </zp-dropdown-menu>
    </template>
  </zp-dropdown>
</template>
```

  </template>
</DemoContainer>

## Dropdown API

### Dropdown Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placement | 菜单弹出位置 | `Placement` | `bottom` |
| trigger | 触发方式 | `'hover' \| 'click'` | `hover` |
| manual | 手动控制模式 | `boolean` | `false` |
| hide-after-click | 点击后是否隐藏菜单 | `boolean` | `true` |
| max-height | 菜单最大高度 | `number` | — |
| propper-options | Popper.js 的参数 | `Partial<Options>` | — |

### Dropdown Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| visible-change | 下拉框出现/隐藏时触发 | `(visible: boolean) => void` |
| command | 点击菜单项触发的事件回调 | `(key: string \| number) => void` |

### Dropdown Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示下拉菜单 | — |
| hide | 隐藏下拉菜单 | — |

### DropdownItem Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| item-key | 唯一标志 | `string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| divided | 是否显示分割线 | `boolean` | `false` |

### DropdownItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项时触发 | `(key: string \| number) => void` |

### DropdownItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 菜单项内容 |

