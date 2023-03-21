import React from 'react';
import { useLocation } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

import Container from '../../shared/Container';
import AuthForm from '../../components/Forms/AuthForm';
import OAuthButton from '../../components/Buttons/OauthButton';

const Auth = () => {
    const location = useLocation();
    const authState = location.state !== null ? location.state.authState : "Login";

    const configureIsLogin = () => {
        return authState === "Login" ? true : false;
    }
    
    return (
        <Container>
            <div className=" w-3/4 text-left m-auto">
                <PageTitle title={authState} />
                <AuthForm isLogin={configureIsLogin()} />
                <OAuthButton isLogin={authState === "Login" ? true : false} isGoogleOAuth={true}/>
                <OAuthButton isLogin={authState === "Login" ? true : false} isGoogleOAuth={false}/>
            </div>
        </Container>
    )
}

export default Auth;