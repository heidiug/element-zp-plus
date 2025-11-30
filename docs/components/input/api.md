# Input API

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | `string` | text / textarea / password | text |
| modelValue / v-model | 绑定值 | `string` | — | — |
| size | 输入框尺寸 | `string` | large / default / small | default |
| disabled | 是否禁用 | `boolean` | — | false |
| clearable | 是否显示清除按钮 | `boolean` | — | false |
| showPassword | 是否显示切换密码图标 | `boolean` | — | false |
| placeholder | 输入框占位文本 | `string` | — | — |
| readonly | 是否只读 | `boolean` | — | false |
| autocomplete | 原生属性，自动完成 | `string` | — | — |
| autofocus | 原生属性，是否自动聚焦 | `boolean` | — | false |
| form | 原生属性 | `string` | — | — |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 在 Input 值改变时触发 | `(value: string)` |
| change | 仅当输入框失去焦点或用户按下回车时触发 | `(value: string)` |
| focus | 当输入框获得焦点时触发 | — |
| blur | 当输入框失去焦点时触发 | — |
| clear | 点击清除按钮时触发 | — |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

## Exposes

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| inputRef | 输入框元素引用 | `Ref<HTMLInputElement \| HTMLTextAreaElement>` |
| focus | 使 input 获取焦点 | `() => void` |
| blur | 使 input 失去焦点 | `() => void` |

