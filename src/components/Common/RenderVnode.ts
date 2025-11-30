import { defineComponent } from "vue";

//动态渲染通过 prop 传入的 VNode（虚拟节点）或纯文本
const RenderVnode = defineComponent({
    props: {
        vNode: {
            type: [Object, String],
            required: true
        }
    },
    // 当 setup 函数返回一个函数时，这个返回的函数就会被视为组件的渲染函数（Render Function），
    // 它会完全取代该组件原本的 <template> 模板内容。
    setup(props) {
        return () => props.vNode
    }
})

export default RenderVnode