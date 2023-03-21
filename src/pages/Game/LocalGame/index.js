import React from 'react';

import PlayerGameColumn from '../../../components/PlayerGameColumn';
import Container from '../../../shared/Container';
import GameBoard from '../../../components/GameBoard';

const LocalGame = () => {

    return (
        <Container>
            <div className="flex flex-row w-full justify-evenly">
                <PlayerGameColumn isPlayerOne={true} />
                <GameBoard />
                <PlayerGameColumn isPlayerOne={false} />
            </div>
        </Container>
    )
}

export default LocalGame;