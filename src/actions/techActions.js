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

// Add a new technician to server
export const addTech = newTech => async dispatch => {
    setLoading()

    try {
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(newTech),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()

        dispatch({ type: ADD_TECH, payload: data })
    } catch (err) {
        console.error(err.response.statusText)
        dispatch({ type: TECHS_ERROR, payload: err.response.statusText })
    }
}

// Delete a tech
export const deleteTech = id => async dispatch => {
    
}

// Set 'loading' to true
export const setLoading = () => ({ type: SET_LOADING })