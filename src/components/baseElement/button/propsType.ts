import type { ExtractPropTypes } from 'vue-demi'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  '',
] as const

export const buttonProps = {
  styles: {
    type: Object,
  },
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonType = ButtonProps['type']
