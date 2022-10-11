import { describe, expect, it } from 'vitest'

import { tokenizer } from './index'

describe('tokenizer', () => {
  it('should get 4 tokenizer', async () => {
    expect(tokenizer('1')).toEqual([
      { top: 1 },
      { bottom: 1 },
      { left: 1 },
      { right: 1 },
    ])
  })
  it('should get 2 tokenizer', async () => {
    expect(tokenizer('1     2')).toEqual([
      { top: 1 },
      { bottom: 1 },
      { left: 2 },
      { right: 2 },
    ])
  })
  it('should get 1 tokenizer', async () => {
    expect(tokenizer('1 2 3 4')).toEqual([
      { top: 1 },
      { bottom: 3 },
      { left: 4 },
      { right: 2 },
    ])
  })
})

