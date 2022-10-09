import canvasUi from './canvasUi'
import canvasEl from './canvasEl'

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
}
