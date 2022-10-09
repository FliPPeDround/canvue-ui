import { defineComponent, onMounted, provide } from 'vue'
import { Size, createElement } from '@canvas-ui/core'

export default defineComponent({
  name: 'CanvasUi',
  props: {
    style: {
      type: Object,
    },
  },
  setup(props, { slots }) {
    const canvas = createElement('Canvas')
    const container = createElement('Flex')
    provide('canvas', container)
    onMounted(() => {
      const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement
      const canvasRect = canvasEl.getBoundingClientRect()
      const surfaceSize = Size.fromWH(canvasRect.width, canvasRect.height)
      canvas.prepareInitialFrame()
      canvas.el = canvasEl
      canvas.size = surfaceSize
      // canvas.dpr = devicePixelRatio

      Object.assign(container.style, props.style)
      canvas.appendChild(container)
    })

    return () => (
      <>
        <canvas id="canvas" />
        {slots.default?.()}
      </>
    )
  },
})

