import loadingReducer from './loadingReducer'

describe('loadingReducer', () => {
  it('should return default state', () => {
    const expected = false
    const result = loadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return a boolean state of true', () => {
    const expected = true
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = loadingReducer(false, mockAction)
    expect(result).toEqual(expected)

  })
})