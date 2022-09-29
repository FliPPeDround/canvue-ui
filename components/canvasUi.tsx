import { defineComponent, onMounted, provide } from 'vue'
import { Size, createElement } from '@canvas-ui/core'

export default defineComponent({
  name: 'CanvasUi',
  setup(_, { slots }) {
    const canvas = createElement('Canvas')
    provide('canvas', canvas)
    onMounted(() => {
      const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement
      const canvasRect = canvasEl.getBoundingClientRect()
      const surfaceSize = Size.fromWH(canvasRect.width, canvasRect.height)
      canvas.prepareInitialFrame()
      canvas.el = canvasEl
      canvas.size = surfaceSize
      canvas.dpr = 1
    })

    return () => (
      <div>
        <canvas id='canvas' />
        {slots.default!()}
      </div>
    )
  },
})

