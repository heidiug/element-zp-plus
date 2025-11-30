# Button API

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | `string` | primary / success / warning / danger / info | — |
| size | 尺寸 | `string` | large / default / small | default |
| icon | 图标组件 | `string / object` | — | — |
| loading | 是否加载中状态 | `boolean` | — | false |
| disabled | 是否禁用状态 | `boolean` | — | false |
| plain | 是否朴素按钮 | `boolean` | — | false |
| round | 是否圆角按钮 | `boolean` | — | false |
| circle | 是否圆形按钮 | `boolean` | — | false |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义默认内容 |
| icon | 自定义图标组件 |

## Exposes

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| buttonRef | 按钮元素引用 | `Ref<HTMLButtonElement>` |

