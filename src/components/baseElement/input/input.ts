import { createElement } from '@canvas-ui/core'
import { defineComponent } from 'vue-demi'
import { inputEl, useRootCanvas, useSetInputElement } from '@composables'
import { InputStyle } from './style'
import { getPositionByNode } from './../../../utils'
import './input.css'

export default defineComponent({
  name: 'CanvasButton',
  props: {
    placeholder: String,
  },
  emits: ['click'],
  setup(props) {
    const container = useRootCanvas('input')

    const inputNode = createElement('Text')
    const inputNodeStyle = inputNode.style
    Object.assign(inputNodeStyle, InputStyle)
    inputNode.text = props.placeholder ?? ''

    inputNode.onPointerDown = () => {
      const position = getPositionByNode(inputNode)
      useSetInputElement()
      inputEl.value!.style.position = 'fixed'
      inputEl.value!.style.top = position.top
      inputEl.value!.style.left = position.left
      inputEl.value!.style.width = position.width
      inputEl.value!.style.height = position.height
      inputEl.value!.focus()
      inputEl.value!.placeholder = props.placeholder === inputNode.text ? props.placeholder : ''
      inputEl.value!.value = props.placeholder === inputNode.text ? '' : inputNode.text
      inputEl.value!.onchange = (e: { target: any }) => {
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
    }

    container!.appendChild(inputNode)

    return () => null
  },
})
