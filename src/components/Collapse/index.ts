import type { App } from 'vue';
import zpCollapse from './zpCollapse.vue';
import zpCollapseItem from './zpCollapseItem.vue';

zpCollapse.install = (app: App) => {
    app.component('ZpCollapse', zpCollapse);
}    
zpCollapseItem.install = (app: App) => {
    app.component('ZpCollapseItem', zpCollapseItem);
}

export default zpCollapse;
export { zpCollapseItem };
export * from './type';