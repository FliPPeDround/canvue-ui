import type { Token } from '../types'

export const tokenizer = (margin: string): Token[] => {
  const tokens: Token[] = []
  const marginList = margin.split(' ').filter(Boolean)
  if (marginList.length === 1) {
    tokens.push({ top: parseFloat(marginList[0]) })
    tokens.push({ bottom: parseFloat(marginList[0]) })
    tokens.push({ left: parseFloat(marginList[0]) })
    tokens.push({ right: parseFloat(marginList[0]) })
  }
  else if (marginList.length === 2) {
    tokens.push({ top: parseFloat(marginList[0]) })
    tokens.push({ bottom: parseFloat(marginList[0]) })
    tokens.push({ left: parseFloat(marginList[1]) })
    tokens.push({ right: parseFloat(marginList[1]) })
  }
  else if (marginList.length === 4) {
    tokens.push({ top: parseFloat(marginList[0]) })
    tokens.push({ bottom: parseFloat(marginList[2]) })
    tokens.push({ left: parseFloat(marginList[3]) })
    tokens.push({ right: parseFloat(marginList[1]) })
  }
  else {
    throw new Error('Invalid margin')
  }
  return tokens
}
