import React from 'react';

import Container from '../../shared/Container';
import PageTitle from '../../components/PageTitle';

const GameStart = () => {

    return (
        <Container>
            <div className="w-3/4 text-left m-auto">
                <PageTitle title={"Start Game"} />
                <div className="p-2 w-full bg-white rounded flex flex-col shadow-lg">
                    <button className="rounded w-full py-3 font-bold text-white bg-blue-500 mt-4 mb-2 hover:bg-blue-600">Local Game</button>
                    <button className="rounded w-full py-3 font-bold text-white bg-orange-500 mt-2 mb-4 hover:bg-orange-600 ">Multiplayer Game</button>
                </div>
                <button className="font-bold border-2 border-solid border-blue-500 text-blue-500 w-full rounded py-3 mt-4 hover:bg-blue-500 hover:text-white hover:shadow-lg">View Leaderboard</button>
            </div>
        </Container>
    )
}

export default GameStart;