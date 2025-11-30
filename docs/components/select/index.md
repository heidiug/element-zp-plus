# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

<script setup>
import { ref, h } from 'vue'
import zpIcon from '@/components/Icon/zpIcon.vue'

const value1 = ref('')
const value2 = ref('option1')
const value3 = ref('option1')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const options7 = ref([])

const options1 = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
]

const options2 = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
]

const options3 = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
]

const options4 = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
  { label: '选项5', value: 'option5' },
]

const options5 = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
]

const options6 = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
]

const customRenderLabel = (option) => {
  return h('div', { style: 'display: flex; align-items: center; gap: 8px;' }, [
    h(zpIcon, { icon: 'star' }),
    h('span', option.label)
  ])
}

const remoteMethod = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allOptions = [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' },
        { label: '选项3', value: 'option3' },
        { label: '选项4', value: 'option4' },
        { label: '选项5', value: 'option5' },
      ]
      if (query) {
        const filtered = allOptions.filter(item => 
          item.label.toLowerCase().includes(query.toLowerCase())
        )
        resolve(filtered)
      } else {
        resolve([])
      }
    }, 200)
  })
}

const customFilter = (query) => {
  return options6.filter(option => 
    option.label.toLowerCase().includes(query.toLowerCase())
  )
}
</script>

## 基础用法

适用广泛的基础单选。

::: demo 基础的选择器用法。

<zp-select v-model="value1" :options="options1" placeholder="请选择" />

:::

```vue
<template>
  <zp-select v-model="value" :options="options" placeholder="请选择" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
]
</script>
```

## 可清空

通过 `clearable` 属性可以将选择器设置为可清空。

::: demo 可清空的选择器。

<zp-select v-model="value2" :options="options2" placeholder="请选择" clearable />

:::

```vue
<template>
  <zp-select v-model="value" :options="options" placeholder="请选择" clearable />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('option1')

const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
]
</script>
```

## 禁用状态

选择器不可用状态。

::: demo 禁用状态的选择器。

<zp-select v-model="value3" :options="options3" placeholder="请选择" disabled />

:::

```vue
<template>
  <zp-select v-model="value" :options="options" placeholder="请选择" disabled />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('option1')

const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
]
</script>
```

## 可搜索

可以利用搜索功能快速查找选项。

::: demo 可搜索的选择器。

<zp-select v-model="value4" :options="options4" placeholder="请选择" filterable />

:::

```vue
<template>
  <zp-select v-model="value" :options="options" placeholder="请选择" filterable />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
  { label: '选项5', value: 'option5' },
]
</script>
```

## 自定义选项渲染

可以通过 `renderLabel` 属性自定义选项的渲染方式。

::: demo 自定义选项渲染。

<zp-select v-model="value5" :options="options5" :render-label="customRenderLabel" placeholder="请选择" />

:::

```vue
<template>
  <zp-select v-model="value" :options="options" :render-label="customRenderLabel" placeholder="请选择" />
</template>

<script setup>
import { ref, h } from 'vue'
import zpIcon from '@/components/Icon/zpIcon.vue'

const value = ref('')

const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
]

const customRenderLabel = (option) => {
  return h('div', { style: 'display: flex; align-items: center; gap: 8px;' }, [
    h(zpIcon, { icon: 'star' }),
    h('span', option.label)
  ])
}
</script>
```

## 远程搜索

可以输入关键字进行远程搜索。

::: demo 远程搜索的选择器。

<zp-select 
  v-model="value7" 
  :options="options7" 
  placeholder="请输入关键词搜索" 
  remote 
  :remote-func="remoteMethod"
  filterable 
/>

:::

```vue
<template>
  <zp-select 
    v-model="value" 
    :options="options" 
    placeholder="请输入关键词搜索" 
    remote 
    :remote-func="remoteMethod"
    filterable 
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = ref([])

const remoteMethod = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allOptions = [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' },
        { label: '选项3', value: 'option3' },
        { label: '选项4', value: 'option4' },
        { label: '选项5', value: 'option5' },
      ]
      if (query) {
        const filtered = allOptions.filter(item => 
          item.label.toLowerCase().includes(query.toLowerCase())
        )
        resolve(filtered)
      } else {
        resolve([])
      }
    }, 200)
  })
}
</script>
```

## 自定义过滤方法

可以通过 `filterMethod` 属性自定义过滤方法。

::: demo 自定义过滤方法。

<zp-select 
  v-model="value6" 
  :options="options6" 
  placeholder="请选择" 
  filterable 
  :filter-method="customFilter"
/>

:::

```vue
<template>
  <zp-select 
    v-model="value" 
    :options="options" 
    placeholder="请选择" 
    filterable 
    :filter-method="customFilter"
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' },
  { label: '选项4', value: 'option4' },
]

const customFilter = (query) => {
  return options.filter(option => 
    option.label.toLowerCase().includes(query.toLowerCase())
  )
}
</script>
```
