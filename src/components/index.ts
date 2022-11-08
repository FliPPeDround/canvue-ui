import canvasUi from './defaultElement/canvasUi'
import canvasEl from './defaultElement/canvasEl'

import canvasButton from './baseElement/button/button'
import canvasInput from './baseElement/input/input'

const canvasRect = canvasEl('Rect')
const canvasCircle = canvasEl('Circle')
const canvasRRect = canvasEl('RRect')
const canvasPath = canvasEl('Path')
const canvasImage = canvasEl('Image')
const canvasText = canvasEl('Text')

export {
  canvasUi,
  canvasRect,
  canvasCircle,
  canvasRRect,
  canvasPath,
  canvasImage,
  canvasText,
  canvasButton,
  canvasInput,
}

