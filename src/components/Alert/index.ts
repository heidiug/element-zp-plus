import type { App } from 'vue';
import zpAlert from './zpAltert.vue';

zpAlert.install = (app: App) => {
    app.component('ZpAlert', zpAlert);
}

export default zpAlert;
export * from './type';