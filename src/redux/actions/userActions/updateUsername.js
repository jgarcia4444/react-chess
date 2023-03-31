
import Urls from '../../../config/Urls';
const {baseUrl} = Urls;

const updateUsername = userInfo => {
    let url = `${baseUrl}/users/update-username`;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            id: userInfo.id,
            updated_username: userInfo.updatedUsername
        })
    }
    return async dispatch => {
        dispatch({type: "UPDATING_USER"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {username} = data;
                    return dispatch({type: "USER_UPDATE_SUCCESS", username})
                } else {
                    let {error} = data;
                    let {message, errors} = error;
                    return dispatch({type: "USER_UPDATE_ERROR", message, errors});
                }
            })
    }
}

export default updateUsername;