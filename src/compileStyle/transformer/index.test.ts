import { describe, expect, it } from 'vitest'

import { transformer } from './index'

describe('transformer', () => {
  it('should get 4 transformer', () => {
    expect(transformer([
      { top: 1 },
      { bottom: 1 },
      { left: 1 },
      { right: 1 },
    ])).toEqual({
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 1,
      marginRight: 1,
    })
  })
  it('should get 2 transformer', () => {
    expect(transformer([
      { top: 1 },
      { bottom: 1 },
      { left: 2 },
      { right: 2 },
    ])).toEqual({
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 2,
      marginRight: 2,
    })
  })
  it('should get 1 transformer', () => {
    expect(transformer([
      { top: 1 },
      { bottom: 3 },
      { left: 4 },
      { right: 2 },
    ])).toEqual({
      marginTop: 1,
      marginBottom: 3,
      marginLeft: 4,
      marginRight: 2,
    })
  })
})
