# Collapse 折叠面板

通过折叠面板收纳内容区域。

<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const accordionActiveNames = ref(['1'])
</script>

## 基础用法

可同时展开多个面板，面板之间不影响。

<DemoContainer>
  <template #demo>
    <zp-collapse v-model="activeNames">
      <zp-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </zp-collapse-item>
      <zp-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </zp-collapse-item>
      <zp-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </zp-collapse-item>
      <zp-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </zp-collapse-item>
    </zp-collapse>
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<template>
  <zp-collapse v-model="activeNames">
    <zp-collapse-item title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </zp-collapse-item>
    <zp-collapse-item title="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </zp-collapse-item>
  </zp-collapse>
</template>
```

  </template>
</DemoContainer>

## 手风琴效果

通过 `accordion` 属性来设置是否以手风琴模式显示。

<DemoContainer>
  <template #demo>
    <zp-collapse v-model="accordionActiveNames" :accordion="true">
      <zp-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </zp-collapse-item>
      <zp-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </zp-collapse-item>
      <zp-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </zp-collapse-item>
    </zp-collapse>
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const accordionActiveNames = ref(['1'])
</script>

<template>
  <zp-collapse v-model="accordionActiveNames" :accordion="true">
    <zp-collapse-item title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </zp-collapse-item>
    <zp-collapse-item title="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </zp-collapse-item>
  </zp-collapse>
</template>
```

  </template>
</DemoContainer>

## Collapse API

### Collapse Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 当前激活的面板 | `CollapseName[]` | — |
| accordion | 是否手风琴模式 | `boolean` | `false` |
| borderless | 是否无边框 | `boolean` | `false` |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当前激活面板改变时触发 | `(values: CollapseName[]) => void` |

### CollapseItem Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标志符 | `CollapseName` | — |
| title | 面板标题 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |

### CollapseItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 面板内容 |
| title | 自定义标题内容 |

