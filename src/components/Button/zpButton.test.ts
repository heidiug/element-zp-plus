import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import zpButton from './zpButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// 注册图标库
library.add(fas)

describe('zpButton 组件', () => {
  it('应该正确接收和处理 Props', () => {
    const wrapper = mount(zpButton, {
      props: {
        type: 'primary',
        size: 'large',
        disabled: false,
        round: true,
        plain: false
      },
      slots: {
        default: '按钮文字'
      }
    })

    // 断言：组件存在
    expect(wrapper.exists()).toBe(true)

    // 断言：按钮文字正确渲染
    expect(wrapper.text()).toContain('按钮文字')

    // 断言：type class 正确应用
    expect(wrapper.classes()).toContain('zp-button--primary')

    // 断言：size class 正确应用
    expect(wrapper.classes()).toContain('zp-button--large')

    // 断言：round class 正确应用
    expect(wrapper.classes()).toContain('is-round')
  })

  it('应该正确渲染不同类型的按钮', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'] as const

    types.forEach((type) => {
      const wrapper = mount(zpButton, {
        props: { type },
        slots: { default: `${type} 按钮` }
      })

      expect(wrapper.classes()).toContain(`zp-button--${type}`)
      expect(wrapper.text()).toContain(`${type} 按钮`)
      wrapper.unmount()
    })
  })

  it('应该正确处理 disabled 状态', () => {
    const wrapper = mount(zpButton, {
      props: {
        disabled: true
      },
      slots: {
        default: '禁用按钮'
      }
    })

    // 断言：按钮应该被禁用
    expect(wrapper.attributes('disabled')).toBeDefined()

    // 断言：应该包含 disabled class
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('应该正确处理 loading 状态', () => {
    const wrapper = mount(zpButton, {
      props: {
        loading: true
      },
      slots: {
        default: '加载中'
      }
    })

    // 断言：按钮应该被禁用（loading 时会禁用）
    expect(wrapper.attributes('disabled')).toBeDefined()

    // 断言：应该包含 loading class
    expect(wrapper.classes()).toContain('is-loading')
  })

  it('应该正确渲染图标', () => {
    const wrapper = mount(zpButton, {
      props: {
        icon: 'check'
      },
      slots: {
        default: '带图标的按钮'
      }
    })

    // 断言：图标应该存在
    const iconComponents = wrapper.findAllComponents({ name: 'zpIcon' })
    expect(iconComponents.length).toBeGreaterThan(0)
  })

  it('应该正确渲染 loading 图标', () => {
    const wrapper = mount(zpButton, {
      props: {
        loading: true
      }
    })

    // 断言：应该有 spinner 图标
    const iconComponents = wrapper.findAllComponents({ name: 'zpIcon' })
    const hasSpinner = iconComponents.some((icon) => {
      return icon.props('icon') === 'spinner'
    })
    expect(hasSpinner).toBe(true)
  })

  it('应该正确渲染不同尺寸的按钮', () => {
    const sizes = ['large', 'small'] as const

    sizes.forEach((size) => {
      const wrapper = mount(zpButton, {
        props: { size },
        slots: { default: `${size} 按钮` }
      })

      expect(wrapper.classes()).toContain(`zp-button--${size}`)
      wrapper.unmount()
    })
  })

  it('应该正确渲染 plain 样式', () => {
    const wrapper = mount(zpButton, {
      props: {
        type: 'primary',
        plain: true
      }
    })

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('应该正确渲染 text 样式', () => {
    const wrapper = mount(zpButton, {
      props: {
        text: true
      }
    })

    expect(wrapper.classes()).toContain('is-text')
  })

  it('应该正确渲染 circle 样式', () => {
    const wrapper = mount(zpButton, {
      props: {
        circle: true
      }
    })

    expect(wrapper.classes()).toContain('is-circle')
  })

  it('应该正确暴露 buttonRef', async () => {
    const wrapper = mount(zpButton, {
      slots: {
        default: '测试按钮'
      }
    })

    // 断言：组件实例应该有 buttonRef
    expect(wrapper.vm.buttonRef).toBeDefined()
  })

  it('应该正确处理 nativeType prop', () => {
    const wrapper = mount(zpButton, {
      props: {
        nativeType: 'submit'
      }
    })

    // 断言：按钮的 type 属性应该是 submit
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('应该正确处理默认插槽内容', () => {
    const wrapper = mount(zpButton, {
      slots: {
        default: '默认插槽内容'
      }
    })

    expect(wrapper.text()).toContain('默认插槽内容')
  })
})

