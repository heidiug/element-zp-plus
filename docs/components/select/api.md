# Select API

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `string \| number` | — | — |
| options | 选项数据 | `SelectOption[]` | — | [] |
| placeholder | 输入框占位文本 | `string` | — | 请选择 |
| disabled | 是否禁用 | `boolean` | — | false |
| clearable | 是否可以清空选项 | `boolean` | — | false |
| filterable | 是否可搜索 | `boolean` | — | false |
| filterMethod | 自定义过滤方法 | `(value: string) => SelectOption[]` | — | — |
| remote | 是否为远程搜索 | `boolean` | — | false |
| remoteFunc | 远程搜索方法 | `(value: string) => Promise<SelectOption[]>` | — | — |
| renderLabel | 自定义选项渲染函数 | `(option: SelectOption) => VNode` | — | — |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值发生变化时触发 | `(value: string \| number)` |
| visible-change | 下拉框出现/隐藏时触发 | `(visible: boolean)` |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |

## SelectOption

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 选项的标签 | `string` | — | — |
| value | 选项的值 | `string \| number` | — | — |
| disabled | 是否禁用该选项 | `boolean` | — | false |

