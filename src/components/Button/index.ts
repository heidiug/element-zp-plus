import zpButton from './zpButton.vue';
import type { App } from 'vue';

zpButton.install = (app: App) => {
    app.component('ZpButton', zpButton);
}

export default zpButton;

export * from './type';