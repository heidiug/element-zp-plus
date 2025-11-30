# Input 输入框

通过鼠标或键盘输入字符。

<script setup>
import { ref } from 'vue'

const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const textarea = ref('')
</script>

## 基础用法

::: demo 基础的输入框用法。

<zp-input v-model="input" placeholder="请输入内容" />

:::

```vue
<template>
  <zp-input v-model="input" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

::: demo 禁用状态的输入框。

<zp-input v-model="input" placeholder="请输入内容" disabled />

:::

```vue
<template>
  <zp-input v-model="input" placeholder="请输入内容" disabled />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>
```

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框。

::: demo 可清空的输入框。

<zp-input v-model="input" placeholder="请输入内容" clearable />

:::

```vue
<template>
  <zp-input v-model="input" placeholder="请输入内容" clearable />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>
```

## 密码框

使用 `showPassword` 属性即可得到一个可切换显示隐藏的密码框。

::: demo 密码框。

<zp-input v-model="input" type="password" placeholder="请输入密码" showPassword />

:::

```vue
<template>
  <zp-input v-model="input" type="password" placeholder="请输入密码" showPassword />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>
```

## 输入框尺寸

使用 `size` 属性改变输入框大小。除了默认大小外，还有另外两个选项：`large`、`small`。

::: demo 不同尺寸的输入框。

<zp-input v-model="input1" placeholder="Large" size="large" />
<zp-input v-model="input2" placeholder="Default" />
<zp-input v-model="input3" placeholder="Small" size="small" />

:::

```vue
<template>
  <zp-input v-model="input1" placeholder="Large" size="large" />
  <zp-input v-model="input2" placeholder="Default" />
  <zp-input v-model="input3" placeholder="Small" size="small" />
</template>

<script setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
```

## 带图标的输入框

可以通过 `prefix` 和 `append` 插槽在输入框中添加内容。

::: demo 带图标的输入框。

<zp-input v-model="input1" placeholder="请输入内容">
  <template #prefix>
    <zp-icon icon="user" />
  </template>
</zp-input>
<zp-input v-model="input2" placeholder="请输入内容">
  <template #append>
    <zp-icon icon="search" />
  </template>
</zp-input>

:::

```vue
<template>
  <zp-input v-model="input1" placeholder="请输入内容">
    <template #prefix>
      <zp-icon icon="user" />
    </template>
  </zp-input>
  <zp-input v-model="input2" placeholder="请输入内容">
    <template #append>
      <zp-icon icon="search" />
    </template>
  </zp-input>
</template>

<script setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
</script>
```

## 只读

通过 `readonly` 属性设置输入框为只读。

::: demo 只读输入框。

<zp-input v-model="input" placeholder="请输入内容" readonly />

:::

```vue
<template>
  <zp-input v-model="input" placeholder="请输入内容" readonly />
</template>

<script setup>
import { ref } from 'vue'

const input = ref('只读内容')
</script>
```

## 文本域

用于输入多行文本信息可缩放的输入框。添加 `type="textarea"` 属性即可将输入框转换为文本域。

::: demo 文本域。

<zp-input v-model="textarea" type="textarea" :rows="4" placeholder="请输入内容" />

:::

```vue
<template>
  <zp-input v-model="textarea" type="textarea" :rows="4" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const textarea = ref('')
</script>
```
