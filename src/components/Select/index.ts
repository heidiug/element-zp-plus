import type { App } from 'vue';
import zpSelect from './zpSelect.vue';

zpSelect.install = (app: App) => {
    app.component('ZpSelect', zpSelect);
}

export default zpSelect;
export * from './type'