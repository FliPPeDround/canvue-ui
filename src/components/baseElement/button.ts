import { defineComponent, h, inject, watchEffect } from 'vue'
import type { RenderCanvas, StyleProps } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'
import { styleTransform } from '../../utils/styleTransform'
import { getLenPx } from '../../utils/getLenPx'

const ButtonStyle: StyleProps = {
  cursor: 'pointer',
  paddingTop: 8,
  paddingBottom: 8,
  marginBottom: 1,
  marginLeft: 1,
  marginRight: 1,
  marginTop: 1,
  borderRadius: 4,
  textAlign: 'center',
  borderWidth: 1,
  fontSize: 14,
  lineHeight: 14,
  color: '#606266',
  borderColor: '#dcdfe6',
  backgroundColor: '#fff',
}

const hoverButtonStyle: StyleProps = {
  color: '#409eff',
  borderColor: '#c6e2ff',
  backgroundColor: '#ecf5ff',
}

export default defineComponent({
  name: 'CanvasButton',
  props: {
    style: {
      type: Object,
      required: false,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
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
    canvasNode.onPointerDown = () => emit('click')
    watchEffect(() => {
      if (props.style)
        Object.assign(canvasNode.style, styleTransform(props.style))
      const context = slots.default?.()[0].children?.toString() ?? ''
      canvasNode.style.width = getLenPx(context, canvasNode.style.fontSize!)
      canvasNode.text = context
    })
    canvas!.appendChild(canvasNode)

    return () => h('template', {}, slots.default?.())
  },
})
