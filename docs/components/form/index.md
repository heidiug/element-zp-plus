# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

<script setup>
import { reactive, ref } from 'vue'

const formModel1 = reactive({
  name: '',
  email: '',
  university: '',
})

const formModel2 = reactive({
  name: '',
  email: '',
  password: '',
})

const formModel3 = reactive({
  password: '123456',
  confirmPassword: '',
})

const formModel4 = reactive({
  name: '',
  email: '',
})

const formModel5 = reactive({
  name: '',
  email: '',
})

const rules1 = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  email: [
    { type: 'email', required: true, message: '请输入正确的邮箱', trigger: 'blur' },
  ],
  university: [
    { required: true, message: '请输入大学', trigger: 'blur' },
  ],
}

const rules2 = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  email: [
    { type: 'email', required: true, message: '请输入正确的邮箱', trigger: 'blur' },
    { min: 8, max: 30, message: '长度在 8 到 30 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
  ],
}

const rules3 = {
  confirmPassword: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
    { 
      validator: (rule, value, callback) => {
        if (value !== formModel3.password) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      }, 
      trigger: 'blur' 
    },
  ],
}

const rules4 = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'input' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
}

const rules5 = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
}

const formRef1 = ref()
const formRef2 = ref()
const formRef3 = ref()
const formRef4 = ref()
const formRef5 = ref()

const handleSubmit = async () => {
  try {
    await formRef2.value?.validate()
    console.log('表单验证通过', formModel2)
  } catch (error) {
    console.log('表单验证失败', error)
  }
}

const handleReset = () => {
  formRef2.value?.resetFields()
}

const handleClearValidate = () => {
  formRef5.value?.clearValidate(['name', 'email'])
}
</script>

## 基础用法

在 Form 组件中，每一个表单域由一个 FormItem 组件构成，表单域中可以放置各种类型的表单控件。

::: demo 表单的基本用法。

<zp-form ref="formRef1" :model="formModel1" :rules="rules1">
  <zp-form-item label="姓名" prop="name">
    <zp-input v-model="formModel1.name" placeholder="请输入姓名" />
  </zp-form-item>
  <zp-form-item label="邮箱" prop="email">
    <zp-input v-model="formModel1.email" placeholder="请输入邮箱" />
  </zp-form-item>
  <zp-form-item label="大学" prop="university">
    <zp-input v-model="formModel1.university" placeholder="请输入大学" />
  </zp-form-item>
</zp-form>

:::

```vue
<template>
  <zp-form ref="formRef" :model="formModel" :rules="rules">
    <zp-form-item label="姓名" prop="name">
      <zp-input v-model="formModel.name" placeholder="请输入姓名" />
    </zp-form-item>
    <zp-form-item label="邮箱" prop="email">
      <zp-input v-model="formModel.email" placeholder="请输入邮箱" />
    </zp-form-item>
    <zp-form-item label="大学" prop="university">
      <zp-input v-model="formModel.university" placeholder="请输入大学" />
    </zp-form-item>
  </zp-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formModel = reactive({
  name: '',
  email: '',
  university: '',
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  email: [
    { type: 'email', required: true, message: '请输入正确的邮箱', trigger: 'blur' },
  ],
  university: [
    { required: true, message: '请输入大学', trigger: 'blur' },
  ],
}

const formRef = ref()
</script>
```

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则。

::: demo 表单验证示例。

<zp-form ref="formRef2" :model="formModel2" :rules="rules2">
  <zp-form-item label="姓名" prop="name">
    <zp-input v-model="formModel2.name" placeholder="请输入姓名" />
  </zp-form-item>
  <zp-form-item label="邮箱" prop="email">
    <zp-input v-model="formModel2.email" placeholder="请输入邮箱" />
  </zp-form-item>
  <zp-form-item label="密码" prop="password">
    <zp-input v-model="formModel2.password" type="password" placeholder="请输入密码" />
  </zp-form-item>
</zp-form>
<zp-button @click="handleSubmit" type="primary">提交</zp-button>
<zp-button @click="handleReset">重置</zp-button>

:::

