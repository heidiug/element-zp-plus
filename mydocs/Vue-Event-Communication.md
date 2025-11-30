# Vue 3 父子组件事件通信

## 一、子组件发送事件

### 1. 定义事件类型

```typescript
// src/components/Dropdown/type.ts
export interface DropdownEmits {
  (e: 'visivle-change', visible: boolean): void
  (e: 'select', key: string | number): void
}
```

### 2. 在子组件中发送事件

```vue
<!-- 子组件：zpDropdown.vue -->
<script setup lang="ts">
const emits = defineEmits<DropdownEmits>()

// 发送 select 事件
const optionClick = (e: ManualOption) => {
  if (e.disabled) return
  emits('select', e.key)  // 👈 发送事件，传递 key 值
  // ...
}
</script>
```

---

## 二、父组件接收事件

### 方式 1：使用 `@事件名` 直接绑定（推荐）

```vue
<!-- 父组件：App.vue -->
<template>
  <zp-dropdown 
    :manual-options="menuOptions"
    @select="handleSelect"           <!-- 👈 接收 select 事件 -->
    @visivle-change="handleVisibleChange"  <!-- 👈 接收 visivle-change 事件 -->
  >
    <zp-button>操作</zp-button>
  </zp-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import zpDropdown from '@/components/Dropdown/zpDropdown.vue'

const menuOptions = [
  { key: '1', lable: '删除' },
  { key: '2', lable: '编辑' },
  { key: '3', lable: '分享' }
]

// 处理 select 事件
const handleSelect = (key: string | number) => {
  console.log('用户选择了:', key)
  
  // 执行相应的业务逻辑
  switch (key) {
    case '1':
      deleteItem()
      break
    case '2':
      editItem()
      break
    case '3':
      shareItem()
      break
  }
}

// 处理 visible-change 事件
const handleVisibleChange = (visible: boolean) => {
  console.log('下拉菜单显示状态:', visible)
}
</script>
```

### 方式 2：使用内联函数

```vue
<template>
  <zp-dropdown 
    :manual-options="menuOptions"
    @select="(key) => { 
      console.log('选择了:', key)
      handleSelect(key)
    }"
  >
    <zp-button>操作</zp-button>
  </zp-dropdown>
</template>
```

### 方式 3：使用 `v-on` 简写（与方式 1 等价）

```vue
<template>
  <zp-dropdown 
    :manual-options="menuOptions"
    v-on:select="handleSelect"         <!-- 等同于 @select="handleSelect" -->
    v-on:visivle-change="handleVisibleChange"
  >
    <zp-button>操作</zp-button>
  </zp-dropdown>
</template>
```

### 方式 4：接收多个参数

如果子组件发送多个参数：

```typescript
// 子组件
emits('select', option.key, option.lable)
```

父组件接收：

```vue
<template>
  <zp-dropdown 
    @select="(key, label) => handleSelect(key, label)"
  >
    <zp-button>操作</zp-button>
  </zp-dropdown>
</template>

<script setup>
const handleSelect = (key: string | number, label: string) => {
  console.log('key:', key, 'label:', label)
}
</script>
```

---

## 三、完整示例

### 父组件完整代码

```vue
<!-- App.vue -->
<template>
  <div class="app">
    <h2>Dropdown 示例</h2>
    
    <zp-dropdown 
      :manual-options="menuOptions"
      :placement="'bottom-start'"
      :trigger="'click'"
      @select="handleSelect"
      @visivle-change="handleVisibleChange"
    >
      <zp-button type="primary">操作</zp-button>
    </zp-dropdown>
    
    <div v-if="lastSelected">
      最后选择：{{ lastSelected }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import zpDropdown from '@/components/Dropdown/zpDropdown.vue'
import zpButton from '@/components/Button/zpButton.vue'

// 菜单选项
const menuOptions = [
  { key: '1', lable: '删除', disabled: false },
  { key: '2', lable: '编辑', disabled: false },
  { key: '3', lable: '', divided: true },  // 分割线
  { key: '4', lable: '分享', disabled: false },
  { key: '5', lable: '禁用项', disabled: true }
]

// 记录最后选择的项
const lastSelected = ref<string | number | null>(null)

// 处理选择事件
const handleSelect = (key: string | number) => {
  console.log('用户选择了:', key)
  lastSelected.value = key
  
  // 根据 key 执行不同操作
  const option = menuOptions.find(item => item.key === key)
  if (option) {
    switch (key) {
      case '1':
        if (confirm('确定要删除吗？')) {
          deleteItem()
        }
        break
      case '2':
        editItem()
        break
      case '4':
        shareItem()
        break
    }
  }
}

// 处理可见性变化事件
const handleVisibleChange = (visible: boolean) => {
  console.log('下拉菜单状态:', visible ? '显示' : '隐藏')
}

// 业务逻辑函数
const deleteItem = () => {
  console.log('执行删除操作')
  // 实际的删除逻辑
}

const editItem = () => {
  console.log('执行编辑操作')
  // 实际的编辑逻辑
}

const shareItem = () => {
  console.log('执行分享操作')
  // 实际的分享逻辑
}
</script>
```

---

## 四、事件传递流程图

```
┌─────────────────────────────────────┐
│  子组件（Dropdown）                  │
│                                     │
│  emits('select', key)               │
│         ↓                           │
│   发送事件并传递数据                 │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  事件监听器                          │
│  @select="handleSelect"             │
│         ↓                           │
│   捕获事件并调用处理函数             │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  父组件（App）                       │
│                                     │
│  handleSelect(key) {                │
│    // 处理选择的逻辑                 │
│    console.log('选择了:', key)       │
│    // 执行业务逻辑                   │
│  }                                   │
└─────────────────────────────────────┘
```

---

## 五、注意事项

### 1. 事件名必须完全匹配

```vue
<!-- ✅ 正确：事件名匹配 -->
子组件：emits('select', key)
父组件：@select="handleSelect"

<!-- ❌ 错误：事件名不匹配 -->
子组件：emits('select', key)
父组件：@select-item="handleSelect"  <!-- 不会触发！ -->
```

### 2. 参数顺序要一致

```typescript
// 子组件发送
emits('select', key, label, disabled)

// 父组件接收
@select="(key, label, disabled) => handleSelect(key, label, disabled)"
```

### 3. 使用 TypeScript 获得类型提示

```typescript
// 父组件接收时，会有完整的类型提示
const handleSelect = (key: string | number) => {
  // key 的类型是 string | number
}
```

### 4. 事件命名规范

- 使用 kebab-case：`visible-change`（在模板中）
- 使用 camelCase：`visivleChange`（在 TypeScript 中）
- 但实际使用时，建议统一使用 kebab-case

---

## 六、总结

### 父子组件通信的两部分：

1. **子组件发送**：使用 `emits('事件名', 数据)`
2. **父组件接收**：使用 `@事件名="处理函数"`

### 完整的通信链条：

```
子组件 emits → 事件传递 → 父组件 @事件名 → 处理函数执行业务逻辑
```

### 关键点：

- 事件名必须完全匹配
- 参数会按顺序传递
- 处理函数会自动接收传递的数据
- TypeScript 可以提供类型检查

