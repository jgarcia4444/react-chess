import React, {useState} from 'react';

import Container from '../../../shared/Container';
import AuthFormInput from '../../../components/Inputs/AuthFormInput';

const GetUsername = () => {

    const [username, setUsername] = useState("");
    
    let usernameInputInfo = {
        label: "Username",
        value: username,
        changeFunc: e => setUsername(e.target.value)
    }

    return (
        <Container>
            <div className="bg-white w-3/4 m-auto rounded p-2 text-left">
                <AuthFormInput inputInfo={usernameInputInfo} />
                <button className="w-full my-2 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">Save</button>
            </div>
        </Container>
    )
}

export default GetUsername;