import React from 'react';
import { useLocation } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

import Container from '../../shared/Container';
import AuthForm from '../../components/Forms/AuthForm';

const Auth = () => {
    const location = useLocation();
    const authState = location.state !== undefined ? location.state.authState : "Login";

    const configureIsLogin = () => {
        return authState === "Login" ? true : false;
    }
    
    return (
        <Container>
            <div className="">
                <PageTitle title={authState} />
                <AuthForm isLogin={configureIsLogin()} />
            </div>
        </Container>
    )
}

export default Auth;