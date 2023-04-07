import React from 'react';
import { connect } from 'react-redux';

import BoardCell from './BoardCell';

const GameBoard = ({isLocal, game}) => {

    const {player1Pieces, player2Pieces} = game;

    const configureBackRow = (x, playerOne) => {
        let playerPieces;
        if (playerOne === true) {
            playerPieces = player1Pieces;
        } else {
            playerPieces = player2Pieces;
        }
        switch(x) {
            case 0:
                
        }
    }

    const configureFrontRow = (x, playerOne) => {

    }

    const configureGamePiece = (position) => {
        let {x, y} = position
        if (y < 2) {
            if (y === 0) {
                configureBackRow(x, false);
            } else {
                configureFrontRow(x, false);
            }
        } else if (y > 5) {

        } else {
            return "";
        }
    }

    const generateBoardTiles = () => {
        let cells = [];
        let rowsCounter = 0;
        while (rowsCounter < 8) {
            let rowCellIndex = 0;
            while (rowCellIndex < 8) {
                let isEven = (rowsCounter + rowCellIndex) % 2 === 0;
                let position = {
                    x: rowCellIndex,
                    y: rowsCounter
                }
                let gamePiece = configureGamePiece(position);
                cells.push(<BoardCell gamePiece={gamePiece} position={position} isEven={isEven}/>)
                rowCellIndex += 1;
            }
            rowsCounter += 1;
        }
        return cells;
    }



    return (
        <div className="max-w-md h-auto flex flex-row flex-wrap">
            {generateBoardTiles()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        game: state.game,
    }
}

export default connect(
    mapStateToProps,
    null
)(GameBoard);