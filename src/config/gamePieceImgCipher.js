
import blackPawn from '../media/pieces/bPawn.svg';
import blackBishop from '../media/pieces/bBishop.svg';
import blackKnight from '../media/pieces/bKnight.svg';
import blackRook from '../media/pieces/bRook.svg';
import blackQueen from '../media/pieces/bQueen.svg';
import blackKing from '../media/pieces/bKing.svg';
import whitePawn from '../media/pieces/wPawn.svg'
import whiteBishop from '../media/pieces/wBishop.svg';
import whiteKnight from '../media/pieces/wKnight.svg';
import whiteRook from '../media/pieces/wRook.svg';
import whiteQueen from '../media/pieces/whiteQueen.svg';
import whiteKing from '../media/pieces/whiteKing.svg';

const gamePieceImgCipher = {
    'pawn': {
        black: blackPawn,
        white: whitePawn
    },
    'bishop': {
        black: blackBishop,
        white: whiteBishop
    },
    'knight': {
        black: blackKnight,
        white: whiteKnight
    },
    'rook': {
        black: blackRook,
        white: whiteRook
    },
    'queen': {
        black: blackQueen,
        white: whiteQueen,
    },
    'king': {
        black: blackKing,
        white: whiteKing,
    }
};

export default gamePieceImgCipher;