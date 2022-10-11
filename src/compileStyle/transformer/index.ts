import type { Token, Transformer } from '../types'

export const transformer = (tokens: Token[]): Transformer => {
  const result: Transformer = {}
  tokens.forEach((token) => {
    if (token.top !== undefined)
      result.marginTop = token.top

    if (token.bottom !== undefined)
      result.marginBottom = token.bottom

    if (token.left !== undefined)
      result.marginLeft = token.left

    if (token.right !== undefined)
      result.marginRight = token.right
  })
  return result
}
