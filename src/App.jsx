import { useState } from 'react';
import './App.css';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';
import { StartScreen } from './components/StartScreen';

import { stages, wordsList } from './data/words';

export const App = () => {

  const [start, game, end] = stages;

  const [gameStage, setGameStage] = useState(start.name);

  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(game.name);
  }

  const endGame = () => {
    setGameStage(end.name);
  }

  const verifyLetter = () => {
    setGameStage(end.name);
  }

  const retry = () => {
    setGameStage(start.name);
  }

  return (
    <div className="App">

      {
        gameStage.includes(start.name) && <StartScreen handleStartGame={startGame} />
      }

      {
        gameStage.includes(game.name) && <Game handleVerifyLetter={verifyLetter} />
      }

      {
        gameStage.includes(end.name) && <GameOver handleRetry={retry} />
      }


    </div>
  );
}

export default App;
