import React, {useState} from 'react';

import AuthFormInput from '../../Inputs/AuthFormInput';

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

    return (
        <div>
            {renderInputs()}
        </div>
    )

}

export default AuthForm;