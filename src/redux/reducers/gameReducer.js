
const generatePieces = () => {
    let i = 0
    let piecesArray = []
    while (i < 16) {
        let piece = {
            type: "",
            id: 0,
        }
        if (i < 8) {
            piece.type = "pawn";
        } else if (i >= 8 && i < 10) {
            piece.type = "bishop";
        } else if (i >= 10 && i < 12) {
            piece.type = "knight";
        } else if (i >= 12 && i < 14) {
            piece.type = "rook";
        } else if (i === 14) {
            piece.type = "queen"
        } else {
            piece.type = "king"
        }
        piece.id = i;
        piecesArray.push(piece);
        i += 1;
    }
}

const initialState = {
    turnsCounter: 0,
    player1Pieces: generatePieces(),
    player2Pieces: generatePieces(),
    offTheBoardPieces1: [],
    offTheBoardPieces2: [],
}

const gameReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state,
            }
    }
}

export default gameReducer;