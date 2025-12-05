import type { App } from 'vue';
import zpTooltip from './zpTooltip.vue';

zpTooltip.install = (app: App) => {
    app.component('ZpTooltip', zpTooltip);
}

export default zpTooltip;
export * from './type';