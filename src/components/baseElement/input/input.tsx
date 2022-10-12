import type { RenderCanvas } from '@canvas-ui/core'
import { defineComponent, inject, onMounted } from 'vue'

const inputElStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
}

export default defineComponent({
  name: 'CanvasButton',
  props: {

  },
  emits: ['click'],
  setup() {
    const container = inject<RenderCanvas>('container')
    // console.log('canvas', canvas)
    // console.log(canvas?.el!.getBoundingClientRect())

    onMounted(() => {
      const canvasEl = document.getElementById('__canvas_root_dom')! as HTMLCanvasElement
      const inputEl = document.getElementById('__canvas_input_dom')! as HTMLInputElement
    })

    return () => (
      <>
        <input
          type="text"
          id="__canvas_input_dom"
          style={inputElStyle}
        />
      </>
    )
  },
})
