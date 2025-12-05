import type { App } from 'vue';
import zpInput from './zpInput.vue';

zpInput.install = (app: App) => {
    app.component('ZpInput', zpInput);
}

export default zpInput;
export * from './type';