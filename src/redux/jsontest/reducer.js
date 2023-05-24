import { GET_JSON_REQUEST, GET_JSON_REQUEST_FAIL, GET_JSON_REQUEST_SUCCESS } from './action';

const initialState = {
    loading: false,
    data: []
};

const jsonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JSON_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_JSON_REQUEST_FAIL:
            console.log(action)
            return {
                ...state,
                loading: false
            };
        case GET_JSON_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
};

export default jsonReducer;