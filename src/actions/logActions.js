import {
    GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG
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
export const getLogs = () => async (dispatch, getState) => { // getState để lấy các state hiện tại (nếu cần)
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

// Add a new log
export const addLog = log => async dispatch => {
    setLoading()

    try {
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()

        dispatch({ type: ADD_LOG, payload: data })
    } catch (err) {
        console.error(err.response.data)
        dispatch({ type: LOGS_ERROR, payload: err.response.data })
    }        
}

// Delete log from server
export const deleteLog = id => async (dispatch, getState) => { // getState để lấy các state hiện tại (nếu cần)
    setLoading()

    try {
        await fetch('/logs/' + id, { method: 'DELETE' })

        dispatch({ type: DELETE_LOG, payload: id })
    } catch (err) {
        console.error(err.response.data)
        dispatch({ type: LOGS_ERROR, payload: err.response.data })
    }        
}

// Set 'loading' to true
export const setLoading = () => ({ type: SET_LOADING })
