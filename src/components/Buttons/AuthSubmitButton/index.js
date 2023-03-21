import React from 'react';

const AuthSubmitButton = ({isLogin, authSubmitClick}) => {

    return (
        <button onClick={authSubmitClick} className="w-full my-2 bg-blue-500 py-2 rounded text-white font-bold hover:bg-blue-600">
            {isLogin === true ? "Login" : "Sign Up"}
        </button>
    )
}

export default AuthSubmitButton