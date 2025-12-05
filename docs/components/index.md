# Overview 组件总览

以下是 Element ZP Plus 提供的所有组件。

## Basic 基础组件

<div class="component-grid">
  <a href="/components/button" class="component-card">
    <div class="component-preview">
      <zp-button type="primary">Action</zp-button>
    </div>
    <div class="component-name">
      Button 按钮
    </div>
  </a>

  <a href="/components/icon" class="component-card">
    <div class="component-preview">
      <zp-icon icon="bell" style="font-size: 24px; color: #409eff;" />
      <zp-icon icon="star" style="font-size: 24px; color: #f39c12; margin-left: 8px;" />
      <zp-icon icon="circle" style="font-size: 24px; color: #e74c3c; margin-left: 8px;" />
    </div>
    <div class="component-name">
      Icon 图标
    </div>
  </a>

  <a href="/components/alert" class="component-card">
    <div class="component-preview">
      <zp-alert type="success" title="成功提示" description="这是一条成功消息" :closable="false" />
    </div>
    <div class="component-name">
      Alert 警告
    </div>
  </a>

  <a href="/components/tooltip" class="component-card">
    <div class="component-preview">
      <zp-tooltip content="这是提示内容" placement="top">
        <zp-button>悬停显示提示</zp-button>
      </zp-tooltip>
    </div>
    <div class="component-name">
      Tooltip 文字提示
    </div>
  </a>

  <a href="/components/collapse" class="component-card">
    <div class="component-preview">
      <zp-collapse>
        <zp-collapse-item title="折叠面板 1" name="1">
          <div>这是折叠面板的内容</div>
        </zp-collapse-item>
      </zp-collapse>
    </div>
    <div class="component-name">
      Collapse 折叠面板
    </div>
  </a>

  <a href="/components/switch" class="component-card">
    <div class="component-preview">
      <zp-switch v-model="switchValue" />
    </div>
    <div class="component-name">
      Switch 开关
    </div>
  </a>

  <a href="/components/message" class="component-card">
    <div class="component-preview">
      <zp-button @click="showMessage">显示消息</zp-button>
    </div>
    <div class="component-name">
      Message 消息提示
    </div>
  </a>
</div>

## Form 表单组件

<div class="component-grid">
  <a href="/components/form" class="component-card">
    <div class="component-preview">
      <zp-form :model="formData" style="width: 200px;">
        <zp-form-item label="用户名">
          <zp-input v-model="formData.username" placeholder="请输入用户名" />
        </zp-form-item>
      </zp-form>
    </div>
    <div class="component-name">
      Form 表单
    </div>
  </a>

  <a href="/components/input" class="component-card">
    <div class="component-preview">
      <zp-input placeholder="请输入内容" style="width: 200px;" />
    </div>
    <div class="component-name">
      Input 输入框
    </div>
  </a>

  <a href="/components/select" class="component-card">
    <div class="component-preview">
      <zp-select v-model="selectValue" :options="selectOptions" placeholder="请选择" style="width: 200px;" />
    </div>
    <div class="component-name">
      Select 选择器
    </div>
  </a>
</div>

## Data 数据展示

<div class="component-grid">
  <a href="/components/dropdown" class="component-card">
    <div class="component-preview">
      <zp-dropdown>
        <zp-button>下拉菜单</zp-button>
        <template #dropdown>
          <zp-dropdown-menu>
            <zp-dropdown-item>选项1</zp-dropdown-item>
            <zp-dropdown-item>选项2</zp-dropdown-item>
          </zp-dropdown-menu>
        </template>
      </zp-dropdown>
    </div>
    <div class="component-name">
      Dropdown 下拉菜单
    </div>
  </a>
</div>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const switchValue = ref(false)
const formData = ref({
  username: ''
})
const selectValue = ref('')
const selectOptions = ref([
  { label: '选项1', value: 'option1' },
  { label: '选项2', value: 'option2' }
])

const instance = getCurrentInstance()
const showMessage = () => {
  if (instance?.appContext.config.globalProperties.$message) {
    instance.appContext.config.globalProperties.$message({
      message: '这是一条消息提示',
      type: 'success'
    })
  }
}
</script>

<style scoped>
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.component-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  background: var(--vp-c-bg);
  text-decoration: none;
  color: inherit;
}

.component-card:hover {
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
  transform: translateY(-2px);
  border-color: var(--vp-c-brand);
}

.component-preview {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  background: var(--vp-c-bg-soft);
}

.component-name {
  padding: 12px;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-weight: 500;
  font-size: 14px;
}

.component-card:hover .component-name {
  color: var(--vp-c-brand);
}
</style>

