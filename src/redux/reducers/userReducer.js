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
        case "USER_LOGOUT":
            return {
                ...initialState
            }
        case "LOGGING_OUT":
            return {
                ...state,
                loading: true,
            }
        case 'persist/REHYDRATE':
            if (action.payload !== undefined) {
                if (action.payload.user !== undefined) {
                    let {user} = action.payload
                    return {
                        ...state,
                        ...user,
                        userInfo: {
                            ...state.userInfo,
                            ...user.userInfo,
                        }
                    }
                } else {
                    return {
                        ...state,
                    }    
                }
            } else {
                return {
                    ...state,
                }
            }
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    ...action.userInfo
                },
                loading: false,
            }
        case "USER_LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                generalError: action.message,
                errors: action.errors
            }
        case "LOGGING_IN":
            return {
                ...state,
                loading: true,
                errors: [],
                generalError: ""   
            }
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