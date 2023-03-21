import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthNavButton = ({text, isPrimary}) => {

    const navigate = useNavigate();

    const configuredClassName = () => {
        return isPrimary === true ?
        "bg-blue-500 hover:bg-blue-600"
        :
        "bg-orange-500 hover:bg-orange-600"
    }

    const handleNavClick = () => {
        let authState;
        if (text === "Login") {
            authState = "Login"
        } else {
            authState="Sign Up";
        }
        navigate('/auth', {
            state: {
                authState,
            }
        })
    }

    return (
        <button
            onClick={handleNavClick}
            className={`border-transparent rounded py-1 text-white mt-2 ${configuredClassName()}`}
        >
            {text}
        </button>
    )
}

export default AuthNavButton;