import React, {useState} from 'react';

import PlayerGameColumn from '../../../components/PlayerGameColumn';
import Container from '../../../shared/Container';
import GameBoard from '../../../components/GameBoard';

const LocalGame = () => {

    const [playerTurnIndex, setPlayerTurnIndex] = useState(0);
    const players = ["Player 1", "Player 2"];

    const showPlayersTurn = () => {
        return `${players[playerTurnIndex]}'s Turn `
    }


    return (
        <Container>
            <div className="w-full mb-12 font-bold text-blue-500 text-3xl">
                {showPlayersTurn()}
            </div>
            <div className="flex flex-row w-full justify-evenly">
                <PlayerGameColumn isPlayerOne={true} />
                <GameBoard isLocal={true} />
                <PlayerGameColumn isPlayerOne={false} />
            </div>
        </Container>
    )
}

export default LocalGame;