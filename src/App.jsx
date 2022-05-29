import { useEffect, useState } from 'react';
import './App.css';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';
import { StartScreen } from './components/StartScreen';

import { stages, wordsList } from './data/words';
const guessesQuantity = 3;

export const App = () => {

  const [start, game, end] = stages;
  const [gameStage, setGameStage] = useState(start.name);
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuantity);
  const [score, setScore] = useState(0)

  const [words] = useState(wordsList);

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category };
  }

  const startGame = () => {
    const { word, category } = pickedWordAndCategory();

    const wordLetters = String(word)
      .split('')
      .map(
        letter => letter.toLowerCase()
      );

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(game.name);
  }

  const endGame = () => {
    setGameStage(end.name);
  }

  /**
   * 
   * @param {String} letter 
   */
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    const hasGuessedLetter = guessedLetters.includes(normalizedLetter);
    const hasWrongLetter = wrongLetters.includes(normalizedLetter);
    const hasLetter = letters.includes(normalizedLetter);

    if (hasGuessedLetter || hasWrongLetter) {
      return;
    }

    if (hasLetter) {
      setGuessedLetters(
        (actualGuessedLetters) => [
          ...actualGuessedLetters,
          normalizedLetter
        ]
      )
    } else {
      setWrongLetters(
        (actualWrongLetters) => [
          ...actualWrongLetters,
          normalizedLetter
        ]
      )
    }

    setGuesses(actualGuesses => actualGuesses - 1);
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(end.name);
    }
  }, [guesses])

  const retry = () => {

    setScore(0);
    setGuesses(guessesQuantity);

    setGameStage(start.name);
  }

  return (
    <div className="App">

      {
        gameStage.includes(start.name) && <StartScreen handleStartGame={startGame} />
      }

      {
        gameStage.includes(game.name) && <Game
          handleVerifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      }

      {
        gameStage.includes(end.name) && <GameOver handleRetry={retry} />
      }


    </div>
  );
}

export default App;
