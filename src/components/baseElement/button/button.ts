import { Text, defineComponent, h, inject, watchEffect } from 'vue-demi'
import { type RenderCanvas, createElement } from '@canvas-ui/core'
import { getLenPx } from '../../../utils/getLenPx'
import { ButtonStyle, computeColor, customColor } from './style'
import { buttonProps } from './propsType'

export default defineComponent({
  name: 'CanvasButton',
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit, slots }) {
    const slot = slots.default?.()[0]
    if (!slot)
      throw new Error('<cv-button> must have a child element')

    if (slot?.type !== Text)
      throw new Error('<cv-button> child element only support text')

    const container = inject<RenderCanvas>('container')
    if (!container)
      throw new Error('<cv-button> must be a child of <cv-ui>')

    const canvasNode = createElement('Text')
    const canvasNodeStyle = canvasNode.style

    const buttonColors = props.color
      ? computeColor(props.color)
      : customColor
    Object.assign(canvasNodeStyle, ButtonStyle, buttonColors.custom)

    canvasNode.onPointerEnter = () => {
      Object.assign(canvasNodeStyle, buttonColors.hover)
    }
    canvasNode.onPointerLeave = () => {
      Object.assign(canvasNodeStyle, buttonColors.custom)
    }
    canvasNode.onPointerDown = () => {
      Object.assign(canvasNodeStyle, buttonColors.active)
    }
    canvasNode.onPointerUp = () => {
      Object.assign(canvasNodeStyle, buttonColors.hover)
      emit('click')
    }

    watchEffect(() => {
      if (props.styles)
        Object.assign(canvasNode.style, ButtonStyle, props.styles)
      const context = slot.children?.toString() ?? ''
      canvasNode.style.width = getLenPx(context, canvasNode.style.fontSize!) + 16
      canvasNode.text = context
    })
    container!.appendChild(canvasNode)

    return () => h('template', {}, slots.default?.())
  },
})
