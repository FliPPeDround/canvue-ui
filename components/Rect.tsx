import { defineComponent, inject, watchEffect } from 'vue'
import type { RenderCanvas } from '@canvas-ui/core'
import { createElement } from '@canvas-ui/core'

export default defineComponent({
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
    watchEffect(() => {
      const rect = createElement('Rect')
      Object.assign(rect.style, props.style)
      rect.onPointerOver = () => emit('over')
      canvas!.appendChild(rect)
    })

    return () => null
  },
})
