# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const $message = instance?.appContext.config.globalProperties.$message

const showSuccess = () => {
  $message?.({
    message: '这是一条成功消息',
    type: 'success'
  })
}

const showWarning = () => {
  $message?.({
    message: '这是一条警告消息',
    type: 'warning'
  })
}

const showInfo = () => {
  $message?.({
    message: '这是一条消息提示',
    type: 'info'
  })
}

const showError = () => {
  $message?.({
    message: '这是一条错误消息',
    type: 'error'
  })
}

const showTop = () => {
  $message?.({
    message: '顶部显示',
    type: 'success',
    offset: 20
  })
}

const showClosable = () => {
  $message?.({
    message: '这是一条可关闭的消息',
    type: 'info',
    showClose: true
  })
}

const showHTML = () => {
  $message?.({
    message: '<strong>这是 <i>HTML</i> 片段</strong>',
    type: 'success',
    dangerouslyUseHTMLString: true
  })
}
</script>

## 基础用法

从顶部出现，3 秒后自动消失。

<DemoContainer>
  <template #demo>
    <zp-button @click="showSuccess">成功</zp-button>
    <zp-button @click="showWarning">警告</zp-button>
    <zp-button @click="showInfo">消息</zp-button>
    <zp-button @click="showError">错误</zp-button>
  </template>
  <template #code>

```vue
<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const $message = instance?.appContext.config.globalProperties.$message

const showSuccess = () => {
  $message?.({
    message: '这是一条成功消息',
    type: 'success'
  })
}

const showWarning = () => {
  $message?.({
    message: '这是一条警告消息',
    type: 'warning'
  })
}

const showInfo = () => {
  $message?.({
    message: '这是一条消息提示',
    type: 'info'
  })
}

const showError = () => {
  $message?.({
    message: '这是一条错误消息',
    type: 'error'
  })
}
</script>

<template>
  <zp-button @click="showSuccess">成功</zp-button>
  <zp-button @click="showWarning">警告</zp-button>
  <zp-button @click="showInfo">消息</zp-button>
  <zp-button @click="showError">错误</zp-button>
</template>
```

  </template>
</DemoContainer>

## 不同位置

可以让消息从不同方向出现。

<DemoContainer>
  <template #demo>
    <zp-button @click="showTop">顶部</zp-button>
  </template>
  <template #code>

```vue
<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const $message = instance?.appContext.config.globalProperties.$message

const showTop = () => {
  $message?.({
    message: '顶部显示',
    type: 'success',
    offset: 20
  })
}
</script>

<template>
  <zp-button @click="showTop">顶部</zp-button>
</template>
```

  </template>
</DemoContainer>

## 可关闭的消息提示

可以添加关闭按钮。

<DemoContainer>
  <template #demo>
    <zp-button @click="showClosable">可关闭</zp-button>
  </template>
  <template #code>

```vue
<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const $message = instance?.appContext.config.globalProperties.$message

const showClosable = () => {
  $message?.({
    message: '这是一条可关闭的消息',
    type: 'info',
    showClose: true
  })
}
</script>

<template>
  <zp-button @click="showClosable">可关闭</zp-button>
</template>
```

  </template>
</DemoContainer>

## 使用 HTML 片段

`message` 属性支持传入 HTML 片段。

<DemoContainer>
  <template #demo>
    <zp-button @click="showHTML">HTML 片段</zp-button>
  </template>
  <template #code>

```vue
<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const $message = instance?.appContext.config.globalProperties.$message

const showHTML = () => {
  $message?.({
    message: '<strong>这是 <i>HTML</i> 片段</strong>',
    type: 'success',
    dangerouslyUseHTMLString: true
  })
}
</script>

<template>
  <zp-button @click="showHTML">HTML 片段</zp-button>
</template>
```

  </template>
</DemoContainer>

## 方法调用

Message 组件可以通过方法调用。 引入 `createMessage` 方法，调用它并传入配置对象即可。 在该方法中，我们使用 `h` 函数和 `render` 函数来渲染组件。

```typescript
import { createMessage } from 'element-zp-plus'

createMessage({
  message: '这是一条消息',
  type: 'success'
})
```

## Message API

### createMessage 方法

调用 `createMessage` 会返回一个 Message 实例，用于手动关闭消息。

```typescript
const message = createMessage({
  message: '这是一条消息',
  type: 'success'
})

// 手动关闭
message.destroy()
```

### createMessage 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 消息文字 | `string \| VNode` | — |
| type | 消息类型 | `'success' \| 'warning' \| 'info' \| 'error'` | `info` |
| duration | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | `number` | `3000` |
| show-close | 是否显示关闭按钮 | `boolean` | `false` |
| offset | Message 距离窗口顶部的偏移量 | `number` | `20` |
| dangerously-use-html-string | 是否将 message 属性作为 HTML 片段处理 | `boolean` | `false` |
| on-close | 关闭时的回调函数 | `() => void` | — |

