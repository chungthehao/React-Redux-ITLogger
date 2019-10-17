import {
    GET_TECHS, DELETE_TECH, ADD_TECH, SET_LOADING, TECHS_ERROR
} from './types'

// Get techs
export const getTechs = () => async dispatch => {
    setLoading()

    try {
        const res = await fetch('/techs')
        const data = await res.json()

        dispatch({ type: GET_TECHS, payload: data })
    } catch (err) {
        console.error(err.response.statusText)
        dispatch({ type: TECHS_ERROR, payload: err.response.statusText })
    }
}

// Add new tech
export const addTech = newTech => async dispatch => {
    
}

// Delete a tech
export const deleteTech = id => async dispatch => {
    
}

// Set 'loading' to true
export const setLoading = () => ({ type: SET_LOADING })