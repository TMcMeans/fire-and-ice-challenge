import * as actions from '../actions'

describe('actions', () => {
  it('addHouses should have a type of ADD_HOUSES', () => {
    const mockHouses = [{ name: 'House Targaryen', words: 'Fire and Blood' }, { name: 'House Stark', words: 'Winter is Coming' }]
    const expectedAction = {
      type: 'ADD_HOUSES',
      houses: mockHouses
    }
    const result = actions.addHouses(mockHouses)
    expect(result).toEqual(expectedAction)
  })

  it('hasErrored should have a type of HAS_ERRORED', () => {
    const mockError = 'An error has occured'

    const expectedAction = {
      type: 'HAS_ERRORED',
      message: mockError
    }

    const result = actions.hasErrored(mockError)
    expect(result).toEqual(expectedAction)
  })

  it('isLoading should have a type of IS_LOADING', () => {

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = actions.isLoading(true)
    expect(result).toEqual(expectedAction)
  })

})