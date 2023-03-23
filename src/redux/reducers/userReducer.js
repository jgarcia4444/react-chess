const initialState = {
    userInfo: {
        username: "",
        email: "",
        id: "",
    },
    errors: [],
    generalError: "",
    loading: false
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case "USER_CREATION_ERROR":
            let signUpErrors = action.errors !== undefined ? action.errors : [];
            return {
                ...state,
                loading: false,
                errors: signUpErrors,
                generalError: action.message,
            }
        case "USER_CREATION_SUCCESS":
            return {
                ...state,
                userInfo: {
                    ...action.userInfo
                },
                loading: false,
                generalError: "",
                errors: []
            }
        case "CREATING_USER":
            return {
                ...state,
                loading: true,
            }
        default: 
            return {
                ...initialState,
            }
    }
}

export default userReducer;