import styles from './App.module.css'
import Game from "./Game/game";

function App() {
  return (
    <div className={styles.App}>
      <h3 className={styles.title}>КРЕСТИКИ НОЛИКИ</h3>
      <Game />
    </div>
  );
}

export default App;
