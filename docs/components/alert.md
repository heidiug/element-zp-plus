# Alert 警告

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件提供四种主题，由 `type` 属性指定，默认值为 `info`。

<DemoContainer>
  <template #demo>
    <zp-alert title="成功提示" type="success" description="这是一条成功消息" :closable="false" />
    <br />
    <zp-alert title="消息提示" type="info" description="这是一条消息" :closable="false" />
    <br />
    <zp-alert title="警告提示" type="warning" description="这是一条警告消息" :closable="false" />
    <br />
    <zp-alert title="错误提示" type="danger" description="这是一条错误消息" :closable="false" />
  </template>
  <template #code>

```vue
<template>
  <zp-alert title="成功提示" type="success" description="这是一条成功消息" :closable="false" />
  <zp-alert title="消息提示" type="info" description="这是一条消息" :closable="false" />
  <zp-alert title="警告提示" type="warning" description="这是一条警告消息" :closable="false" />
  <zp-alert title="错误提示" type="danger" description="这是一条错误消息" :closable="false" />
</template>
```

  </template>
</DemoContainer>

## 主题

提供了两个不同的主题：`light` 和 `dark`。

<DemoContainer>
  <template #demo>
    <zp-alert title="浅色主题" type="success" effect="light" :closable="false" />
    <br />
    <zp-alert title="深色主题" type="success" effect="dark" :closable="false" />
  </template>
  <template #code>

```vue
<template>
  <zp-alert title="浅色主题" type="success" effect="light" :closable="false" />
  <zp-alert title="深色主题" type="success" effect="dark" :closable="false" />
</template>
```

  </template>
</DemoContainer>

## 自定义关闭按钮

设置 `closable` 属性来定义是否显示关闭按钮。 它接受一个 `Boolean` 值，默认为 `true`。 你也可以自定义关闭按钮的文本。

<DemoContainer>
  <template #demo>
    <zp-alert title="不可关闭" type="info" :closable="false" />
    <br />
    <zp-alert title="可关闭" type="info" />
  </template>
  <template #code>

```vue
<template>
  <zp-alert title="不可关闭" type="info" :closable="false" />
  <zp-alert title="可关闭" type="info" />
</template>
```

  </template>
</DemoContainer>

## 带有图标

显示图标让信息类型更加醒目。

<DemoContainer>
  <template #demo>
    <zp-alert title="成功提示" type="success" :show-icon="true" :closable="false" />
    <br />
    <zp-alert title="消息提示" type="info" :show-icon="true" :closable="false" />
    <br />
    <zp-alert title="警告提示" type="warning" :show-icon="true" :closable="false" />
    <br />
    <zp-alert title="错误提示" type="danger" :show-icon="true" :closable="false" />
  </template>
  <template #code>

```vue
<template>
  <zp-alert title="成功提示" type="success" :show-icon="true" :closable="false" />
  <zp-alert title="消息提示" type="info" :show-icon="true" :closable="false" />
  <zp-alert title="警告提示" type="warning" :show-icon="true" :closable="false" />
  <zp-alert title="错误提示" type="danger" :show-icon="true" :closable="false" />
</template>
```

  </template>
</DemoContainer>

## 自定义图标

通过 `icon` 属性自定义图标。

<DemoContainer>
  <template #demo>
    <zp-alert title="自定义图标" type="info" icon="star" :closable="false" />
  </template>
  <template #code>

```vue
<template>
  <zp-alert title="自定义图标" type="info" icon="star" :closable="false" />
</template>
```

  </template>
</DemoContainer>

## 带有辅助性文字介绍

包含标题和内容，解释更详细。

<DemoContainer>
  <template #demo>
    <zp-alert title="带辅助性文字介绍" type="success" :closable="false">
      <template #default>
        这是一段描述性文字，用于详细说明提示信息。
      </template>
    </zp-alert>
  </template>
  <template #code>

```vue
<template>
  <zp-alert title="带辅助性文字介绍" type="success" :closable="false">
    <template #default>
      这是一段描述性文字，用于详细说明提示信息。
    </template>
  </zp-alert>
</template>
```

  </template>
</DemoContainer>

## Alert API

### Alert Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| type | 主题 | `'success' \| 'warning' \| 'info' \| 'danger'` | `info` |
| description | 描述性文字 | `string` | — |
| closable | 是否可关闭 | `boolean` | `true` |
| show-icon | 是否显示图标 | `boolean` | `true` |
| icon | 自定义图标 | `string` | — |
| effect | 主题 | `'light' \| 'dark'` | `light` |

### Alert Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭 Alert 时触发 | `(ev: boolean) => void` |

### Alert Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 描述文字内容 |
| title | 标题内容 |
| icon | 自定义图标 |

