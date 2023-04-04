import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import { decodeToken } from "react-jwt";

import PageTitle from '../../components/PageTitle';
import Container from '../../shared/Container';
import AuthForm from '../../components/Forms/AuthForm';

import sendOauthInfoToBackend from '../../redux/actions/userActions/sendOauthInfoToBackend';

const Auth = ({user, sendOauthInfoToBackend}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const authState = location.state !== null ? location.state.authState : "Login";

    const {userInfo, errors, generalError} = user;
    const {email, username} = userInfo;

    const [defaultUsername, setDefaultUsername] = useState('');

    const configureIsLogin = () => {
        return authState === "Login" ? true : false;
    }

    const handleGoogleLoginSuccess = (res) => {
        const decodedToken = decodeToken(res.credential);
        sendOauthInfoToBackend(decodedToken);
        let name = decodedToken.name;
        setDefaultUsername(name.toLowerCase().split(' ').join(''));
    }

    const handleGoogleLoginError = (res) => {
        console.log("Google Login Failed");
    }

    useEffect(() => {
        console.log(`Email: ${email}, Username: ${username}`);
        if ((email !== "" && username !== "") && (errors.length === 0 && generalError === "")) {
            if (username === defaultUsername) {
                navigate('/auth/get-username');
            } else {
                navigate('/game/start');
            }
        }
    }, [email]);
    
    return (
        <Container>
            <div className=" w-3/4 text-left m-auto">
                <PageTitle title={authState} />
                <AuthForm isLogin={configureIsLogin()} />
                <div className="mt-2">
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={handleGoogleLoginError} 
                        theme='outline'
                        size='medium'
                        text={authState === 'Login' ? "signin_with" : "signup_with"}
                        shape='rectangular'
                        logo_alignment='left'
                        ux_mode='popup'
                        login_uri='http://localhost:3000/google_auth/callback'
                        scope="email"
                    />
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendOauthInfoToBackend: tokenInfo => dispatch(sendOauthInfoToBackend(tokenInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Auth)