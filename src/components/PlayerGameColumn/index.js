import React from 'react';

const PlayerGameColumn = ({isPlayerOne}) => {

    const configureTextColor = () => {
        return isPlayerOne === true ?
        "text-blue-500"
        :
        "text-orange-500"
    }

    return (
        <div className="">
            <h3 className={`${configureTextColor()} text-2xl text-left underline font-bold`}>Player {isPlayerOne === true ? "1" : "2"}</h3>
            <ul className="text-left">
                <li className={`${configureTextColor()}`}>Pawns: 8</li>
                <li className={`${configureTextColor()}`}>Bishops: 2</li>
                <li className={`${configureTextColor()}`}>Knights: 2</li>
                <li className={`${configureTextColor()}`}>Rooks: 2</li>
                <li className={`${configureTextColor()}`}>Queen: 1</li>
                <li className={`${configureTextColor()}`}>King: 1</li>
            </ul>
        </div>
    )
}

export default PlayerGameColumn;