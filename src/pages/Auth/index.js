import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import { decodeToken } from "react-jwt";

import PageTitle from '../../components/PageTitle';
import Container from '../../shared/Container';
import AuthForm from '../../components/Forms/AuthForm';
import OAuthButton from '../../components/Buttons/OauthButton';

const Auth = ({user}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const authState = location.state !== null ? location.state.authState : "Login";
    const [token, setToken] = useState('');

    const {userInfo, errors, generalError} = user;
    const {email, username} = userInfo;

    const configureIsLogin = () => {
        return authState === "Login" ? true : false;
    }

    const handleGoogleLoginSuccess = (res) => {
        const decodedToken = decodeToken(res.credential);
        console.log("Decoded Token", decodedToken);
    }

    const handleGoogleLoginError = (res) => {
        console.log("Google Login Failed");
    }

    useEffect(() => {
        if ((email !== "" && username !== "") && (errors.length === 0 && generalError === "")) {
            navigate('/game/start');
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
                {/* <OAuthButton isLogin={authState === "Login" ? true : false} isGoogleOAuth={true}/>
                <OAuthButton isLogin={authState === "Login" ? true : false} isGoogleOAuth={false}/> */}
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(
    mapStateToProps,
    null
)(Auth)