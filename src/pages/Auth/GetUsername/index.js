import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Container from '../../../shared/Container';
import AuthFormInput from '../../../components/Inputs/AuthFormInput';
import updateUsername from '../../../redux/actions/userActions/updateUsername';

const GetUsername = ({user, updateUsername}) => {

    const [newUsername, setNewUsername] = useState("");

    const {userInfo, loading} = user;
    const {username, id} = userInfo;
    const navigate = useNavigate();
    
    let usernameInputInfo = {
        label: "Username",
        value: newUsername,
        changeFunc: e => setNewUsername(e.target.value)
    }

    const handleSaveClick = () => {
        if (newUsername !== username) {
            let userInfo = {
                id,
                updatedUsername: newUsername
            }
            updateUsername(userInfo);
        }
    }

    useEffect(() => {
        if (username === newUsername) {
            navigate('/game/start');
        }
    }, [username])

    return (
        <Container>
            <div className="bg-white w-3/4 m-auto rounded p-2 text-left">
                <AuthFormInput inputInfo={usernameInputInfo} />
                <button onClick={handleSaveClick} className="w-full my-2 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">{loading === true ? <FiLoader /> : "Save"}</button>
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
        updateUsername: userInfo => dispatch(updateUsername(userInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(GetUsername);