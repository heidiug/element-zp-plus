import type { App } from 'vue';
import zpForm from './zpForm.vue';
import zpFormItem from './zpFormItem.vue';

zpForm.install = (app: App) => {
    app.component('ZpForm', zpForm);
}

zpFormItem.install = (app: App) => {
    app.component('ZpFormItem', zpFormItem);
}

export default zpForm;
export { zpFormItem };
export * from './type';