import {
    GET_LOGS, SET_LOADING, LOGS_ERROR
} from './types'

// export const getLogs = () => {
//     return async (dispatch, getState) => {
//         setLoading()

//         try {
//             const res = await fetch('/logs')
//             const data = await res.json()

//             dispatch({ type: GET_LOGS, payload: data })
//         } catch (err) {
//             console.error(err)
//         }        
//     }
// }

// Get logs from server
export const getLogs = () => async (dispatch, getState) => {
    setLoading()

    try {
        const res = await fetch('/logs')
        const data = await res.json()

        dispatch({ type: GET_LOGS, payload: data })
    } catch (err) {
        console.error(err.response.data)
        dispatch({ type: LOGS_ERROR, payload: err.response.data })
    }        
}


// Set 'loading' to true
export const setLoading = () => ({ type: SET_LOADING })
