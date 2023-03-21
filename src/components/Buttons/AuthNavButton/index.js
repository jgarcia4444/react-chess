import React from 'react';

const AuthNavButton = ({text, isPrimary}) => {

    const configuredClassName = () => {
        return isPrimary === true ?
        "bg-blue-500 hover:bg-blue-600"
        :
        "bg-orange-500 hover:bg-orange-600"
    }

    return (
        <button
            className={`border-transparent rounded py-1 text-white mt-2 ${configuredClassName()}`}
        >
            {text}
        </button>
    )
}

export default AuthNavButton;