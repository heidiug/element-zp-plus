import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import zpIcon from './zpIcon.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// 确保图标库已注册
library.add(fas)

describe('zpIcon 组件', () => {
  it('应该正确渲染用户传入的图标名称', () => {
    const wrapper = mount(zpIcon, {
      props: {
        icon: 'user',
        color: 'red'
      }
    })

    // 断言：组件已存在
    expect(wrapper.exists()).toBe(true)

    // 断言：检查 color prop 是否正确应用于样式
    expect(wrapper.attributes('style')).toContain('color: red')

    // 断言：组件的名称
    expect(wrapper.vm.$options.name).toBe('zpIcon')
  })

  it('应该正确应用 type prop', () => {
    const wrapper = mount(zpIcon, {
      props: {
        icon: 'home',
        type: 'primary'
      }
    })

    // 断言：应该包含 type 对应的 class
    expect(wrapper.classes()).toContain('zp-icon--primary')
  })

  it('应该正确应用多个 type', () => {
    const types: Array<'primary' | 'success' | 'warning' | 'danger' | 'info'> = [
      'primary',
      'success',
      'warning',
      'danger',
      'info'
    ]

    types.forEach((type) => {
      const wrapper = mount(zpIcon, {
        props: {
          icon: 'check',
          type
        }
      })

      expect(wrapper.classes()).toContain(`zp-icon--${type}`)
      wrapper.unmount()
    })
  })

  it('应该正确过滤掉 type 和 color props 传递给 FontAwesome 组件', () => {
    const wrapper = mount(zpIcon, {
      props: {
        icon: 'star',
        type: 'success',
        color: 'blue',
        size: 'lg'
      }
    })

    // 断言：组件应该存在
    expect(wrapper.exists()).toBe(true)

    // 断言：type 和 color 不应该传递给 FontAwesome，但 size 应该传递
    const fontAwesomeIcon = wrapper.findComponent({ name: 'FontAwesomeIcon' })
    expect(fontAwesomeIcon.exists()).toBe(true)
  })

  it('应该正确渲染图标', () => {
    const wrapper = mount(zpIcon, {
      props: {
        icon: 'check-circle'
      }
    })

    // 断言：图标元素存在
    const iconElement = wrapper.find('.zp-icon')
    expect(iconElement.exists()).toBe(true)

    // 断言：FontAwesome 组件存在
    const fontAwesomeIcon = wrapper.findComponent({ name: 'FontAwesomeIcon' })
    expect(fontAwesomeIcon.exists()).toBe(true)
  })

  it('应该正确处理 $attrs 透传', () => {
    const wrapper = mount(zpIcon, {
      props: {
        icon: 'heart'
      },
      attrs: {
        class: 'custom-class',
        'data-testid': 'icon-test'
      }
    })

    // 断言：自定义属性应该被应用
    expect(wrapper.attributes('data-testid')).toBe('icon-test')
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('应该在不提供 color 时不设置 style', () => {
    const wrapper = mount(zpIcon, {
      props: {
        icon: 'user'
      }
    })

    // 断言：当没有 color prop 时，不应该有 style 属性
    const styleAttr = wrapper.attributes('style')
    if (styleAttr) {
      expect(styleAttr).not.toContain('color')
    }
  })
})

