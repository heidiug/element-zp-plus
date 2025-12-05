import type { App } from 'vue';
import zpSwitch from './zpSwitch.vue';

zpSwitch.install = (app: App) => {
    app.component('ZpSwitch', zpSwitch);
}

export default zpSwitch;
export * from './type';