import React from 'react';
import { connect } from 'react-redux';

import BoardCell from './BoardCell';

const GameBoard = ({isLocal, game}) => {

    // Need a way to propogate the cells with the inital game pieces.

    const generateBoardTiles = () => {
        let cells = [];
        let rowsCounter = 0;
        while (rowsCounter < 8) {
            let rowCellIndex = 0;
            while (rowCellIndex < 8) {
                let isEven = (rowsCounter + rowCellIndex) % 2 === 0;
                cells.push(<BoardCell x={rowCellIndex} y={rowsCounter} isEven={isEven}/>)
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