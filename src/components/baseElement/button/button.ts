import { Text, defineComponent, h, inject, watchEffect } from 'vue'
import type { RenderCanvas } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'
import { getLenPx } from '../../../utils/getLenPx'
import {
  ButtonStyle,
  computeColor,
  getColorByType,
} from './style'
import { buttonProps } from './propsType'

export default defineComponent({
  name: 'CanvasButton',
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit, slots }) {
    const slot = slots.default?.()[0]
    if (slot?.type !== Text)
      throw new Error('CanvasButton only support text')

    const canvas = inject<RenderCanvas>('canvas')
    if (!canvas)
      throw new Error('CanvasRect must be a child of CanvasUi')

    const canvasNode = createElement('Text')
    const canvasNodeStyle = canvasNode.style

    const buttonColors = props.color ? computeColor(props.color) : getColorByType(props.type)
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
      if (props.style)
        Object.assign(canvasNode.style, ButtonStyle, props.style)
      const context = slot.children?.toString() ?? ''
      canvasNode.style.width = getLenPx(context, canvasNode.style.fontSize!) + 16
      canvasNode.text = context
    })
    canvas!.appendChild(canvasNode)

    return () => h('template', {}, slots.default?.())
  },
})
