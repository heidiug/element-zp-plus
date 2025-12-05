# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const rules = ref({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ]
})

const formRef = ref()

const onSubmit = async () => {
  try {
    await formRef.value.validate()
    console.log('表单验证通过', formData.value)
  } catch (error) {
    console.log('表单验证失败', error)
  }
}

const inlineFormData = ref({
  user: '',
  region: ''
})

const validateFormData = ref({
  email: '',
  name: ''
})

const validateRules = ref({
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ]
})

const validateFormRef = ref()
</script>

## 典型表单

最基础的表单包括各种输入表单项，比如 input、select、radio、checkbox 等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。

<DemoContainer>
  <template #demo>
    <zp-form ref="formRef" :model="formData" :rules="rules" style="max-width: 500px;">
      <zp-form-item label="活动名称" prop="name">
        <zp-input v-model="formData.name" placeholder="请输入活动名称" />
      </zp-form-item>
      <zp-form-item label="活动区域" prop="region">
        <zp-select v-model="formData.region" :options="[
          { label: '区域一', value: 'region1' },
          { label: '区域二', value: 'region2' }
        ]" placeholder="请选择活动区域" />
      </zp-form-item>
      <zp-form-item>
        <zp-button type="primary" @click="onSubmit">提交</zp-button>
        <zp-button @click="formRef.resetFields()">重置</zp-button>
      </zp-form-item>
    </zp-form>
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  region: ''
})

const rules = ref({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ]
})

const formRef = ref()

const onSubmit = async () => {
  try {
    await formRef.value.validate()
    console.log('表单验证通过', formData.value)
  } catch (error) {
    console.log('表单验证失败', error)
  }
}
</script>

<template>
  <zp-form ref="formRef" :model="formData" :rules="rules">
    <zp-form-item label="活动名称" prop="name">
      <zp-input v-model="formData.name" placeholder="请输入活动名称" />
    </zp-form-item>
    <zp-form-item label="活动区域" prop="region">
      <zp-select v-model="formData.region" :options="[
        { label: '区域一', value: 'region1' },
        { label: '区域二', value: 'region2' }
      ]" placeholder="请选择活动区域" />
    </zp-form-item>
    <zp-form-item>
      <zp-button type="primary" @click="onSubmit">提交</zp-button>
      <zp-button @click="formRef.resetFields()">重置</zp-button>
    </zp-form-item>
  </zp-form>
</template>
```

  </template>
</DemoContainer>

## 行内表单

当垂直空间有限且表单较简单时，可以在一行内放置表单。

<DemoContainer>
  <template #demo>
    <zp-form :model="inlineFormData" inline style="max-width: 500px;">
      <zp-form-item label="审批人">
        <zp-input v-model="inlineFormData.user" placeholder="审批人" />
      </zp-form-item>
      <zp-form-item label="活动区域">
        <zp-select v-model="inlineFormData.region" :options="[
          { label: '区域一', value: 'region1' },
          { label: '区域二', value: 'region2' }
        ]" placeholder="活动区域" />
      </zp-form-item>
      <zp-form-item>
        <zp-button type="primary">查询</zp-button>
      </zp-form-item>
    </zp-form>
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const inlineFormData = ref({
  user: '',
  region: ''
})
</script>

<template>
  <zp-form :model="inlineFormData" inline>
    <zp-form-item label="审批人">
      <zp-input v-model="inlineFormData.user" placeholder="审批人" />
    </zp-form-item>
    <zp-form-item label="活动区域">
      <zp-select v-model="inlineFormData.region" :options="[
        { label: '区域一', value: 'region1' },
        { label: '区域二', value: 'region2' }
      ]" placeholder="活动区域" />
    </zp-form-item>
    <zp-form-item>
      <zp-button type="primary">查询</zp-button>
    </zp-form-item>
  </zp-form>
</template>
```

  </template>
</DemoContainer>

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

<DemoContainer>
  <template #demo>
    <zp-form ref="validateFormRef" :model="validateFormData" :rules="validateRules" style="max-width: 500px;">
      <zp-form-item label="邮箱" prop="email">
        <zp-input v-model="validateFormData.email" placeholder="请输入邮箱" />
      </zp-form-item>
      <zp-form-item label="姓名" prop="name">
        <zp-input v-model="validateFormData.name" placeholder="请输入姓名" />
      </zp-form-item>
      <zp-form-item>
        <zp-button type="primary" @click="validateFormRef.validate()">提交</zp-button>
        <zp-button @click="validateFormRef.resetFields()">重置</zp-button>
      </zp-form-item>
    </zp-form>
  </template>
  <template #code>

```vue
<script setup>
import { ref } from 'vue'

const validateFormData = ref({
  email: '',
  name: ''
})

const validateRules = ref({
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ]
})

const validateFormRef = ref()
</script>

<template>
  <zp-form ref="validateFormRef" :model="validateFormData" :rules="validateRules">
    <zp-form-item label="邮箱" prop="email">
      <zp-input v-model="validateFormData.email" placeholder="请输入邮箱" />
    </zp-form-item>
    <zp-form-item label="姓名" prop="name">
      <zp-input v-model="validateFormData.name" placeholder="请输入姓名" />
    </zp-form-item>
    <zp-form-item>
      <zp-button type="primary" @click="validateFormRef.validate()">提交</zp-button>
      <zp-button @click="validateFormRef.resetFields()">重置</zp-button>
    </zp-form-item>
  </zp-form>
</template>
```

  </template>
</DemoContainer>

## Form API

### Form Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | `Record<string, any>` | — |
| rules | 表单验证规则 | `FormRules` | — |

### Form Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| validate | 对整个表单进行校验 | — |
| resetFields | 重置表单，移除校验结果 | `keys?: string[]` |
| clearValidate | 移除表单项的校验结果 | `keys?: string[]` |

### FormItem Attributes

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签文本 | `string` | — |
| prop | 表单域 model 字段 | `string` | — |

### FormItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 表单项内容 |

