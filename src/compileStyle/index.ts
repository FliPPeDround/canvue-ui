import type { StyleProps } from '@canvas-ui/core'
import { tokenizer } from './tokenizer'
import { transformer } from './transformer'
import type { MarginStyle } from './types'

const compileStyle = (margin: string) => {
  const tokens = tokenizer(margin)
  const result = transformer(tokens)
  return result
}

const transformerMargin = (style: MarginStyle): StyleProps => {
  const { margin, ...rest } = style
  if (!margin)
    return rest
  const result = compileStyle(margin)
  return {
    ...result,
    ...rest,
  }
}

export {
  transformerMargin,
  compileStyle,
}
