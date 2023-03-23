import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import PageTitle from '../../components/PageTitle';
import Container from '../../shared/Container';
import AuthForm from '../../components/Forms/AuthForm';
import OAuthButton from '../../components/Buttons/OauthButton';

const Auth = ({user}) => {

    const location = useLocation();
    const navigate = useNavigate();
    const authState = location.state !== null ? location.state.authState : "Login";

    const {userInfo, errors, generalError} = user;
    const {email, username} = userInfo;

    const configureIsLogin = () => {
        return authState === "Login" ? true : false;
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
                <OAuthButton isLogin={authState === "Login" ? true : false} isGoogleOAuth={true}/>
                <OAuthButton isLogin={authState === "Login" ? true : false} isGoogleOAuth={false}/>
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