import React from 'react'
import { mapStateToProps } from './CardContainer'

describe('mapStateToProps', () => {
  it('should return an array of houses', () => {
    const mockHouses = [{ name: 'House Targaryen', words: 'Fire and Blood' }, { name: 'House Stark', words: 'Winter is Coming' }]

    const mockState = {
      houses: mockHouses,
      error: '',
      isLoading: false
    }

    const expected = {
      houses: mockHouses
    }

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})