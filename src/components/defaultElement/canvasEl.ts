import { defineComponent, h, inject, watchEffect } from 'vue'
import type { ElementType, RenderCanvas, RenderText } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'
import { styleTransform } from '../../utils/styleTransform'

const CONTAINERS = {
  View: 'View',
  Flex: 'Flex',
  Canvas: 'Canvas',
  Chunk: 'Chunk',
  ScrollView: 'ScrollView',
}

export default (elName: ElementType) => {
  return defineComponent({
    name: 'CanvasRect',
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

      const canvasNode = createElement(elName)
      watchEffect(() => {
        if (props.style)
          Object.assign(canvasNode.style, styleTransform(props.style))

        if (elName === 'Text')
          (canvasNode as RenderText).text = slots.default?.()[0].children?.toString() ?? ''
      })
      canvasNode.onPointerOver = () => emit('over')
      canvas!.appendChild(canvasNode)

      const isContainer = elName in CONTAINERS
      return isContainer
        ? () => h('template', {}, slots.default?.())
        : () => null
    },
  })
}