```vue
<template>
  <zp-form ref="formRef" :model="formModel" :rules="rules">
    <zp-form-item label="姓名" prop="name">
      <zp-input v-model="formModel.name" placeholder="请输入姓名" />
    </zp-form-item>
    <zp-form-item label="邮箱" prop="email">
      <zp-input v-model="formModel.email" placeholder="请输入邮箱" />
    </zp-form-item>
    <zp-form-item label="密码" prop="password">
      <zp-input v-model="formModel.password" type="password" placeholder="请输入密码" />
    </zp-form-item>
  </zp-form>
  <zp-button @click="handleSubmit" type="primary">提交</zp-button>
  <zp-button @click="handleReset">重置</zp-button>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formModel = reactive({
  name: '',
  email: '',
  password: '',
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  email: [
    { type: 'email', required: true, message: '请输入正确的邮箱', trigger: 'blur' },
    { min: 8, max: 30, message: '长度在 8 到 30 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
  ],
}

const formRef = ref()

const handleSubmit = async () => {
  try {
    await formRef.value?.validate()
    console.log('表单验证通过', formModel)
  } catch (error) {
    console.log('表单验证失败', error)
  }
}

const handleReset = () => {
  formRef.value?.resetFields()
}
</script>
```

## 自定义验证规则

可以通过自定义验证函数来实现更复杂的验证逻辑。

::: demo 自定义验证规则示例。

<zp-form ref="formRef3" :model="formModel3" :rules="rules3">
  <zp-form-item label="确认密码" prop="confirmPassword">
    <zp-input v-model="formModel3.confirmPassword" type="password" placeholder="请再次输入密码" />
  </zp-form-item>
</zp-form>

:::

```vue
<template>
  <zp-form ref="formRef" :model="formModel" :rules="rules">
    <zp-form-item label="确认密码" prop="confirmPassword">
      <zp-input v-model="formModel.confirmPassword" type="password" placeholder="请再次输入密码" />
    </zp-form-item>
  </zp-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formModel = reactive({
  password: '123456',
  confirmPassword: '',
})

const rules = {
  confirmPassword: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
    { 
      validator: (rule, value, callback) => {
        if (value !== formModel.password) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      }, 
      trigger: 'blur' 
    },
  ],
}

const formRef = ref()
</script>
```

## 验证触发时机

通过 `trigger` 属性可以设置验证的触发时机，可选值有 `input`、`blur`、`change`。

::: demo 不同触发时机的验证。

<zp-form ref="formRef4" :model="formModel4" :rules="rules4">
  <zp-form-item label="输入时验证" prop="name">
    <zp-input v-model="formModel4.name" placeholder="输入时触发验证" />
  </zp-form-item>
  <zp-form-item label="失焦时验证" prop="email">
    <zp-input v-model="formModel4.email" placeholder="失焦时触发验证" />
  </zp-form-item>
</zp-form>

:::

```vue
<template>
  <zp-form ref="formRef" :model="formModel" :rules="rules">
    <zp-form-item label="输入时验证" prop="name">
      <zp-input v-model="formModel.name" placeholder="输入时触发验证" />
    </zp-form-item>
    <zp-form-item label="失焦时验证" prop="email">
      <zp-input v-model="formModel.email" placeholder="失焦时触发验证" />
    </zp-form-item>
  </zp-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formModel = reactive({
  name: '',
  email: '',
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'input' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
}

const formRef = ref()
</script>
```

## 清除验证

可以通过 `clearValidate` 方法清除指定字段的验证状态。

::: demo 清除验证示例。

<zp-form ref="formRef5" :model="formModel5" :rules="rules5">
  <zp-form-item label="姓名" prop="name">
    <zp-input v-model="formModel5.name" placeholder="请输入姓名" />
  </zp-form-item>
  <zp-form-item label="邮箱" prop="email">
    <zp-input v-model="formModel5.email" placeholder="请输入邮箱" />
  </zp-form-item>
</zp-form>
<zp-button @click="handleClearValidate">清除验证</zp-button>

:::

```vue
<template>
  <zp-form ref="formRef" :model="formModel" :rules="rules">
    <zp-form-item label="姓名" prop="name">
      <zp-input v-model="formModel.name" placeholder="请输入姓名" />
    </zp-form-item>
    <zp-form-item label="邮箱" prop="email">
      <zp-input v-model="formModel.email" placeholder="请输入邮箱" />
    </zp-form-item>
  </zp-form>
  <zp-button @click="handleClearValidate">清除验证</zp-button>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formModel = reactive({
  name: '',
  email: '',
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
}

const formRef = ref()

const handleClearValidate = () => {
  formRef.value?.clearValidate(['name', 'email'])
}
</script>
```
