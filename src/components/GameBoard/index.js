import React from 'react';

import BoardCell from './BoardCell';

const GameBoard = () => {

    const generateBoardTiles = () => {
        let cells = [];
        let rowsCounter = 0;
        while (rowsCounter < 8) {
            let rowCellIndex = 0;
            while (rowCellIndex < 8) {
                let isEven = (rowsCounter + rowCellIndex) % 2 === 0;
                cells.push(<BoardCell isEven={isEven}/>)
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

export default GameBoard;