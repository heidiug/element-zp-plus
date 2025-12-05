# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

<script setup>
import { ref } from 'vue'

const switchValue1 = ref(true)
const switchValue2 = ref(true)
const switchValue3 = ref(true)
const switchValue4 = ref('100')
const switchValue5 = ref(false)
const switchValue6 = ref(true)
const switchValue7 = ref(true)
const switchValue8 = ref(true)
</script>

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `active-color` 属性与 `inactive-color` 属性来设置开关的背景色。

<DemoContainer>
  <template #demo>
    <zp-switch v-model="switchValue1" />
    <br />
    <br />
    <zp-switch v-model="switchValue2" />
  </template>
  <template #code>

```vue
<template>
  <zp-switch v-model="switchValue1" />
  <zp-switch v-model="switchValue2" />
</template>
```

  </template>
</DemoContainer>

## 文字描述

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。

<DemoContainer>
  <template #demo>
    <zp-switch v-model="switchValue3" active-text="开" inactive-text="关" />
  </template>
  <template #code>

```vue
<template>
  <zp-switch v-model="switchValue3" active-text="开" inactive-text="关" />
</template>
```

  </template>
</DemoContainer>

## 扩展的 value 类型

设置 `active-value` 和 `inactive-value` 属性，接受 `Boolean`, `String` 或 `Number` 类型的值。

<DemoContainer>
  <template #demo>
    <zp-switch v-model="switchValue4" active-value="100" inactive-value="0" />
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const switchValue4 = ref('100')
</script>

<template>
  <zp-switch v-model="switchValue4" active-value="100" inactive-value="0" />
</template>
```

  </template>
</DemoContainer>

## 禁用状态

设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。

<DemoContainer>
  <template #demo>
    <zp-switch v-model="switchValue5" disabled />
  </template>
  <template #code>

```vue
<template>
  <zp-switch v-model="switchValue5" disabled />
</template>
```

  </template>
</DemoContainer>

## 不同尺寸

设置 `size` 属性，接受 `large`、`default`、`small`。

<DemoContainer>
  <template #demo>
    <zp-switch v-model="switchValue6" size="large" />
    <br />
    <br />
    <zp-switch v-model="switchValue7" />
    <br />
    <br />
    <zp-switch v-model="switchValue8" size="small" />
  </template>
  <template #code>

```vue
<template>
  <zp-switch v-model="switchValue6" size="large" />
  <zp-switch v-model="switchValue7" />
  <zp-switch v-model="switchValue8" size="small" />
</template>
```

  </template>
</DemoContainer>

## Switch API

### Switch Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `SwitchValue` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 开关的尺寸 | `'large' \| 'default' \| 'small'` | `default` |
| active-value | switch 打开时的值 | `SwitchValue` | `true` |
| inactive-value | switch 关闭时的值 | `SwitchValue` | `false` |
| active-text | switch 打开时的文字描述 | `string` | — |
| inactive-text | switch 关闭时的文字描述 | `string` | — |
| id | 原生 id 属性 | `string` | — |
| name | 原生 name 属性 | `string` | — |

### Switch Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | switch 状态发生变化时触发 | `(value: SwitchValue) => void` |

