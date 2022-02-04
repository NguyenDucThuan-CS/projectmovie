import * as ActionType from './constants'

const initialState = {
    loading: false,
    data: null,
    error: null,
}


const theaterReducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionType.THEATER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state}
        case ActionType.THEATER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = state.error;
            return {...state}
        case ActionType.THEATER_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state}
        default:
            return {...state}        
    }
}

export default theaterReducer;