import {
    GET_TECHS, DELETE_TECH, ADD_TECH, SET_LOADING, TECHS_ERROR
} from '../actions/types'

const initialState = {
    techs: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(t => t.id !== action.payload.id),
                loading: false
            }
        
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        
        case TECHS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        
        default:
            return state
    }
}