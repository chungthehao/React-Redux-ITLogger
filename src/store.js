import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // Để config redux dev tool chạy dễ hơn 
import thunk from 'redux-thunk'

import rootReducer from './reducers' // combineReducers: Gộp các reducers lại thành root

const initialState = {}

// All middleware
const middleware = [thunk]

const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware) // add our middleware & whole dev tools functionality 
    )
)

export default store