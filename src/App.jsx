import { Fragment, useCallback, useEffect, useState } from 'react';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';
import { StartScreen } from './components/StartScreen';

import { stages, wordsList } from './data/words';
import { GlobalStyle } from './globalStyles';
import { Container } from './styles';
const guessesQuantity = 3;

export const App = () => {

  const [start, game, end] = stages;

  const [gameStage, setGameStage] = useState(start.name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuantity);

  const [score, setScore] = useState(0)

  console.log(words);


  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(category, word);

    return { word, category };
  }, [words])

  const startGame = useCallback(() => {

    clearLetterStates();

    const { word, category } = pickedWordAndCategory();

    console.log(category, word);

    const wordLetters = String(word)
      .split('')
      .map(
        letter => letter.toLowerCase()
      );

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(game.name);
  }, [pickedWordAndCategory, game])

  /**
   * 
   * @param {String} letter 
   */
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    const hasGuessedLetter = guessedLetters.includes(normalizedLetter);
    const hasWrongLetter = wrongLetters.includes(normalizedLetter);
    const hasLetter = letters.includes(normalizedLetter);

    console.log(hasGuessedLetter, hasWrongLetter)
    if (hasGuessedLetter || hasWrongLetter) {
      return;
    }

    if (hasLetter) {
      setGuessedLetters(
        (actualGuessedLetters) => [
          ...actualGuessedLetters,
          letter
        ]
      )
    } else {
      setWrongLetters(
        (actualWrongLetters) => [
          ...actualWrongLetters,
          normalizedLetter
        ]
      )

      setGuesses((actualGuesses) => (actualGuesses - 1));

    }

  }

  console.log(wrongLetters);

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates();
      setGameStage(end.name);
    }
  }, [guesses, end]);


  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    const hasGuessedAndUniqueLetters = (guessedLetters.length === uniqueLetters.length) &&
      ((guessedLetters.length && uniqueLetters.length) > 0);

    if (hasGuessedAndUniqueLetters) {
      setScore((actualScore) => (actualScore += 100));
      startGame();
    }

  }, [guessedLetters, letters, startGame]);

  const retry = () => {
    setScore(0);
    setGuesses(guessesQuantity);
    setGameStage(start.name);
  }

  return (
    <Fragment>
      <Container>

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
          gameStage.includes(end.name) && <GameOver
            handleRetry={retry}
            score={score}
          />
        }


      </Container>

      <GlobalStyle/>
    </Fragment>
  );
}

export default App;
