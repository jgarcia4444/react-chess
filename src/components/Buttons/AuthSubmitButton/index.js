import React from 'react';

const AuthSubmitButton = ({isLogin}) => {

    return (
        <button>
            {isLogin === true ? "Login" : "Sign Up"}
        </button>
    )
}

export default AuthSubmitButton