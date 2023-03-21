import React from 'react';

const AuthFormInput = ({inputInfo}) => {

    const {label, value, changeFunc} = inputInfo;

    const configureInputType = () => {
        let inputType;
        if (label === "Email") {
            inputType = "email"
        } else if (label === "Username") {
            inputType = "text";
        } else {
            inputType = "password";
        }
        return inputType;
    }

    return (
        <div className="flex flex-col w-full">
            <label className="text-blue-500 font-bold font-sans">{label}</label>
            <input type={configureInputType()} className="text-blue-500 w-full rounded border-2 p-1 border-solid border-blue-500 " value={value} placeholder={label} onChange={changeFunc} />
        </div>
    )
}

export default AuthFormInput;