import type { App } from 'vue';
import zpMessage from './zpMessage.vue';
import { createMessage } from './method';

zpMessage.install = (app: App) => {
    app.component('ZpMessage', zpMessage);
}    

export default zpMessage;
export { createMessage };
export * from './type';