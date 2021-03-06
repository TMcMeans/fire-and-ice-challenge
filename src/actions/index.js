export const addHouses = (houses) => ({
  type: 'ADD_HOUSES',
  houses
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
})