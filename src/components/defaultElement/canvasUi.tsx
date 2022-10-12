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
    const container = createElement(props.style?.display === 'flex' ? 'Flex' : 'View')
    provide('canvas', container)
    onMounted(() => {
      const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement
      canvasEl.width = 500
      canvasEl.height = 500
      // const canvasRect = canvasEl.getBoundingClientRect()
      // const surfaceSize = Size.fromWH(500, 500)
      canvas.prepareInitialFrame()
      canvas.el = canvasEl
      canvas.size = {
        width: props.style?.width,
        height: 500,
      }
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

