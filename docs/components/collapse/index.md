# Collapse 折叠面板

通过折叠面板收纳内容区域。

<script setup>
import { ref } from 'vue'
const activeNames = ref(['1', '2', '3'])
const accordionNames = ref(['1'])
const disabledNames = ref(['1'])
</script>

## 基础用法

可同时展开多个面板，面板之间不影响。

::: demo 使用 `v-model` 绑定当前激活的面板列表，`activeNames` 为数组格式。

<zp-collapse v-model="activeNames">
  <zp-collapse-item name="1" title="Consistency" :disabled="false">
    <template #title>
      <h3 style="margin: 0; font-size: 16px; font-weight: 500;">Consistency</h3>
    </template>
    <template #content>
      <span>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</span>
    </template>
  </zp-collapse-item>
  <zp-collapse-item name="2" title="Feedback" :disabled="false">
    <template #title>
      <h3 style="margin: 0; font-size: 16px; font-weight: 500;">Feedback</h3>
    </template>
    <template #content>
      <span>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; Visual feedback: reflect current state by updating or rearranging elements of the page.</span>
    </template>
  </zp-collapse-item>
  <zp-collapse-item name="3" title="Efficiency" :disabled="false">
    <template #title>
      <h3 style="margin: 0; font-size: 16px; font-weight: 500;">Efficiency</h3>
    </template>
    <template #content>
      <span>Simplify the process and reduce unnecessary steps to streamline tasks, improve productivity, and provide a good user experience.</span>
    </template>
  </zp-collapse-item>
</zp-collapse>

:::

```vue
<template>
  <zp-collapse v-model="activeNames">
    <zp-collapse-item name="1" title="Consistency" :disabled="false">
      <template #title>
        <h3>Consistency</h3>
      </template>
      <template #content>
        <span>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</span>
      </template>
    </zp-collapse-item>
    <zp-collapse-item name="2" title="Feedback" :disabled="false">
      <template #title>
        <h3>Feedback</h3>
      </template>
      <template #content>
        <span>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; Visual feedback: reflect current state by updating or rearranging elements of the page.</span>
      </template>
    </zp-collapse-item>
    <zp-collapse-item name="3" title="Efficiency" :disabled="false">
      <template #title>
        <h3>Efficiency</h3>
      </template>
      <template #content>
        <span>Simplify the process and reduce unnecessary steps to streamline tasks, improve productivity, and provide a good user experience.</span>
      </template>
    </zp-collapse-item>
  </zp-collapse>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref(['1', '2', '3'])
</script>
```

## 手风琴模式

使用 `accordion` 属性来启用手风琴模式，每次只能展开一个面板。

::: demo 使用 `accordion` 属性来启用手风琴模式。

<zp-collapse v-model="accordionNames" :accordion="true">
  <zp-collapse-item name="1" title="标题1" :disabled="false">
    <div>这是第一个面板的内容</div>
  </zp-collapse-item>
  <zp-collapse-item name="2" title="标题2" :disabled="false">
    <div>这是第二个面板的内容</div>
  </zp-collapse-item>
  <zp-collapse-item name="3" title="标题3" :disabled="false">
    <div>这是第三个面板的内容</div>
  </zp-collapse-item>
</zp-collapse>

:::

```vue
<template>
  <zp-collapse v-model="activeNames" :accordion="true">
    <zp-collapse-item name="1" title="标题1" :disabled="false">
      <div>这是第一个面板的内容</div>
    </zp-collapse-item>
    <zp-collapse-item name="2" title="标题2" :disabled="false">
      <div>这是第二个面板的内容</div>
    </zp-collapse-item>
    <zp-collapse-item name="3" title="标题3" :disabled="false">
      <div>这是第三个面板的内容</div>
    </zp-collapse-item>
  </zp-collapse>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>
```

## 禁用状态

使用 `disabled` 属性来禁用某个面板。

::: demo 使用 `disabled` 属性来禁用某个面板。

<zp-collapse v-model="disabledNames">
  <zp-collapse-item name="1" title="标题1" :disabled="false">
    <div>这是第一个面板的内容</div>
  </zp-collapse-item>
  <zp-collapse-item name="2" title="标题2" :disabled="true">
    <div>这是第二个面板的内容（已禁用）</div>
  </zp-collapse-item>
  <zp-collapse-item name="3" title="标题3" :disabled="false">
    <div>这是第三个面板的内容</div>
  </zp-collapse-item>
</zp-collapse>

:::

```vue
<template>
  <zp-collapse v-model="activeNames">
    <zp-collapse-item name="1" title="标题1" :disabled="false">
      <div>这是第一个面板的内容</div>
    </zp-collapse-item>
    <zp-collapse-item name="2" title="标题2" :disabled="true">
      <div>这是第二个面板的内容（已禁用）</div>
    </zp-collapse-item>
    <zp-collapse-item name="3" title="标题3" :disabled="false">
      <div>这是第三个面板的内容</div>
    </zp-collapse-item>
  </zp-collapse>
</template>

<script setup>
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>
```

