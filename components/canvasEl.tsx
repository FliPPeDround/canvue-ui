import { defineComponent, inject, watchEffect } from 'vue'
import type { ElementType, RenderCanvas } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'

export default (elName: ElementType) => {
  return defineComponent({
    name: 'CanvasRect',
    props: {
      style: {
        type: Object,
        required: true,
      },
    },
    emits: ['over', 'out'],
    setup(props, { emit }) {
      const canvas = inject<RenderCanvas>('canvas')

      if (!canvas)
        throw new Error('CanvasRect must be a child of CanvasUi')

      const rect = createElement(elName)
      watchEffect(() => {
        Object.assign(rect.style, props.style)
      })
      rect.onPointerOver = () => emit('over')
      canvas!.appendChild(rect)

      return () => null
    },
  })
}
