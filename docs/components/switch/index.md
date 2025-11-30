# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
const value3 = ref('close')
const value4 = ref('off')
const value5 = ref(0)
const value6 = ref(false)
const value7 = ref(true)
const value8 = ref(false)
const value9 = ref(false)
const value10 = ref(false)
</script>

## 基础用法

::: demo 基础的开关用法。

<zp-switch v-model="value1" />

:::

```vue
<template>
  <zp-switch v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>
```

## 文字描述

使用 `activeText` 属性与 `inactiveText` 属性来设置开关的文字描述。

::: demo 带文字描述的开关。

<zp-switch 
  v-model="value2" 
  active-text="开启" 
  inactive-text="关闭" 
/>

:::

```vue
<template>
  <zp-switch 
    v-model="value" 
    active-text="开启" 
    inactive-text="关闭" 
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>
```

## 扩展的 value 类型

设置 `activeValue` 和 `inactiveValue` 属性，接受 `Boolean`、`String` 或 `Number` 类型的值。

::: demo 扩展的 value 类型。

<zp-switch 
  v-model="value3" 
  active-value="open" 
  inactive-value="close"
  active-text="open"
  inactive-text="close"
/>
<zp-switch 
  v-model="value4" 
  active-value="on" 
  inactive-value="off"
  active-text="on"
  inactive-text="off"
/>
<zp-switch 
  v-model="value5" 
  :active-value="1" 
  :inactive-value="0"
  active-text="1"
  inactive-text="0"
/>

:::

```vue
<template>
  <zp-switch 
    v-model="value1" 
    active-value="open" 
    inactive-value="close"
    active-text="open"
    inactive-text="close"
  />
  <zp-switch 
    v-model="value2" 
    active-value="on" 
    inactive-value="off"
    active-text="on"
    inactive-text="off"
  />
  <zp-switch 
    v-model="value3" 
    :active-value="1" 
    :inactive-value="0"
    active-text="1"
    inactive-text="0"
  />
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('close')
const value2 = ref('off')
const value3 = ref(0)
</script>
```

## 禁用状态

设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。

::: demo 禁用状态的开关。

<zp-switch v-model="value6" disabled />
<zp-switch v-model="value7" disabled />

:::

```vue
<template>
  <zp-switch v-model="value1" disabled />
  <zp-switch v-model="value2" disabled />
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
</script>
```

## 不同尺寸

使用 `size` 属性设置开关的尺寸，可选值有 `large`、`default`、`small`。

::: demo 不同尺寸的开关。

<zp-switch v-model="value8" size="large" />
<zp-switch v-model="value9" />
<zp-switch v-model="value10" size="small" />

:::

```vue
<template>
  <zp-switch v-model="value1" size="large" />
  <zp-switch v-model="value2" />
  <zp-switch v-model="value3" size="small" />
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
</script>
```
