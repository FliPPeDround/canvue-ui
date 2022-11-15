import { defineComponent, h, onMounted, provide } from 'vue-demi'
import { createElement } from '@canvas-ui/core'

export default defineComponent({
  name: 'CanvasUi',
  props: {
    styles: {
      type: Object,
    },
  },
  setup(props, { slots }) {
    const canvas = createElement('Canvas')
    const container = createElement(props.styles?.display === 'flex' ? 'Flex' : 'View')
    provide('container', container)
    provide('canvas', canvas)
    onMounted(() => {
      const canvasEl = document.getElementById('__canvue_root_dom')! as HTMLCanvasElement
      canvasEl.width = 500
      canvasEl.height = 500
      // const canvasRect = canvasEl.getBoundingClientRect()
      // const surfaceSize = Size.fromWH(500, 500)
      canvas.prepareInitialFrame()
      canvas.el = canvasEl
      canvas.size = {
        width: props.styles?.width,
        height: 500,
      }
      // canvas.dpr = devicePixelRatio

      Object.assign(container.style, props.styles)
      canvas.appendChild(container)
    })

    return () => h(
      'div',
      {
        class: '__canvue_root',
      },
      [
        h('canvas', { id: '__canvue_root_dom' }),
        slots.default?.(),
      ],
    )
  },
})

