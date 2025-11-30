# Message API

## 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| createMessage | 调用 Message 提示 | `options` |

## Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| message | 消息文字 | `string` | — | — |
| type | 消息类型 | `string` | success / warning / info / error | info |
| duration | 显示时间，毫秒。设为 0 则不会自动关闭 | `number` | — | 3000 |
| showClose | 是否显示关闭按钮 | `boolean` | — | false |
| plain | 是否使用朴素样式 | `boolean` | — | false |

