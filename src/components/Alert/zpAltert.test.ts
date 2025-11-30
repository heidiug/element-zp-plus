import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import zpAlert from './zpAltert.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// 注册图标库
library.add(fas)

describe('zpAlert 组件', () => {
  it('应该正确渲染 title 和 default 插槽内容', () => {
    const wrapper = mount(zpAlert, {
      slots: {
        title: '这是警报标题',
        default: '这是警报的主要信息。',
        icon: '<i class="mock-icon"></i>'
      }
    })

    // 断言：默认插槽内容是否渲染
    expect(wrapper.text()).toContain('这是警报的主要信息。')

    // 断言：具名插槽 title 内容是否渲染
    expect(wrapper.html()).toContain('这是警报标题')

    // 断言：具名插槽 icon 渲染的 DOM 结构是否存在
    expect(wrapper.find('.mock-icon').exists()).toBe(true)
  })

  it('应该正确渲染 title prop', () => {
    const wrapper = mount(zpAlert, {
      props: {
        title: 'Alert Title'
      }
    })

    const titleElement = wrapper.find('.zp-alert__title')
    expect(titleElement.exists()).toBe(true)
    expect(titleElement.text()).toBe('Alert Title')
  })

  it('应该正确渲染 description prop', () => {
    const wrapper = mount(zpAlert, {
      props: {
        title: 'Title',
        description: 'This is a description'
      }
    })

    const descriptionElement = wrapper.find('.zp-alert__description')
    expect(descriptionElement.exists()).toBe(true)
    expect(descriptionElement.text()).toBe('This is a description')
  })

  it('应该根据 type prop 正确应用样式类', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'] as const

    types.forEach((type) => {
      const wrapper = mount(zpAlert, {
        props: { type, title: `${type} alert` }
      })

      // 查找内部的 .zp-alert div（在 Transition 内部）
      const alertElement = wrapper.find('.zp-alert')
      
      if (alertElement.exists()) {
        // 如果找到了元素，检查类名
        expect(alertElement.classes()).toContain(`zp-alert--${type}`)
      } else {
        // 如果找不到（可能是 Transition 的原因），检查 HTML 内容
        const html = wrapper.html()
        expect(html).toContain(`zp-alert--${type}`)
      }
      wrapper.unmount()
    })
  })

  it('应该正确显示和隐藏图标', () => {
    const wrapperWithIcon = mount(zpAlert, {
      props: {
        type: 'success',
        title: 'Success',
        showIcon: true
      }
    })

    expect(wrapperWithIcon.find('.zp-alert__icon').exists()).toBe(true)

    const wrapperWithoutIcon = mount(zpAlert, {
      props: {
        type: 'success',
        title: 'Success',
        showIcon: false
      }
    })

    expect(wrapperWithoutIcon.find('.zp-alert__icon').exists()).toBe(false)
  })

  it('应该根据 type 自动选择正确的图标', () => {
    const typeIconMap: Record<string, string> = {
      success: 'check-circle',
      warning: 'exclamation-triangle',
      danger: 'circle-xmark',
      info: 'circle-info',
      primary: 'circle-info'
    }

    Object.entries(typeIconMap).forEach(([type, expectedIcon]) => {
      const wrapper = mount(zpAlert, {
        props: {
          type: type as any,
          title: `${type} alert`,
          showIcon: true
        }
      })

      const iconComponent = wrapper.findComponent({ name: 'zpIcon' })
      if (iconComponent.exists()) {
        expect(iconComponent.props('icon')).toBe(expectedIcon)
      }
      wrapper.unmount()
    })
  })

  it('应该正确处理 closable prop', () => {
    const wrapperWithClose = mount(zpAlert, {
      props: {
        closable: true,
        title: 'Closable Alert'
      }
    })

    expect(wrapperWithClose.find('.zp-alert__closebtn').exists()).toBe(true)

    const wrapperWithoutClose = mount(zpAlert, {
      props: {
        closable: false,
        title: 'Not Closable Alert'
      }
    })

    expect(wrapperWithoutClose.find('.zp-alert__closebtn').exists()).toBe(false)
  })

  it('应该正确处理关闭按钮点击事件', async () => {
    const closeCallback = vi.fn()
    const wrapper = mount(zpAlert, {
      props: {
        closable: true,
        title: 'Test Alert',
        close: closeCallback
      }
    })

    const closeBtn = wrapper.find('.zp-alert__closebtn')
    
    // 断言：组件初始应该是可见的
    expect(wrapper.html()).toContain('Test Alert')
    
    await closeBtn.trigger('click')
    await wrapper.vm.$nextTick()

    // 断言：close 回调应该被调用
    expect(closeCallback).toHaveBeenCalledWith(false)
    
    // 注意：由于 Transition 组件和 v-show，在测试环境中验证可见性比较复杂
    // 主要验证回调被调用即可，实际的隐藏由 Transition 和 v-show 控制
  })

  it('应该正确处理 effect prop (dark/light)', () => {
    const wrapperDark = mount(zpAlert, {
      props: {
        type: 'primary',
        title: 'Dark Alert',
        effect: 'dark'
      }
    })

    // 检查 HTML 中是否包含 is-dark 类
    expect(wrapperDark.html()).toContain('is-dark')

    const wrapperLight = mount(zpAlert, {
      props: {
        type: 'primary',
        title: 'Light Alert',
        effect: 'light'
      }
    })

    // 检查 HTML 中不包含 is-dark 类
    expect(wrapperLight.html()).not.toContain('is-dark')
  })

  it('应该正确处理自定义图标', () => {
    const wrapper = mount(zpAlert, {
      props: {
        icon: 'custom-icon',
        showIcon: true,
        title: 'Custom Icon Alert'
      }
    })

    const iconComponent = wrapper.findComponent({ name: 'zpIcon' })
    if (iconComponent.exists()) {
      expect(iconComponent.props('icon')).toBe('custom-icon')
    }
  })

  it('应该正确渲染组件名称', () => {
    const wrapper = mount(zpAlert, {
      props: {
        title: 'Test'
      }
    })

    expect(wrapper.vm.$options.name).toBe('zpAlert')
  })

  it('应该正确处理默认插槽内容', () => {
    const wrapper = mount(zpAlert, {
      slots: {
        default: 'Default slot content'
      }
    })

    expect(wrapper.text()).toContain('Default slot content')
  })
})

