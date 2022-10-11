import type { StyleProps } from '@canvas-ui/core'

export type MarginStyle = StyleProps & {margin: string}

export interface Token {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export interface Transformer {
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}
