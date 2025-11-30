# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

::: demo 使用 `type` 属性来定义 Button 的样式。

<div class="demo-button-group">
<zp-button type="primary">Primary</zp-button>
<zp-button type="success">success</zp-button>
<zp-button type="warning">warning</zp-button>
<zp-button type="danger">danger</zp-button>
<zp-button type="info">info</zp-button>
</div>

:::

```vue
<zp-button type="primary">Primary</zp-button>
<zp-button type="success">success</zp-button>
<zp-button type="warning">warning</zp-button>
<zp-button type="danger">danger</zp-button>
<zp-button type="info">info</zp-button>
```

## 朴素按钮

朴素按钮，通过 `plain` 属性来设置。

::: demo 使用 `plain` 属性来定义朴素按钮样式。

<div class="demo-button-group">
<zp-button type="primary" plain>Primary</zp-button>
<zp-button type="success" plain>success</zp-button>
<zp-button type="warning" plain>warning</zp-button>
<zp-button type="danger" plain>danger</zp-button>
<zp-button type="info" plain>info</zp-button>
</div>

:::

```vue
<zp-button type="primary" plain>Primary</zp-button>
<zp-button type="success" plain>success</zp-button>
<zp-button type="warning" plain>warning</zp-button>
<zp-button type="danger" plain>danger</zp-button>
<zp-button type="info" plain>info</zp-button>
```

## 圆角按钮

使用 `round` 属性来定义圆角按钮。

::: demo 使用 `round` 属性来定义圆角按钮样式。

<div class="demo-button-group">
<zp-button type="primary" round>Primary</zp-button>
<zp-button type="success" round>success</zp-button>
<zp-button type="warning" round>warning</zp-button>
<zp-button type="danger" round>danger</zp-button>
<zp-button type="info" round>info</zp-button>
</div>

:::

```vue
<zp-button type="primary" round>Primary</zp-button>
<zp-button type="success" round>success</zp-button>
<zp-button type="warning" round>warning</zp-button>
<zp-button type="danger" round>danger</zp-button>
<zp-button type="info" round>info</zp-button>
```

## 圆形按钮

使用 `circle` 属性来定义圆形按钮。

::: demo 使用 `circle` 属性来定义圆形按钮样式。

<div class="demo-button-group">
<zp-button type="primary" circle icon="search" />
<zp-button type="success" circle icon="edit" />
<zp-button type="warning" circle icon="check" />
<zp-button type="danger" circle icon="message" />
<zp-button type="info" circle icon="star" />
</div>

:::

```vue
<zp-button type="primary" circle icon="search" />
<zp-button type="success" circle icon="edit" />
<zp-button type="warning" circle icon="check" />
<zp-button type="danger" circle icon="message" />
<zp-button type="info" circle icon="star" />
```

## 禁用状态

按钮不可用状态。

::: demo 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

<div class="demo-button-group">
<zp-button disabled>默认按钮</zp-button>
<zp-button type="primary" disabled>主要按钮</zp-button>
<zp-button type="success" disabled>成功按钮</zp-button>
<zp-button type="info" disabled>信息按钮</zp-button>
<zp-button type="warning" disabled>警告按钮</zp-button>
<zp-button type="danger" disabled>危险按钮</zp-button>
</div>

:::

```vue
<zp-button disabled>默认按钮</zp-button>
<zp-button type="primary" disabled>主要按钮</zp-button>
<zp-button type="success" disabled>成功按钮</zp-button>
<zp-button type="info" disabled>信息按钮</zp-button>
<zp-button type="warning" disabled>警告按钮</zp-button>
<zp-button type="danger" disabled>危险按钮</zp-button>
```

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo 使用 `icon` 属性为按钮添加图标。

<div class="demo-button-group">
<zp-button type="primary" icon="arrow-right">ButtonIcon</zp-button>
<zp-button type="success" icon="check">确认</zp-button>
<zp-button type="warning" icon="edit">编辑</zp-button>
</div>

:::

```vue
<zp-button type="primary" icon="arrow-right">ButtonIcon</zp-button>
<zp-button type="success" icon="check">确认</zp-button>
<zp-button type="warning" icon="edit">编辑</zp-button>
```

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

::: demo 要设置为 `loading` 状态，只要设置 `loading` 属性为 `true` 即可。

<div class="demo-button-group">
<zp-button type="primary" loading>ButtonLoading</zp-button>
<zp-button type="success" loading>加载中</zp-button>
</div>

:::

```vue
<zp-button type="primary" loading>ButtonLoading</zp-button>
<zp-button type="success" loading>加载中</zp-button>
```

## 文本按钮

使用 `text` 属性来定义文本按钮。

::: demo 使用 `text` 属性来定义文本按钮样式。

<div class="demo-button-group">
<zp-button type="primary" text>myButtonText</zp-button>
<zp-button type="success" text>文本按钮</zp-button>
</div>

:::

```vue
<zp-button type="primary" text>myButtonText</zp-button>
<zp-button type="success" text>文本按钮</zp-button>
```

## 按钮尺寸

使用 `size` 属性来定义按钮尺寸。

::: demo 使用 `size` 属性来定义按钮尺寸，可选值为 `large` 和 `small`。

<div class="demo-button-group">
<zp-button type="primary" size="large">Large</zp-button>
<zp-button type="primary">Default</zp-button>
<zp-button type="primary" size="small">Small</zp-button>
</div>

:::

```vue
<zp-button type="primary" size="large">Large</zp-button>
<zp-button type="primary">Default</zp-button>
<zp-button type="primary" size="small">Small</zp-button>
```

