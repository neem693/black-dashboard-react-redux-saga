
export const GET_JSON_REQUEST = 'GET_JSON_REQUEST';
export const GET_JSON_REQUEST_SUCCESS = 'GET_JSON_REQUEST_SUCESS'
export const GET_JSON_REQUEST_FAIL = "GET_JSON_REQUEST_FAIL"

export const getJsonRequest = data => ({
    type: GET_JSON_REQUEST,
    payload: data
});

export const getJsonRequestSuccess = data => ({
    type: GET_JSON_REQUEST_SUCCESS,
    payload: data
});

export const getJsonRequestFail = data => ({
    type: GET_JSON_REQUEST_FAIL,
    payload: data
});