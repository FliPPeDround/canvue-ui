// import type { ElementType } from '@canvas-ui/core'
import canvasUi from './defaultElement/canvasUi'
import canvasEl from './defaultElement/canvasEl'
import canvasButton from './baseElement/button'

const canvasRect = canvasEl('Rect')
const canvasCircle = canvasEl('Circle')
const canvasRRect = canvasEl('RRect')
const canvasPath = canvasEl('Path')
const canvasImage = canvasEl('Image')
const canvasText = canvasEl('Text')

// interface CanvasComponents {
//   Rect: typeof canvasEl
//   Circle: typeof canvasEl
//   RRect: typeof canvasEl
//   Path: typeof canvasEl
//   Image: typeof canvasEl
//   Text: typeof canvasEl
//   View: typeof canvasEl
//   Flex: typeof canvasEl
//   Chunk: typeof canvasEl
//   ScrollView: typeof canvasEl
//   Canvas: typeof canvasEl
// }

// const defaultElementList: ElementType[] = ['View', 'Chunk', 'Flex', 'Rect', 'RRect', 'Circle', 'Path', 'ScrollView', 'Text', 'Image']

// const defaultElement: CanvasComponents[] = []

// defaultElementList.forEach((item) => {
//   defaultElement.push(
//     { canvasEl(item) })
// })

// export {
//   ...defaultElement,
//   canvasUi,
// }

export {
  canvasUi,
  canvasRect,
  canvasCircle,
  canvasRRect,
  canvasPath,
  canvasImage,
  canvasText,
  canvasButton,
}

