
const logout = () => {
    return async dispatch => {
        dispatch({type: "LOGGING_OUT"});
        setTimeout(() => {
            return dispatch({type: "USER_LOGOUT"})
        }, 1000);
    }
}

export default logout;