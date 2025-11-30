# Form API

## Form Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model | 表单数据对象 | `Record<string, any>` | — | — |
| rules | 表单验证规则 | `FormRules` | — | — |

## Form Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validate | 对整个表单进行校验的方法 | — | `Promise<any>` |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | `keys?: string[]` | — |
| clearValidate | 移除表单项的校验结果 | `keys?: string[]` | — |

## FormItem Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| label | 标签文本 | `string` | — | — |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | `string` | — | — |

## FormItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 表单控件 |
| label | 自定义标签内容，参数为 `{ label }` |

## 验证规则

Form 组件使用 [async-validator](https://github.com/yiminghe/async-validator) 进行验证。

### Rules

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 用于验证数据类型 | `string` | string / number / boolean / method / regexp / integer / float / array / object / enum / date / url / hex / email / any | — |
| required | 是否必填 | `boolean` | — | false |
| message | 验证失败时的提示信息 | `string` | — | — |
| trigger | 触发验证的时机 | `string \| string[]` | input / blur / change | — |
| min | 最小值（仅对数字类型有效） | `number` | — | — |
| max | 最大值（仅对数字类型有效） | `number` | — | — |
| len | 长度（仅对字符串类型有效） | `number` | — | — |
| pattern | 正则表达式 | `RegExp` | — | — |
| validator | 自定义验证函数 | `function(rule, value, callback)` | — | — |

### 自定义验证函数

```typescript
const validator = (rule: any, value: any, callback: any) => {
  if (value !== formModel.password) {
    callback(new Error('两次密码不一致'))
  } else {
    callback()
  }
}
```

