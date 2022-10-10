import { defineComponent, h, inject, watchEffect } from 'vue'
import type { RenderCanvas } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'
import { styleTransform } from '../../utils/styleTransform'

export default defineComponent({
  name: 'CanvasButton',
  props: {
    style: {
      type: Object,
      required: false,
    },
  },
  emits: ['over', 'out'],
  setup(props, { emit, slots }) {
    const canvas = inject<RenderCanvas>('canvas')

    if (!canvas)
      throw new Error('CanvasRect must be a child of CanvasUi')

    const canvasNode = createElement('Text')
    watchEffect(() => {
      if (props.style)
        Object.assign(canvasNode.style, styleTransform(props.style))

      canvasNode.text = slots.default?.()[0].children?.toString() ?? ''
    })
    canvasNode.onPointerOver = () => emit('over')
    canvas!.appendChild(canvasNode)

    return () => h('template', {}, slots.default?.())
  },
})
