import type { App } from 'vue';
import zpDropdown from './zpDropdown.vue';
import zpDropdownMenu from './zpDropdownMenu.vue';
import zpDropdownItem from './zpDropdowmItem.vue';

zpDropdown.install = (app: App) => {
    app.component('ZpDropdown', zpDropdown);
}

zpDropdownMenu.install = (app: App) => {
    app.component('ZpDropdownMenu', zpDropdownMenu);
}

zpDropdownItem.install = (app: App) => {
    app.component('ZpDropdownItem', zpDropdownItem);
}

export default zpDropdown;
export { zpDropdownMenu, zpDropdownItem };
export * from './type';