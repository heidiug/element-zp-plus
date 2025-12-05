# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

<script setup>
import { ref } from 'vue'

const selectValue = ref('')
const selectOptions = ref([
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' }
])
const disabledSelectValue = ref('')
const clearableSelectValue = ref('option1')
const filterableSelectValue = ref('')
const filterableOptions = ref([
  { label: '黄金糕', value: 'huangjin' },
  { label: '双皮奶', value: 'shuangpi' },
  { label: '蚵仔煎', value: 'ozaijian' },
  { label: '龙须面', value: 'longxu' },
  { label: '北京烤鸭', value: 'beijing' }
])
</script>

## 基础用法

适用广泛的基础单选。

<DemoContainer>
  <template #demo>
    <zp-select v-model="selectValue" :options="selectOptions" placeholder="请选择" style="width: 300px;" />
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const selectValue = ref('')
const selectOptions = ref([
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' },
  { label: '选项3', value: 'option3' }
])
</script>

<template>
  <zp-select v-model="selectValue" :options="selectOptions" placeholder="请选择" />
</template>
```

  </template>
</DemoContainer>

## 禁用状态

选择器不可用状态。

<DemoContainer>
  <template #demo>
    <zp-select v-model="disabledSelectValue" :options="selectOptions" placeholder="请选择" disabled style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-select v-model="disabledSelectValue" :options="selectOptions" placeholder="请选择" disabled />
</template>
```

  </template>
</DemoContainer>

## 可清空

包含清空按钮，可将选择器清空为初始状态。

<DemoContainer>
  <template #demo>
    <zp-select v-model="clearableSelectValue" :options="selectOptions" placeholder="请选择" clearable style="width: 300px;" />
  </template>
  <template #code>

```vue
<template>
  <zp-select v-model="clearableSelectValue" :options="selectOptions" placeholder="请选择" clearable />
</template>
```

  </template>
</DemoContainer>

## 可搜索

可以利用搜索功能快速查找选项。

<DemoContainer>
  <template #demo>
    <zp-select v-model="filterableSelectValue" :options="filterableOptions" placeholder="请选择" filterable style="width: 300px;" />
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const filterableSelectValue = ref('')
const filterableOptions = ref([
  { label: '黄金糕', value: 'huangjin' },
  { label: '双皮奶', value: 'shuangpi' },
  { label: '蚵仔煎', value: 'ozaijian' },
  { label: '龙须面', value: 'longxu' },
  { label: '北京烤鸭', value: 'beijing' }
])
</script>

<template>
  <zp-select v-model="filterableSelectValue" :options="filterableOptions" placeholder="请选择" filterable />
</template>
```

  </template>
</DemoContainer>

## Select API

### Select Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string \| number` | — |
| options | 选项数据 | `SelectOption[]` | `[]` |
| placeholder | 输入框占位文本 | `string` | `请选择` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可以清空选项 | `boolean` | `false` |
| filterable | 是否可搜索 | `boolean` | `false` |
| filter-method | 自定义搜索方法 | `FilterFunc` | — |
| remote | 是否为远程搜索 | `boolean` | `false` |
| remote-func | 远程搜索方法 | `RemoteFunc` | — |
| render-label | 自定义选项标签的渲染方式 | `RenderLabelFunc` | — |

### Select Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值发生变化时触发 | `(value: string \| number) => void` |
| visible-change | 下拉框出现/隐藏时触发 | `(visible: boolean) => void` |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | `() => void` |

### SelectOption

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项的标签 | `string` | — |
| value | 选项的值 | `string \| number` | — |
| disabled | 是否禁用该选项 | `boolean` | `false` |

