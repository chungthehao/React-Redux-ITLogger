import {
    GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS
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
        console.error(err.response.statusText)
        dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
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
        console.error(err.response.statusText)
        dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
    }        
}

// Delete log from server
export const deleteLog = id => async (dispatch, getState) => { // getState để lấy các state hiện tại (nếu cần)
    setLoading()

    try {
        await fetch('/logs/' + id, { method: 'DELETE' })

        dispatch({ type: DELETE_LOG, payload: id })
    } catch (err) {
        console.error(err.response.statusText)
        dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
    }        
}

// Update log
export const updateLog = ({ id, message, attention, tech }) => async dispatch => {
    setLoading()

    try {
        const res = await fetch(`/logs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id, message, attention, tech, date: new Date() }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()

        dispatch({ type: UPDATE_LOG, payload: data })
    } catch (err) {
        console.error(err.response.statusText)
        dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
    }
}

// Search logs
export const searchLogs = text => async dispatch => {
    setLoading()

    try {
        const res = await fetch(`/logs?q=${text}`)
        const data = await res.json()

        dispatch({ type: SEARCH_LOGS, payload: data })
    } catch (err) {
        console.error(err.response.statusText)
        dispatch({ type: LOGS_ERROR, payload: err.response.statusText })
    }
}

// Set current log
export const setCurrent = currentLog => ({ type: SET_CURRENT, payload: currentLog })

// Clear current log
export const clearCurrent = () => ({ type: CLEAR_CURRENT })

// Set 'loading' to true
export const setLoading = () => ({ type: SET_LOADING })
