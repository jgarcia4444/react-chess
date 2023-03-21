import React from 'react';

const AuthFormInput = ({inputInfo}) => {

    const {label, value, changeFunc} = inputInfo;

    return (
        <div>
            {label}
        </div>
    )
}

export default AuthFormInput;