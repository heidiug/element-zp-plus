# Dropdown 下拉菜单

向下弹出的列表。

## 基础用法

默认使用 `hover` 触发，鼠标悬停在按钮上时显示下拉菜单。

::: demo 移动到下拉菜单上，展开更多操作。

<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3">选项3</zp-dropdown-item>
      <zp-dropdown-item :item-key="4">选项4</zp-dropdown-item>
      <zp-dropdown-item :item-key="5">选项5</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>

:::

```vue
<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3">选项3</zp-dropdown-item>
      <zp-dropdown-item :item-key="4">选项4</zp-dropdown-item>
      <zp-dropdown-item :item-key="5">选项5</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>
```

## 点击触发

使用 `trigger="click"` 来设置点击触发。

::: demo 使用 `trigger="click"` 来设置点击触发。

<zp-dropdown placement="bottom-start" trigger="click">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3">选项3</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>

:::

```vue
<zp-dropdown placement="bottom-start" trigger="click">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3">选项3</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>
```

## 自定义内容

你可以在 `dropdown` slot 中放置任何内容，比如按钮、链接等。

::: demo 在 `dropdown` slot 中可以放置自定义内容。

<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown2</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">
        <zp-button plain>选项1</zp-button>
      </zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3" disabled>选项3</zp-dropdown-item>
      <zp-dropdown-item :item-key="4" divided>选项4</zp-dropdown-item>
      <zp-dropdown-item :item-key="5">
        <a href="#" style="text-decoration: none; color: inherit;">选项5</a>
      </zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>

:::

```vue
<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown2</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">
        <zp-button plain>选项1</zp-button>
      </zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3" disabled>选项3</zp-dropdown-item>
      <zp-dropdown-item :item-key="4" divided>选项4</zp-dropdown-item>
      <zp-dropdown-item :item-key="5">
        <a href="#">选项5</a>
      </zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>
```

## 禁用状态

使用 `disabled` 属性来禁用某个选项。

::: demo 使用 `disabled` 属性来禁用某个选项。

<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3" disabled>选项3（已禁用）</zp-dropdown-item>
      <zp-dropdown-item :item-key="4">选项4</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>

:::

```vue
<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3" disabled>选项3（已禁用）</zp-dropdown-item>
      <zp-dropdown-item :item-key="4">选项4</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>
```

## 分隔线

使用 `divided` 属性来添加分隔线。

::: demo 使用 `divided` 属性来添加分隔线。

<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3" divided>选项3（上方有分隔线）</zp-dropdown-item>
      <zp-dropdown-item :item-key="4">选项4</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>

:::

```vue
<zp-dropdown placement="bottom-start" trigger="hover">
  <zp-button plain>Dropdown</zp-button>
  <template #dropdown>
    <zp-dropdown-menu>
      <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
      <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
      <zp-dropdown-item :item-key="3" divided>选项3（上方有分隔线）</zp-dropdown-item>
      <zp-dropdown-item :item-key="4">选项4</zp-dropdown-item>
    </zp-dropdown-menu>
  </template>
</zp-dropdown>
```

