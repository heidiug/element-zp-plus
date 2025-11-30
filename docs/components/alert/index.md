# Alert 警告

用于页面中展示重要的提示信息。

## 基础用法

页面中的非浮层元素，不会自动消失。

::: demo Alert 组件提供多种主题，由 `type` 属性指定。

<zp-alert title="success" type="success" />
<zp-alert title="warning" type="warning" />
<zp-alert title="danger" type="danger" />
<zp-alert title="info" type="info" />
<zp-alert title="primary" type="primary" />

:::

```vue
<zp-alert title="success" type="success" />
<zp-alert title="warning" type="warning" />
<zp-alert title="danger" type="danger" />
<zp-alert title="info" type="info" />
<zp-alert title="primary" type="primary" />
```

## 主题切换

通过 `type` 属性来切换不同的主题。

::: demo 使用 `type` 属性来切换不同的主题。

<zp-alert title="成功提示" type="success" />
<zp-alert title="警告提示" type="warning" />
<zp-alert title="危险提示" type="danger" />
<zp-alert title="信息提示" type="info" />
<zp-alert title="主要提示" type="primary" />

:::

```vue
<zp-alert title="成功提示" type="success" />
<zp-alert title="警告提示" type="warning" />
<zp-alert title="危险提示" type="danger" />
<zp-alert title="信息提示" type="info" />
<zp-alert title="主要提示" type="primary" />
```

## 可关闭

使用 `closable` 属性来显示关闭按钮，默认为 `true`。

::: demo 使用 `closable` 属性来显示关闭按钮。

<zp-alert title="这是一条可关闭的提示" type="success" :closable="true" />
<zp-alert title="这是一条不可关闭的提示" type="info" :closable="false" />

:::

```vue
<zp-alert title="这是一条可关闭的提示" type="success" :closable="true" />
<zp-alert title="这是一条不可关闭的提示" type="info" :closable="false" />
```

## 带有描述

使用 `description` 属性来添加描述信息。

::: demo 使用 `description` 属性来添加描述信息。

<zp-alert title="description" type="primary" description="This is a description" />

:::

```vue
<zp-alert title="description" type="primary" description="This is a description" />
```

## 不显示图标

使用 `showIcon` 属性来控制是否显示图标，默认为 `true`。

::: demo 使用 `showIcon` 属性来控制是否显示图标。

<zp-alert title="不显示图标" type="success" :showIcon="false" />
<zp-alert title="显示图标" type="success" :showIcon="true" />

:::

```vue
<zp-alert title="不显示图标" type="success" :showIcon="false" />
<zp-alert title="显示图标" type="success" :showIcon="true" />
```

