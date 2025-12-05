<script setup lang="ts">
import zpButton from '@/components/Button/zpButton.vue'
import zpCollapse from '@/components/Collapse/zpCollapse.vue'
import zpCollapseItem from '@/components/Collapse/zpCollapseItem.vue'
import zpIcon from '@/components/Icon/zpIcon.vue'
import zpAlert from '@/components/Alert/zpAltert.vue'
import zpTooltip from '@/components/Tooltip/zpTooltip.vue'
import type { ButtonInstance } from '@/components/Button/type'
import type { CollapseName } from '@/components/Collapse/type'
import { ref, h, reactive } from 'vue'
import zpDropdown from '@/components/Dropdown/zpDropdown.vue'
import zpDropdownMenu from '@/components/Dropdown/zpDropdownMenu.vue'
import zpDropdownItem from '@/components/Dropdown/zpDropdowmItem.vue'
import { createMessage } from '@/components/Message/method'
import zpInput from '@/components/Input/zpInput.vue'
import zpSwitch from '@/components/Switch/zpSwitch.vue'
import zpSelect from '@/components/Select/zpSelect.vue'
import type { SelectOption } from '@/components/Select/type'
import zpForm from './components/Form/zpForm.vue'
import zpFormItem from './components/Form/zpFormItem.vue'
import type { FormInstance } from './components/Form/type'




const FormModel = reactive({
  name: '',
  email: '',
  university: '',
  password: '',
  confirmPassword: '',
})

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'input' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'input' },
  ],
  email: [
    { type: 'email' as const, required: true, message: '请输入正确的邮箱', trigger: 'input' },
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { min: 8, max: 30, message: '长度在 8 到 30 个字符', trigger: 'blur' },
  ],
  university: [
    { required: true, message: '请输入大学', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
    { validator: (rule: any, value: any, callback: any) => {
      if (value !== FormModel.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }, trigger: 'blur' },
  ],
}

const resetFields = () => {
  formRef.value?.resetFields()
}
const clearValidate = () => {
  formRef.value?.clearValidate(['name', 'email'])
}
const openValue = ref<CollapseName[]>([])
const switchValue = ref(true)
const switchValue2 = ref('on')
const switchValue3 = ref(1)
const buttonRef = ref<ButtonInstance | null>(null)
const formRef = ref<FormInstance | null>(null)
// const textValue = ref('')
// const textareaValue = ref('')
const num = ref(0)
const handleMessageClick = () => {
  createMessage({
    message: `success ${num.value++}`,
    type: 'success',
    plain: true,
    showClose: false,
    duration: 3000
  })
}
const selectValue = ref('option1')
const selectOptions = ref<SelectOption[]>([
  {
    label: '选项1',
    value: 1
  },
  {
    label: '选项2',
    value: 2,
    disabled: true
  },
  {
    label: '选项3',
    value: 3
  },
  {
    label: '选项4',
    value: 4
  },
  {
    label: '选项5',
    value: 5
  },
  {
    label: '选项6',
    value: 6
  },
  {
    label: '选项7',
    value: 7
  }
])
const customRenderLabel = (option: SelectOption) => {
  // disabled 状态下不添加内联样式，让 CSS 控制颜色
  const style = option.disabled ? {} : { color: 'skyblue' }
  return h('div', { style, class: 'custom-render-label' }, [h('b', option.label), h('span', option.value)])
}
interface ListItem {
  value: string
  label: string
}

const loading = ref(false)
const remoteOptions = ref<SelectOption[]>([])

const remoteMethod = (query: string): Promise<SelectOption[]> => {
  loading.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading.value = false
      if (query) {
        const filteredOptions = states.filter((item) => {
          const result = item.toLowerCase().includes(query.toLowerCase())
          return result
        }).map((result) => {
          return { value: result, label: result } as SelectOption
        })
        resolve(filteredOptions)
      } else {
        resolve([])
      }
    }, 200)
  })
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const validateForm = async () => {
  try {
    await formRef.value?.validate()
  } catch (error) {
    // Validation error handled
  }
}
</script>

