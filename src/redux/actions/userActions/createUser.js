import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const createUser = userInfo => {
    console.log("create user action triggered!");
    let url = `${baseUrl}/users`;
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_info: userInfo}),
    }
    return async dispatch => {
        dispatch({type: "CREATING_USER"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log("Here is the data received from create user action", data);
                let {success} = data;
                if (success === true) {
                    let userInfo = data.user_info;
                    return dispatch({type: "USER_CREATION_SUCCESS", userInfo});
                } else {
                    let {error} = data;
                    let {message} = error;
                    if (error.errors !== undefined) {
                        let {errors} = error;
                        return dispatch({type: "USER_CREATION_ERROR", message, errors});
                    } else {
                        return dispatch({type: "USER_CREATION_ERROR", message});
                    }
                }
            })
    }
}

export default createUser;