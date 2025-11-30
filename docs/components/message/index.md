# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

<script setup>
import { createMessage } from '@/components/Message/method'
</script>

::: demo 使用 `createMessage` 方法来创建消息提示。

<div class="demo-message-group">
<zp-button @click="createMessage({ message: '这是一条成功消息', type: 'success' })">
  成功
</zp-button>
<zp-button @click="createMessage({ message: '这是一条警告消息', type: 'warning' })">
  警告
</zp-button>
<zp-button @click="createMessage({ message: '这是一条消息提示', type: 'info' })">
  消息
</zp-button>
<zp-button @click="createMessage({ message: '这是一条错误消息', type: 'error' })">
  错误
</zp-button>
</div>

:::

```vue
<script setup>
import { createMessage } from '@/components/Message/method'
</script>

<template>
  <zp-button @click="createMessage({ message: '这是一条成功消息', type: 'success' })">
    成功
  </zp-button>
  <zp-button @click="createMessage({ message: '这是一条警告消息', type: 'warning' })">
    警告
  </zp-button>
  <zp-button @click="createMessage({ message: '这是一条消息提示', type: 'info' })">
    消息
  </zp-button>
  <zp-button @click="createMessage({ message: '这是一条错误消息', type: 'error' })">
    错误
  </zp-button>
</template>
```

## 不同状态

用于显示操作反馈，如成功、警告、消息、错误。

::: demo 使用 `type` 属性来设置不同的状态。

<div class="demo-message-group">
<zp-button @click="createMessage({ message: '操作成功', type: 'success' })">
  成功
</zp-button>
<zp-button @click="createMessage({ message: '请注意', type: 'warning' })">
  警告
</zp-button>
<zp-button @click="createMessage({ message: '这是一条消息', type: 'info' })">
  消息
</zp-button>
<zp-button @click="createMessage({ message: '操作失败', type: 'error' })">
  错误
</zp-button>
</div>

:::

```vue
<script setup>
import { createMessage } from '@/components/Message/method'
</script>

<template>
  <zp-button @click="createMessage({ message: '操作成功', type: 'success' })">
    成功
  </zp-button>
  <zp-button @click="createMessage({ message: '请注意', type: 'warning' })">
    警告
  </zp-button>
  <zp-button @click="createMessage({ message: '这是一条消息', type: 'info' })">
    消息
  </zp-button>
  <zp-button @click="createMessage({ message: '操作失败', type: 'error' })">
    错误
  </zp-button>
</template>
```

## 可关闭

使用 `showClose` 属性来显示关闭按钮。

::: demo 使用 `showClose` 属性来显示关闭按钮。

<div class="demo-message-group">
<zp-button @click="createMessage({ message: '这是一条可关闭的消息', type: 'success', showClose: true })">
  可关闭
</zp-button>
</div>

:::

```vue
<script setup>
import { createMessage } from '@/components/Message/method'
</script>

<template>
  <zp-button @click="createMessage({ message: '这是一条可关闭的消息', type: 'success', showClose: true })">
    可关闭
  </zp-button>
</template>
```

## 朴素样式

使用 `plain` 属性来设置朴素样式。

::: demo 使用 `plain` 属性来设置朴素样式。

<div class="demo-message-group">
<zp-button @click="createMessage({ message: '这是一条朴素样式的消息', type: 'success', plain: true })">
  朴素样式
</zp-button>
</div>

:::

```vue
<script setup>
import { createMessage } from '@/components/Message/method'
</script>

<template>
  <zp-button @click="createMessage({ message: '这是一条朴素样式的消息', type: 'success', plain: true })">
    朴素样式
  </zp-button>
</template>
```

## 自定义时长

使用 `duration` 属性来设置显示时长，单位为毫秒。设置为 0 则不会自动关闭。

::: demo 使用 `duration` 属性来设置显示时长。

<div class="demo-message-group">
<zp-button @click="createMessage({ message: '这条消息5秒后消失', type: 'success', duration: 5000 })">
  5秒后消失
</zp-button>
<zp-button @click="createMessage({ message: '这条消息不会自动关闭', type: 'info', duration: 0 })">
  不自动关闭
</zp-button>
</div>

:::

```vue
<script setup>
import { createMessage } from '@/components/Message/method'
</script>

<template>
  <zp-button @click="createMessage({ message: '这条消息5秒后消失', type: 'success', duration: 5000 })">
    5秒后消失
  </zp-button>
  <zp-button @click="createMessage({ message: '这条消息不会自动关闭', type: 'info', duration: 0 })">
    不自动关闭
  </zp-button>
</template>
```

