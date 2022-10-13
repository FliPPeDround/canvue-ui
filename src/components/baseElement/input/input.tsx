import { type RenderCanvas, createElement } from '@canvas-ui/core'
import { type StyleValue, defineComponent, inject, onMounted, onUpdated } from 'vue'

const inputElStyle: StyleValue = {
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

    const inputNode = createElement('Text')
    const inputNodeStyle = inputNode.style

    console.log('inputNodeRectX', inputNode.offset.x)
    console.log('inputNodeRectY', inputNode.offset.y)
    onMounted(() => {
      const canvasEl = document.getElementById('__canvas_root_dom')! as HTMLCanvasElement
      const inputEl = document.getElementById('__canvas_input_dom')! as HTMLInputElement
      container!.appendChild(inputNode)
      const inputNodeRect = {
        x: inputNode.offset.x,
        y: inputNode.offset.y,
        width: inputNode.size.width,
        height: inputNode.size.height,
      }
      inputNode.text = `${inputNodeRect.x},${inputNodeRect.y},${inputNodeRect.width},${inputNodeRect.height}`
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