<template>
  <input type="text" readonly />
  <div class="app-container">
    <h1>项目启动成功</h1>
    <zp-switch
      v-model="switchValue"
      activeValue="open"
      inactiveValue="close"
      activeText="open"
      inactiveText="close"
    />
    {{ switchValue }}
    <zp-switch
      v-model="switchValue2"
      activeValue="on"
      inactiveValue="off"
      activeText="on"
      inactiveText="off"
    />
    {{ switchValue2 }}
    <zp-switch
      v-model="switchValue3"
      activeValue="1"
      inactiveValue="0"
      activeText="1"
      inactiveText="0"
    />
    {{ switchValue3 }}
    <div class="blank"></div>
    <h2>按钮组件</h2>
    <div class="blank"></div>
    <div class="button-container">
      <zp-button type="primary" size="large" ref="buttonRef" round>Primary</zp-button>
      <zp-button type="success" size="large" ref="buttonRef" plain>success</zp-button>
      <zp-button type="warning" size="large" ref="buttonRef" plain>warning</zp-button>
      <zp-button type="danger" size="large" ref="buttonRef">danger</zp-button>
      <zp-button type="info" size="large" ref="buttonRef" disabled>info</zp-button>
      <zp-button type="primary" size="large" ref="buttonRef" text>myButtonText</zp-button>
      <zp-button type="primary" size="large" ref="buttonRef" loading>ButtonLoading</zp-button>
      <zp-button type="primary" size="large" ref="buttonRef" icon="arrow-right"
        >ButtonIcon</zp-button
      >
    </div>
    <div class="blank"></div>
    <h2>折叠面板组件</h2>
    <div class="blank"></div>
    <div class="collapse-container">
      <zp-collapse v-model="openValue">
        <zp-collapse-item name="1" title="标题1" :disabled="false">
          <template #title>
            <h3>Consistency</h3>
          </template>
          <template #content>
            <span
              >Consistent with real life: in line with the process and logic of real life, and
              comply with languages and habits that the users are used to; Consistent within
              interface: all elements should be consistent, such as: design style, icons and texts,
              position of elements, etc.</span
            >
          </template>
        </zp-collapse-item>
        <zp-collapse-item name="2" title="标题2" :disabled="false">
          <template #title>
            <h3>Feedback</h3>
          </template>
          <template #content>
            <span
              >Operation feedback: enable the users to clearly perceive their operations by style
              updates and interactive effects; Visual feedback: reflect current state by updating or
              rearranging elements of the page.</span
            >
          </template>
        </zp-collapse-item>
        <zp-collapse-item name="3" title="标题3" :disabled="false">
          <template #title>
            <h3>Efficiency</h3>
          </template>
          <template #content>
            <span
              >Simplify the process and reduce unnecessary steps to streamline tasks, improve
              productivity, and provide a good user experience.</span
            >
          </template>
        </zp-collapse-item>
      </zp-collapse>
    </div>
    <div class="blank"></div>
    <h2>图标组件</h2>
    <div class="blank"></div>
    <div class="icon-container">
      <zp-icon icon="arrow-right" size="lg" type="primary" />
      <zp-icon icon="arrow-right" size="lg" type="success" />
      <zp-icon icon="arrow-right" size="lg" type="warning" />
      <zp-icon icon="arrow-right" size="lg" type="danger" />
      <zp-icon icon="arrow-right" size="lg" type="info" />
    </div>
  </div>
  <div class="blank"></div>
  <h2>Alert组件</h2>
  <div class="blank"></div>
  <div class="alert-container">
    <zp-alert title="success" type="success" />
    <zp-alert title="warning" type="warning" />
    <zp-alert title="danger" type="danger" />
    <zp-alert title="info" type="info" />
    <zp-alert title="primary" type="primary" />
    <zp-alert title="description" type="primary" description="This is a description" />
  </div>
  <div class="blank"></div>
  <h2>Tooltip组件</h2>
  <div class="blank"></div>
  <div class="tooltip-container">
    <!-- 顶部行 -->
    <div class="tooltip-row tooltip-row-top">
      <zp-tooltip content="Top Left prompts info" :placement="'top-start'" trigger="hover">
        <zp-button class="large-button">top-start</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Top Center prompts info" :placement="'top'" trigger="hover">
        <zp-button class="large-button">top</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Top Right prompts info" :placement="'top-end'" trigger="hover">
        <zp-button class="large-button">top-end</zp-button>
      </zp-tooltip>
    </div>

    <!-- 中间行：左侧和右侧 -->
    <div class="tooltip-row tooltip-row-middle">
      <!-- 左侧列 -->
      <div class="tooltip-col tooltip-col-left">
        <zp-tooltip content="Left Top prompts info" :placement="'left-start'" trigger="hover">
          <zp-button class="large-button">left-start</zp-button>
        </zp-tooltip>
        <zp-tooltip content="Left Center prompts info" :placement="'left'" trigger="hover">
          <zp-button class="large-button">left</zp-button>
        </zp-tooltip>
        <zp-tooltip content="Left Bottom prompts info" :placement="'left-end'" trigger="hover">
          <zp-button class="large-button">left-end</zp-button>
        </zp-tooltip>
      </div>

      <!-- 中间空白 -->
      <div class="tooltip-col tooltip-col-center"></div>

      <!-- 右侧列 -->
      <div class="tooltip-col tooltip-col-right">
        <zp-tooltip content="Right Top prompts info" :placement="'right-start'" trigger="hover">
          <zp-button class="large-button">right-start</zp-button>
        </zp-tooltip>
        <zp-tooltip content="Right Center prompts info" :placement="'right'" trigger="hover">
          <zp-button class="large-button">right</zp-button>
        </zp-tooltip>
        <zp-tooltip content="Right Bottom prompts info" :placement="'right-end'" trigger="hover">
          <zp-button class="large-button">right-end</zp-button>
        </zp-tooltip>
      </div>
    </div>

    <!-- 底部行 -->
    <div class="tooltip-row tooltip-row-bottom">
      <zp-tooltip content="Bottom Left prompts info" :placement="'bottom-start'" trigger="hover">
        <zp-button class="large-button">bottom-start</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Bottom Center prompts info" :placement="'bottom'" trigger="hover">
        <zp-button class="large-button">bottom</zp-button>
      </zp-tooltip>
      <zp-tooltip content="Bottom Right prompts info" :placement="'bottom-end'" trigger="hover">
        <zp-button class="large-button">bottom-end</zp-button>
      </zp-tooltip>
    </div>
  </div>
  <div class="blank"></div>
  <h2>Dropdown组件</h2>
  <div class="blank"></div>
  <div class="dropdown-container">
    <zp-dropdown
      placement="bottom-start"
      trigger="click"
      style="margin-left: 50px; margin-bottom: 10px"
    >
      <zp-button plain>Dropdown1</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item :item-key="1">选项1</zp-dropdown-item>
          <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
          <zp-dropdown-item :item-key="3">选项3</zp-dropdown-item>
          <zp-dropdown-item :item-key="4">选项4</zp-dropdown-item>
          <zp-dropdown-item :item-key="5">选项5</zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
    <zp-dropdown
      placement="bottom-start"
      trigger="click"
      style="margin-left: 50px; margin-bottom: 10px"
    >
      <zp-button plain>Dropdown2</zp-button>
      <template #dropdown>
        <zp-dropdown-menu>
          <zp-dropdown-item :item-key="1"><zp-button plain>选项1</zp-button></zp-dropdown-item>
          <zp-dropdown-item :item-key="2">选项2</zp-dropdown-item>
          <zp-dropdown-item :item-key="3" disabled>选项3</zp-dropdown-item>
          <zp-dropdown-item :item-key="4" divided>选项4</zp-dropdown-item>
          <zp-dropdown-item :item-key="5"><a>选项5</a></zp-dropdown-item>
        </zp-dropdown-menu>
      </template>
    </zp-dropdown>
  </div>
  <div class="blank"></div>
  <h2>Message组件</h2>
  <div class="blank"></div>
  <div class="message-container">
    <zp-button @click="handleMessageClick" type="primary">Message</zp-button>
  </div>
  <div class="blank"></div>
  <h2>Input组件</h2>
  <div class="blank"></div>
  <div class="input-container">
    <span>text input clearable:</span><zp-input type="text" modelValue="" clearable />
    <span>text input showPassword</span><zp-input type="text" modelValue="" showPassword />
    <span>prefox slot</span
    ><zp-input type="text" modelValue="" placeholder="请输入内容">
      <template #prefix>
        <zp-icon icon="user" />
      </template>
    </zp-input>
    <span>append slot</span
    ><zp-input type="text" modelValue="" placeholder="请输入内容">
      <template #append>
        <zp-icon icon="user" />
      </template>
    </zp-input>
  </div>
  <div class="blank"></div>
  <h2>Select组件</h2>
  <div class="blank"></div>
  <zp-select v-model="selectValue" :options="selectOptions" placeholder="默认选择器，请选择" clearable />
  <div class="blank"></div>
  <zp-select v-model="selectValue" :options="selectOptions" placeholder="自定义渲染标签的请选择" clearable :render-label="customRenderLabel" />
  <div class="blank"></div>
  <zp-select v-model="selectValue" :options="selectOptions" placeholder="可过滤的选择器，请选择" clearable filterable />
  <div class="blank"></div>
  <zp-select v-model="selectValue" placeholder="远程选择器，请选择" clearable remote :remote-func="remoteMethod" filterable/>
  <div class="blank"></div>
  <h2>Form组件</h2>
  <div class="blank"></div>
  <div class="form-container">
    <zp-form ref="formRef" :model="FormModel" :rules="rules">
      <zp-form-item label="姓名" prop="name">
        <zp-input v-model="FormModel.name" placeholder="请输入姓名" />
      </zp-form-item>
      <zp-form-item label="邮箱" prop="email">
        <zp-input v-model="FormModel.email" placeholder="请输入邮箱" />
      </zp-form-item>
      <zp-form-item label="大学" prop="university">
        <zp-input v-model="FormModel.university" placeholder="请输入大学" />
      </zp-form-item>
      <zp-form-item label="密码" prop="password">
        <zp-input v-model="FormModel.password" placeholder="请输入密码" />
      </zp-form-item>
      <zp-form-item label="确认密码" prop="confirmPassword">
        <zp-input v-model="FormModel.confirmPassword" placeholder="请输入确认密码" />
      </zp-form-item>
    </zp-form>
  </div>
  <div class="blank"></div>
  <zp-button @click="validateForm">Submit</zp-button>
  <zp-button @click="resetFields" type="primary">Reset</zp-button>
