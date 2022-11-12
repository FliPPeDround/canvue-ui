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
  color: {
    type: String,
    default: '',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
