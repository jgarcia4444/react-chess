import React, {useState} from 'react'
import gamePieceImgCipher from '../../../config/gamePieceImgCipher';

const GamePiece = ({pieceInfo, isPlayerOne}) => {

     

    const {type} = pieceInfo;

    const gamePieceImg = () => {
        let pieceImgObject = gamePieceImgCipher[type];
        if (isPlayerOne === true) {
            return pieceImgObject.black;
        } else {
            return pieceImgObject.white;
        }
    }

    return (
        <img className="chess-game-piece" src={gamePieceImg()} alt="Chess Piece" />
    )
};

export default GamePiece;