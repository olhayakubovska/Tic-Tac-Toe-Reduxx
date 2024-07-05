import React, { useEffect, useState } from "react";
import store from "../store";
import { initialState } from "../reducer";
import styles from "./game.module.css";
import { MAKE_MOVE, RESET_GAME } from "../actions";
import { checkWinner } from "./checkwinner";

const Game = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));

    return () => {
      unsubscribe();
    };
  }, []);

  const handleCellClick = (index) => {
    store.dispatch({ type: MAKE_MOVE, index });
  };

  const resetGame = () => {
    store.dispatch({ type: RESET_GAME });
  };

  const winner = checkWinner(state.board);
  const isDraw = !winner && state.board.every((item) => item);

  return (
    <div>
      <div className={styles.board}>
        {state.board.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button className={styles.btn} onClick={resetGame}>
        reset game
      </button>

      <div className={styles.information}>
        {winner
          ? `Победа ${winner}`
          : isDraw
            ? "Ничья"
            : `Ходит: ${state.xIsNext ? "X" : "O"}`}
      </div>
    </div>
  );
};

export default Game;

const Cell = ({ value, onClick }) => {
  return (
    <button className={styles.cell} onClick={onClick}>
      {value}
    </button>
  );
};
