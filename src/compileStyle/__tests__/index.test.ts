import { describe, expect, it } from 'vitest'

import { compileStyle, transformerMargin } from '../index'

describe('compileStyle', () => {
  it('should compile style', async () => {
    const result = compileStyle('1')
    expect(result).toEqual({
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 1,
      marginRight: 1,
    })
  })
})

describe('transformerMargin', () => {
  it('should transformer style', () => {
    const result = transformerMargin({ margin: '1' })
    expect(result).toEqual({
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 1,
      marginRight: 1,
    })
  })
  it('marginTop toEqual 2', () => {
    const result = transformerMargin({ margin: '1', marginTop: 2 })
    expect(result).toEqual({
      marginTop: 2,
      marginBottom: 1,
      marginLeft: 1,
      marginRight: 1,
    })
  })
  it ('should transformer and out allStyle', () => {
    const result = transformerMargin({ margin: '1', color: 'red' })
    expect(result).toEqual({
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 1,
      marginRight: 1,
      color: 'red',
    })
  })
})

