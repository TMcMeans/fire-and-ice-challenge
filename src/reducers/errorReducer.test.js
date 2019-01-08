import errorReducer from './errorReducer'

describe('errorReducer', () => {
  it('should return default state', () => {
    const expected = ''
    const result = errorReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return a message', () => {
    const expected = 'An error has occured'

    const mockAction = {
      type: 'HAS_ERRORED',
      message: 'An error has occured'
    }

    const result = errorReducer('', mockAction)
    expect(result).toEqual(expected)
  })
})

