import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入组件库的所有组件
import zpButton from '@/components/Button/zpButton.vue'
import zpIcon from '@/components/Icon/zpIcon.vue'
import zpAlert from '@/components/Alert/zpAltert.vue'
import zpCollapse from '@/components/Collapse/zpCollapse.vue'
import zpCollapseItem from '@/components/Collapse/zpCollapseItem.vue'
import zpTooltip from '@/components/Tooltip/zpTooltip.vue'
import zpDropdown from '@/components/Dropdown/zpDropdown.vue'
import zpDropdownMenu from '@/components/Dropdown/zpDropdownMenu.vue'
import zpDropdownItem from '@/components/Dropdown/zpDropdowmItem.vue'
import zpMessage from '@/components/Message/zpMessage.vue'
import zpForm from '@/components/Form/zpForm.vue'
import zpFormItem from '@/components/Form/zpFormItem.vue'
import zpInput from '@/components/Input/zpInput.vue'
import zpSelect from '@/components/Select/zpSelect.vue'
import zpSwitch from '@/components/Switch/zpSwitch.vue'

// 导入组件库样式
import '@/styles/index.css'

// 导入 FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// 导入 Demo Block 组件
import DemoBlock from './components/DemoBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册组件库的所有组件
    app.component('zp-button', zpButton)
    app.component('zp-icon', zpIcon)
    app.component('zp-alert', zpAlert)
    app.component('zp-collapse', zpCollapse)
    app.component('zp-collapse-item', zpCollapseItem)
    app.component('zp-tooltip', zpTooltip)
    app.component('zp-dropdown', zpDropdown)
    app.component('zp-dropdown-menu', zpDropdownMenu)
    app.component('zp-dropdown-item', zpDropdownItem)
    app.component('zp-message', zpMessage)
    app.component('zp-form', zpForm)
    app.component('zp-form-item', zpFormItem)
    app.component('zp-input', zpInput)
    app.component('zp-select', zpSelect)
    app.component('zp-switch', zpSwitch)
    
    // 注册 Demo Block 组件
    app.component('DemoBlock', DemoBlock)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里自定义布局插槽
    })
  }
} satisfies Theme