</template>

<style>
.large-button {
  width: 120px;
  height: 80px;
  margin-bottom: 20px;
}
.app-container {
  user-select: none;
  cursor: pointer;
}

.app-container :deep(.zp-button) {
  margin-right: 10px !important;
  user-select: none;
}

.blank {
  height: 20px;
}

.collapse-container {
  margin: 0 auto;
}

.zp-button {
  margin-right: 10px !important;
  font-size: 16px !important;
  font-weight: 500 !important;
}

.tooltip-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
}

.tooltip-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
}

.tooltip-row-top {
  justify-content: space-around;
  align-items: flex-start;
  padding-bottom: 10px;
}

.tooltip-row-middle {
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.tooltip-row-bottom {
  justify-content: space-around;
  align-items: flex-end;
  padding-top: 10px;
}

.tooltip-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  height: 100%;
}

.tooltip-col-left {
  align-items: flex-start;
  padding-right: 15px;
}

.tooltip-col-center {
  flex: 0 0 30px;
  width: 30px;
}

.tooltip-col-right {
  align-items: flex-end;
  padding-left: 15px;
}

.tooltip-container :deep(.zp-button) {
  margin: 0 !important;
  padding: 12px 28px;
  min-width: 148px;
  height: 56px;
}

.dropdown-container .zp-dropdown {
  display: inline-block;
}
</style>
