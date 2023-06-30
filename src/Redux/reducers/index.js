import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { loadingReducer } from './loadingReducer'

export default combineReducers({
    usersReducer,
    loadingReducer
})
