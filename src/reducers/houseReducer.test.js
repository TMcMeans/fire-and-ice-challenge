import houseReducer from './houseReducer'

describe('houseReducer', () => {
  it('should return default state', () => {
    const expected = []
    const result = houseReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should return an array of houses', () => {
    const mockExpectedHouses = [{ name: 'House Targaryen', words: 'Fire and Blood' }, { name: 'House Stark', words: 'Winter is Coming' }]

    const mockAction = {
      type: 'ADD_HOUSES',
      houses: mockExpectedHouses
    }

    const result = houseReducer([], mockAction)
    expect(result).toEqual(mockExpectedHouses)
  })
})