import type { ExtractPropTypes } from 'vue-demi'

export const buttonProps = {
  styles: {
    type: Object,
  },
  color: {
    type: String,
    default: '',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
