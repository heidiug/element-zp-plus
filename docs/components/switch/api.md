# Switch API

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `boolean \| string \| number` | — | false |
| disabled | 是否禁用 | `boolean` | — | false |
| size | 开关的尺寸 | `string` | large / default / small | default |
| activeValue | switch 打开时的值 | `boolean \| string \| number` | — | true |
| inactiveValue | switch 关闭时的值 | `boolean \| string \| number` | — | false |
| activeText | switch 打开时的文字描述 | `string` | — | — |
| inactiveText | switch 关闭时的文字描述 | `string` | — | — |
| name | 原生属性 | `string` | — | — |
| id | 原生属性 | `string` | — | — |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | switch 状态发生变化时的回调函数 | `(value: boolean \| string \| number)` |

