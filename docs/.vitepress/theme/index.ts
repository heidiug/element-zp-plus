import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入组件
import ZpButton from '../../../src/components/Button/zpButton.vue'
import ZpIcon from '../../../src/components/Icon/zpIcon.vue'
import ZpAlert from '../../../src/components/Alert/zpAltert.vue'
import ZpTooltip from '../../../src/components/Tooltip/zpTooltip.vue'
import ZpCollapse from '../../../src/components/Collapse/zpCollapse.vue'
import ZpCollapseItem from '../../../src/components/Collapse/zpCollapseItem.vue'
import ZpSwitch from '../../../src/components/Switch/zpSwitch.vue'
import ZpForm from '../../../src/components/Form/zpForm.vue'
import ZpFormItem from '../../../src/components/Form/zpFormItem.vue'
import ZpInput from '../../../src/components/Input/zpInput.vue'
import ZpSelect from '../../../src/components/Select/zpSelect.vue'
import ZpDropdown from '../../../src/components/Dropdown/zpDropdown.vue'
import ZpDropdownMenu from '../../../src/components/Dropdown/zpDropdownMenu.vue'
import ZpDropdownItem from '../../../src/components/Dropdown/zpDropdowmItem.vue'

// 导入 DemoContainer 组件
import DemoContainer from '../components/DemoContainer.vue'

// 导入 Message 方法
import { createMessage } from '../../../src/components/Message/method'

// 导入全局样式
import '../../../src/styles/index.css'

// 导入 FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 添加 FontAwesome 图标库
library.add(fas)

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册所有组件
    app.component('ZpButton', ZpButton)
    app.component('ZpIcon', ZpIcon)
    app.component('ZpAlert', ZpAlert)
    app.component('ZpTooltip', ZpTooltip)
    app.component('ZpCollapse', ZpCollapse)
    app.component('ZpCollapseItem', ZpCollapseItem)
    app.component('ZpSwitch', ZpSwitch)
    app.component('ZpForm', ZpForm)
    app.component('ZpFormItem', ZpFormItem)
    app.component('ZpInput', ZpInput)
    app.component('ZpSelect', ZpSelect)
    app.component('ZpDropdown', ZpDropdown)
    app.component('ZpDropdownMenu', ZpDropdownMenu)
    app.component('ZpDropdownItem', ZpDropdownItem)
    
    // 注册 FontAwesome 组件
    app.component('FontAwesomeIcon', FontAwesomeIcon)
    
    // 注册 DemoContainer 组件
    app.component('DemoContainer', DemoContainer)
    
    // 将 createMessage 方法添加到全局属性，方便在文档中使用
    app.config.globalProperties.$message = createMessage
  }
} satisfies Theme
