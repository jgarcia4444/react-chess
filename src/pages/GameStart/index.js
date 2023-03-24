import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {FiLoader} from 'react-icons/fi';

import Container from '../../shared/Container';
import PageTitle from '../../components/PageTitle';

import logout from '../../redux/actions/userActions/logout';

const GameStart = ({logout, user}) => {

    const {userInfo, loading} = user;
    const {email} = userInfo;

    const navigate = useNavigate();

    const navToLocalGame = () => {
        navigate('/game/local');
    }

    const navToLeaderboard = () => {
        navigate('/leaderboard');
    }

    useEffect(() => {
        console.log("Here is the value of email from the game start page", email);
        if (email === "") {
            navigate("/");
        }
    },[email])

    return (
        <Container>
            <div className="w-3/4 text-left m-auto">
                <div className="flex flex-row justify-between">
                    <PageTitle title={"Start Game"} />
                    <button onClick={logout} className="text-white flex flex-row  justify-center w-1/4 mb-1 rounded bg-orange-500 font-bold hover:bg-orange-600 text-center">{loading === true ? <FiLoader color={"#fff"} size={22} className="animate-spin self-center" /> : <p className="self-center">Logout</p>}</button>
                </div>
                <div className="p-2 w-full bg-white rounded flex flex-col shadow-lg">
                    <button onClick={navToLocalGame} className="rounded w-full py-3 font-bold text-white bg-blue-500 mt-4 mb-2 hover:bg-blue-600">Local Game</button>
                    <button className="rounded w-full py-3 font-bold text-white bg-orange-500 mt-2 mb-4 hover:bg-orange-600 ">Multiplayer Game</button>
                </div>
                <button onClick={navToLeaderboard} className="font-bold border-2 border-solid border-blue-500 text-blue-500 w-full rounded py-3 mt-4 hover:bg-blue-500 hover:text-white hover:shadow-lg">View Leaderboard</button>
            </div>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameStart);