import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthFormInput from '../../Inputs/AuthFormInput';
import AuthSubmitButton from '../../Buttons/AuthSubmitButton';

import createUser from '../../../redux/actions/userActions/createUser';

const AuthForm = ({isLogin, createUser}) => {

    const navigate = useNavigate();

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
        changeFunc: e => setEmail(e.target.value),
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

    const navToOtherAuth = () => {
        let authState;
        if (isLogin === true) {
            authState = "Sign Up";
        } else {
            authState = "Login";
        }
        navigate('/auth', {
            state: {
                authState,
            }
        })
    }

    const otherAuthText = () => {
        let  firstWord = isLogin === true ? "Don't" : "Already";

        let authNavText = isLogin === true ? "Sign Up" : "Login"
    
        return (
            <div className="">
                <p>{firstWord} have an account? <span   className="text-blue-500 hover:cursor-pointer hover:text-blue-600"
                onClick={navToOtherAuth}
                >{authNavText}</span></p>
            </div>
        )
    }

    const handleAuthClick = () => {
        if (isLogin === true) {
            // check for present values
        } else {
            let userInfo = {
                email,
                username,
                password
            }
            createUser(userInfo);
            // check for present values
        }
    }

    return (
        <div className="flex flex-col bg-white w-full m-auto rounded p-2">
            {renderInputs()}
            <AuthSubmitButton authSubmitClick={handleAuthClick} isLogin={isLogin} />
            {otherAuthText()}
        </div>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        createUser: userInfo => dispatch(createUser(userInfo)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AuthForm);