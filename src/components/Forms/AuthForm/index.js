import React, {useState} from 'react';

import AuthFormInput from '../../Inputs/AuthFormInput';
import AuthSubmitButton from '../../Buttons/AuthSubmitButton';

const AuthForm = ({isLogin}) => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let usernameInput = {
        label: "Username",
        value: username,
        changeFunc: e => setUsername(e.target.value)
    }

    let emailInput = {
        label: "Email",
        value: email,
        changeFunc: e => setEmail(e.target.val),
    }

    let passwordInput = {
        label: "Password",
        value: password,
        changeFunc: e => setPassword(e.target.value)
    }

    let confirmPasswordInput = {
        label: "Confirm Password",
        value: confirmPassword,
        changeFunc: e => setConfirmPassword(e.target.value)
    }

    let formInputs = [usernameInput, emailInput, passwordInput, confirmPasswordInput];

    const renderInputs = () => {
        return isLogin === true ?
            formInputs.slice(1, 3).map(inputInfo => <AuthFormInput inputInfo={inputInfo} />)
            :
            formInputs.map(inputInfo => <AuthFormInput inputInfo={inputInfo} />)
    }

    const otherAuthText = () => {
        let  firstWord = isLogin === true ? "Don't" : "Already";

        let authNavText = isLogin === true ? "Sign Up" : "Login"
    
        return (
            <div className="">
                <p>{firstWord} have an account? <span className="text-blue-500 hover:cursor-pointer hover:text-blue-600">{authNavText}</span></p>
            </div>
        )
    }

    return (
        <div className="flex flex-col bg-white w-full m-auto rounded p-2">
            {renderInputs()}
            <AuthSubmitButton isLogin={isLogin} />
            {otherAuthText()}
        </div>
    )

}

export default AuthForm;