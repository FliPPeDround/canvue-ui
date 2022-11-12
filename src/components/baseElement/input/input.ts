import { createElement } from '@canvas-ui/core'
import { defineComponent, h, onMounted, ref } from 'vue-demi'
import { useRootCanvas } from '@composables'
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
    const container = useRootCanvas('input')

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
      inputNodeStyle.borderColor = '#409EFF'
      inputEl.placeholder = props.placeholder === inputNode.text ? props.placeholder : ''
      inputEl.value = props.placeholder === inputNode.text ? '' : inputNode.text
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
        },
        onChange: (event: { target: HTMLInputElement }) => handleChange(event),
      },
    )
  },
})
