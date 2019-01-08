import { addHouses, hasErrored, isLoading } from '../actions'

export const fetchHouses = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const houses = await response.json()
      console.log(houses)
      dispatch(addHouses(houses))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

