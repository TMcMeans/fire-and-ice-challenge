import { mapStateToProps, mapDispatchToProps } from './App'
import { App } from './App'

import React from 'react'
import { shallow } from 'enzyme'

import * as actions from '../../actions'
import { fetchHouses } from '../../thunks/fetchHouses'

describe('App', () => {
  jest.mock('../../thunks/fetchHouses')

  describe('mapStateToProps', () => {
    it('should return an error message', () => {
      const mockState = {
        houses: [],
        error: 'An error has occured',
        isLoading: false
      }

      const expected = {
        error: 'An error has occured',
        isLoading: false
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
    it('should return a boolean for isLoading', () => {
      const mockState = {
        houses: [],
        error: '',
        isLoading: true
      }

      const expected = {
        error: '',
        isLoading: true
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with fetchHouses thunk', () => {
      const wrapper = shallow(<App />)
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.addHouses([])

      const mappedProps = mapDispatchToProps(mockDispatch)
      const expected = fetchHouses('www.gameofthrones.com')
      expect(mappedProps).toHaveBeenCalledWith(expected)
    })
  })
})

