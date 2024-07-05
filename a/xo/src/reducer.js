import { MAKE_MOVE, RESET_GAME } from "./actions";
import { checkWinner } from "./Game/checkwinner";
export const initialState = {
  board: Array(9).fill(""),
  xIsNext: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      const { board, xIsNext } = state;
      const { index } = action;

      const newBoard = board.slice();
      if (newBoard[index] || checkWinner(newBoard)) return state; 
      newBoard[index] = xIsNext ? "X" : "O";

      return {
        ...state,
        board: newBoard,
        xIsNext: !xIsNext,
      };

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};
