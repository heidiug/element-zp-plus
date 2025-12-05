# Icon 图标

Element ZP Plus 使用 Font Awesome 图标库。

## 基础用法

通过 `icon` 属性指定图标名称。

<DemoContainer>
  <template #demo>
    <zp-icon icon="home" />
    <zp-icon icon="user" />
    <zp-icon icon="settings" />
    <zp-icon icon="search" />
    <zp-icon icon="heart" />
  </template>
  <template #code>

```vue
<template>
  <zp-icon icon="home" />
  <zp-icon icon="user" />
  <zp-icon icon="settings" />
  <zp-icon icon="search" />
  <zp-icon icon="heart" />
</template>
```

  </template>
</DemoContainer>

## 图标颜色

通过 `color` 属性设置图标颜色。

<DemoContainer>
  <template #demo>
    <zp-icon icon="home" color="#409eff" />
    <zp-icon icon="user" color="#67c23a" />
    <zp-icon icon="settings" color="#e6a23c" />
    <zp-icon icon="search" color="#f56c6c" />
    <zp-icon icon="heart" color="#909399" />
  </template>
  <template #code>

```vue
<template>
  <zp-icon icon="home" color="#409eff" />
  <zp-icon icon="user" color="#67c23a" />
  <zp-icon icon="settings" color="#e6a23c" />
  <zp-icon icon="search" color="#f56c6c" />
  <zp-icon icon="heart" color="#909399" />
</template>
```

  </template>
</DemoContainer>

## 图标尺寸

通过 `size` 属性设置图标尺寸。

<DemoContainer>
  <template #demo>
    <zp-icon icon="home" size="xs" />
    <zp-icon icon="home" size="sm" />
    <zp-icon icon="home" size="lg" />
    <zp-icon icon="home" size="xl" />
    <zp-icon icon="home" size="2x" />
    <zp-icon icon="home" size="3x" />
  </template>
  <template #code>

```vue
<template>
  <zp-icon icon="home" size="xs" />
  <zp-icon icon="home" size="sm" />
  <zp-icon icon="home" size="lg" />
  <zp-icon icon="home" size="xl" />
  <zp-icon icon="home" size="2x" />
  <zp-icon icon="home" size="3x" />
</template>
```

  </template>
</DemoContainer>

## 图标类型

通过 `type` 属性设置图标类型。

<DemoContainer>
  <template #demo>
    <zp-icon icon="check-circle" type="success" />
    <zp-icon icon="exclamation-triangle" type="warning" />
    <zp-icon icon="circle-xmark" type="danger" />
    <zp-icon icon="circle-info" type="info" />
  </template>
  <template #code>

```vue
<template>
  <zp-icon icon="check-circle" type="success" />
  <zp-icon icon="exclamation-triangle" type="warning" />
  <zp-icon icon="circle-xmark" type="danger" />
  <zp-icon icon="circle-info" type="info" />
</template>
```

  </template>
</DemoContainer>

## Icon API

### Icon Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标名称 | `string` | — |
| type | 图标类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| color | 图标颜色 | `string` | — |
| size | 图标尺寸 | `'xs' \| 'sm' \| 'lg' \| 'xl' \| '2x' \| '3x'` | — |

### Icon Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义图标内容 |

