import type { RenderCanvas } from '@canvas-ui/core'
import { inject } from 'vue-demi'

export const useRootCanvas = (el: string) => {
  const container = inject<RenderCanvas>('container')
  if (!container)
    throw new Error(`<cv-${el}> must be a child of <cv-ui>`)
  return container
}
