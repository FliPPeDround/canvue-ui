import { defineComponent, h, watchEffect } from 'vue-demi'
import type { ElementType, RenderText } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'
import { useRootCanvas } from '@composables'
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
      styles: {
        type: Object,
        required: false,
      },
    },
    emits: ['over', 'out'],
    setup(props, { emit, slots }) {
      const container = useRootCanvas(elName)
      const canvasNode = createElement(elName)
      watchEffect(() => {
        if (props.styles)
          Object.assign(canvasNode.style, styleTransform(props.styles))

        if (elName === 'Text')
          (canvasNode as RenderText).text = slots.default?.()[0].children?.toString() ?? ''
      })
      canvasNode.onPointerOver = () => emit('over')
      container!.appendChild(canvasNode)

      const isContainer = elName in CONTAINERS
      return isContainer
        ? () => h('template', {}, slots.default?.())
        : () => null
    },
  })
}
