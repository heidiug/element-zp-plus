import type { App } from 'vue';
import zpIcon from './zpIcon.vue';

zpIcon.install = (app: App) => {
    app.component('ZpIcon', zpIcon);
}

export default zpIcon;
export * from './type';