# Input 输入框

通过鼠标或键盘输入字符。

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
const passwordValue = ref('')
</script>

## 基础用法

<DemoContainer>
  <template #demo>
    <zp-input v-model="inputValue" placeholder="请输入内容" style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-input v-model="inputValue" placeholder="请输入内容" />
</template>
```

  </template>
</DemoContainer>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

<DemoContainer>
  <template #demo>
    <zp-input v-model="inputValue" placeholder="请输入内容" disabled style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-input v-model="inputValue" placeholder="请输入内容" disabled />
</template>
```

  </template>
</DemoContainer>

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框。

<DemoContainer>
  <template #demo>
    <zp-input v-model="inputValue" placeholder="请输入内容" clearable style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-input v-model="inputValue" placeholder="请输入内容" clearable />
</template>
```

  </template>
</DemoContainer>

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

<DemoContainer>
  <template #demo>
    <zp-input v-model="passwordValue" type="password" placeholder="请输入密码" show-password style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-input v-model="passwordValue" type="password" placeholder="请输入密码" show-password />
</template>
```

  </template>
</DemoContainer>

## 不同尺寸

使用 `size` 属性改变输入框大小。除了默认大小外，还有另外两个选项：`large`、`small`。

<DemoContainer>
  <template #demo>
    <zp-input v-model="inputValue" placeholder="large" size="large" style="width: 300px;" />
    <br />
    <br />
    <zp-input v-model="inputValue" placeholder="default" style="width: 300px;" />
    <br />
    <br />
    <zp-input v-model="inputValue" placeholder="small" size="small" style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-input v-model="inputValue" placeholder="large" size="large" />
  <zp-input v-model="inputValue" placeholder="default" />
  <zp-input v-model="inputValue" placeholder="small" size="small" />
</template>
```

  </template>
</DemoContainer>

## 只读

设置 `readonly` 属性，它会被渲染为只读模式。

<DemoContainer>
  <template #demo>
    <zp-input v-model="inputValue" placeholder="请输入内容" readonly style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-input v-model="inputValue" placeholder="请输入内容" readonly />
</template>
```

  </template>
</DemoContainer>

## Input API

### Input Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string` | — |
| type | 类型 | `string` | `text` |
| size | 输入框尺寸 | `'large' \| 'default' \| 'small'` | `default` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| show-password | 是否显示切换密码图标 | `boolean` | `false` |
| placeholder | 输入框占位文本 | `string` | — |
| readonly | 是否只读 | `boolean` | `false` |
| autocomplete | 原生 autocomplete 属性 | `string` | `off` |
| autofocus | 原生 autofocus 属性 | `boolean` | `false` |
| form | 原生 form 属性 | `string` | — |

### Input Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 在 Input 值改变时触发 | `(value: string) => void` |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 | `(value: string) => void` |
| focus | 当选择器的输入框获得焦点时触发 | `() => void` |
| blur | 当选择器的输入框失去焦点时触发 | `() => void` |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | `() => void` |

### Input Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |

### Input Slots

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

