import axios from "axios";

export const loginCall = async (credentials, dispatch, callback) => {
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post("/auth/login", credentials)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        callback();
    } catch(err) {
        dispatch({type: "LOGIN_FAILURE", payload: err})
    }
}