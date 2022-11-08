import { type RenderCanvas, createElement } from '@canvas-ui/core'
import { defineComponent, h, inject, onMounted, ref } from 'vue-demi'
import { InputStyle } from './style'
import { getPositionByNode } from './../../../utils'

const inputElStyle = ref({
  top: '0px',
  left: '0px',
  width: '0px',
  height: '0px',
  opacity: 0,
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
      inputElStyle.value.opacity = 1
      inputEl.focus()
      inputNodeStyle.borderColor = '#409EFF'
    }
    container!.appendChild(inputNode)

    onMounted(() => {
      inputEl = document.getElementById('__canvue_input_dom')! as HTMLInputElement
    })

    const handleChange = (e: { target: HTMLInputElement }) => {
      if (e.target.value) {
        inputNode.text = e.target.value
        if (inputNodeStyle.color !== '#303133')
          inputNodeStyle.color = '#303133'
      }
      else {
        inputNode.text = props.placeholder ?? ''
        inputNodeStyle.color = '#A9ABB2'
      }
    }

    return () => h(
      'input',
      {
        id: '__canvue_input_dom',
        style: {
          position: 'fixed',
          top: inputElStyle.value.top,
          left: inputElStyle.value.left,
          width: inputElStyle.value.width,
          height: inputElStyle.value.height,
          opacity: inputElStyle.value.opacity,
        },
        onChange: (event: { target: HTMLInputElement }) => handleChange(event),
      },
    )
  },
})
