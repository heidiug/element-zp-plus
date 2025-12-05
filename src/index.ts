import zpButton from './components/Button/zpButton.vue';
import zpCollapse from './components/Collapse/zpCollapse.vue';
import zpCollapseItem from './components/Collapse/zpCollapseItem.vue';
import zpMessage, { createMessage } from './components/Message/index';
import zpAlert from './components/Alert/zpAltert.vue';
import zpDropdown from './components/Dropdown/zpDropdown.vue';
import zpDropdownMenu from './components/Dropdown/zpDropdownMenu.vue';
import zpDropdownItem from './components/Dropdown/zpDropdowmItem.vue';
import zpForm from './components/Form/zpForm.vue';
import zpFormItem from './components/Form/zpFormItem.vue';
import zpIcon from './components/Icon/zpIcon.vue';
import zpInput from './components/Input/zpInput.vue';
import zpSelect from './components/Select/zpSelect.vue';
import zpSwitch from './components/Switch/zpSwitch.vue';
import zpTooltip from './components/Tooltip/zpTooltip.vue';
import type { App } from 'vue';
import '@/styles/index.css'
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const components = [
    zpButton,
    zpCollapse,
    zpCollapseItem,
    zpMessage,
    zpAlert,
    zpDropdown,
    zpDropdownMenu,
    zpDropdownItem,
    zpForm,
    zpFormItem,
    zpIcon,
    zpInput,
    zpSelect,
    zpSwitch,
    zpTooltip,
]

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name as string, component);
    });
}

export {
    install,
    createMessage,
    zpButton,
    zpCollapse,
    zpCollapseItem,
    zpMessage,
    zpAlert,
    zpDropdown,
    zpDropdownMenu,
    zpDropdownItem,
    zpForm,
    zpFormItem,
    zpIcon,
    zpInput,
}

export default {
    install
}