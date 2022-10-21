import { type RenderCanvas, createElement } from '@canvas-ui/core'
import { defineComponent, h, inject, onMounted, ref, watchEffect } from 'vue'
import { InputStyle } from './style'
import { getPositionByNode } from './../../../utils'

const inputElStyle = ref({
  top: '0px',
  left: '0px',
  width: '0px',
  height: '0px',
})

export default defineComponent({
  name: 'CanvasButton',
  props: {
    placeholder: String,
  },
  emits: ['click'],
  setup(props) {
    let inputEl: HTMLInputElement
    const container = inject<RenderCanvas>('container')
    // console.log('canvas', canvas)
    // console.log(canvas?.el!.getBoundingClientRect())

    const inputNode = createElement('Text')
    const inputNodeStyle = inputNode.style
    Object.assign(inputNodeStyle, InputStyle)
    inputNode.text = props.placeholder ?? ''

    inputNode.onPointerDown = () => {
      const position = getPositionByNode(inputNode)
      inputElStyle.value.left = position.left
      inputElStyle.value.top = position.top
      inputElStyle.value.width = position.width
      inputElStyle.value.height = position.height
      inputEl.focus()
    }
    container!.appendChild(inputNode)

    onMounted(() => {
      inputEl = document.getElementById('__canvas_input_dom')! as HTMLInputElement
    })

    const handleInput = (e: { target: HTMLInputElement }) => {
      inputNode.text = e.target.value
    }

    return () => h(
      'input',
      {
        id: '__canvas_input_dom',
        style: {
          position: 'fixed',
          top: inputElStyle.value.top,
          left: inputElStyle.value.left,
          width: inputElStyle.value.width,
          height: inputElStyle.value.height,
          opacity: 0,
        },
        onInput: (event: { target: HTMLInputElement }) => handleInput(event),
      },
    )
  },
})
