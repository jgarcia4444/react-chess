import React from 'react';
import { useLocation } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

import Container from '../../shared/Container';

const Auth = () => {
    const location = useLocation();
    const authState = location.state !== undefined ? location.state.authState : "Login";


    
    return (
        <Container>
            <div className="">
                <PageTitle title={authState} />
            </div>
        </Container>
    )
}

export default Auth;