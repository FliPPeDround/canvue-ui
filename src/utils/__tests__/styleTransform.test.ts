import { describe, expect, it } from 'vitest'

import { styleTransform } from '../styleTransform'

describe('styleTransform', () => {
  it('backgroundColor to fill', () => {
    expect(styleTransform({ backgroundColor: 'red' })).toEqual({ fill: 'red' })
  })
})
