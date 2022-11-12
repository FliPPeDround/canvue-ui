import cvUi from './defaultElement/canvueUi'
import cvEl from './defaultElement/canvueEl'

import cvButton from './baseElement/button/button'
import cvInput from './baseElement/input/input'

const cvRect = cvEl('Rect')
const cvCircle = cvEl('Circle')
const cvRRect = cvEl('RRect')
const cvPath = cvEl('Path')
const cvImage = cvEl('Image')
const cvText = cvEl('Text')

export {
  cvUi,
  cvRect,
  cvCircle,
  cvRRect,
  cvPath,
  cvImage,
  cvText,
  cvButton,
  cvInput,
}

