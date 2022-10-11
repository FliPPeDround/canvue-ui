import { Text, defineComponent, h, inject, watchEffect } from 'vue'
import type { RenderCanvas } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'
import { styleTransform } from '../../../utils/styleTransform'
import { getLenPx } from '../../../utils/getLenPx'
import { ButtonStyle, activeButtonStyle, hoverButtonStyle } from './style'
import ButtonProps from './propsType'

// function setButtonStyle(props) {
//   const { type, style } = props
//   const buttonStyle = styleTransform(ButtonStyle, style)
//   if (type === 'primary') {
//     buttonStyle.color = '#fff'
//     buttonStyle.borderColor = '#409eff'
//     buttonStyle.backgroundColor = '#409eff'
//   }
//   else if (type === 'success') {
//     buttonStyle.color = '#fff'
//     buttonStyle.borderColor = '#67c23a'
//     buttonStyle.backgroundColor = '#67c23a'
//   }
//   else if (type === 'warning') {
//     buttonStyle.color = '#fff'
//     buttonStyle.borderColor = '#e6a23c'
//     buttonStyle.backgroundColor = '#e6a23c'
//   }
//   else if (type === 'info') {
//     buttonStyle.color = '#fff'
//     buttonStyle.borderColor = '#909399'
//     buttonStyle.backgroundColor = '#909399'
//   }
//   else if (type === 'danger') {
//     buttonStyle.color = '#fff'
//     buttonStyle.borderColor = '#f56c6c'
//     buttonStyle.backgroundColor = '#f56c6c'
//   }
//   else if (type === 'text') {
//     buttonStyle.color = '#409eff'
//     buttonStyle.borderColor = '#fff'
//     buttonStyle.backgroundColor = '#fff'
//   }
//   return buttonStyle
// }

export default defineComponent({
  name: 'CanvasButton',
  props: ButtonProps,
  emits: ['click'],
  setup(props, { emit, slots }) {
    const slot = slots.default?.()[0]
    if (slot?.type !== Text)
      throw new Error('CanvasButton only support text')

    const canvas = inject<RenderCanvas>('canvas')
    if (!canvas)
      throw new Error('CanvasRect must be a child of CanvasUi')

    const canvasNode = createElement('Text')
    Object.assign(canvasNode.style, ButtonStyle)
    canvasNode.onPointerEnter = () => {
      Object.assign(canvasNode.style, hoverButtonStyle)
    }
    canvasNode.onPointerLeave = () => {
      Object.assign(canvasNode.style, ButtonStyle)
    }
    canvasNode.onPointerDown = () => {
      Object.assign(canvasNode.style, activeButtonStyle)
    }
    canvasNode.onPointerUp = () => {
      Object.assign(canvasNode.style, hoverButtonStyle)
      emit('click')
    }
    watchEffect(() => {
      if (props.style)
        Object.assign(canvasNode.style, styleTransform(props.style))
      const context = slot.children?.toString() ?? ''
      canvasNode.style.width = getLenPx(context, canvasNode.style.fontSize!) + 16
      canvasNode.text = context
    })
    canvas!.appendChild(canvasNode)

    return () => h('template', {}, slots.default?.())
  },
})
