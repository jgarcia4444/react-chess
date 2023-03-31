import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const sendOauthInfoToBackend = (decodedToken) => {

    let url = `${baseUrl}/google-auth/callback`;
    let postBody = {
        provider: "google_oauth2",
        info: {
            email: decodedToken.email
        }
    }
    
    let options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(postBody),
    };

    return async dispatch => {
        dispatch({type: "LOGGING_IN"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {user_info} = data;
                    return dispatch({type: "USER_LOGIN_SUCCESS", userInfo: user_info});
                } else {
                    let {error} = data;
                    let {message, errors} = error;
                    return dispatch({type: "USER_LOGIN_ERROR", message, errors})
                }
            })
    }
}

export default sendOauthInfoToBackend;