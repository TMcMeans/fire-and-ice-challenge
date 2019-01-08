import { combineReducers } from 'redux'
import houseReducer from './houseReducer'
import loadingReducer from './loadingReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  houses: houseReducer,
  error: errorReducer,
  isLoading: loadingReducer
})

export default rootReducer;