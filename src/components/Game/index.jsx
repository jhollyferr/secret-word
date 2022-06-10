import { useRef, useState } from 'react';
import { Container, WordContainer, LetterContainer} from './style';

export const Game = ({
    handleVerifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) => {

    const [letter, setLetter] = useState('');
    const letterInputRef = useRef(null);

    /**
     * 
     * @param {Event} event 
     */

    //event.target.value;
    const handleChangeLetter = ({ target: { value } }) => {
        value = value.replace(/[0-9]+$/, '');
        setLetter(value)
    }

    /**
     * 
     * @param {Event} event 
     */
    const handleSubmitLetter = (event) => {
        event.preventDefault();
        handleVerifyLetter(letter);
        setLetter('');
        letterInputRef.current.focus();
    }

    return (
        <Container>
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Advinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s)</p>
            <WordContainer>
                {
                    letters.map(
                        (letter, index) => (
                            guessedLetters.includes(letter)
                                ? (
                                    <span key={index} className="letter">{letter}</span>
                                )
                                : (
                                    <span key={index} className="blankSquare"></span>
                                )
                        )
                    )
                }
            </WordContainer>

            <LetterContainer>
                <p>Tente adivinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmitLetter}>
                    <input
                        type="text"
                        name="letter"
                        id="letter"
                        required
                        onChange={handleChangeLetter}
                        value={letter}
                        ref={letterInputRef}
                        maxLength="1"
                        minLength="1"
                    />
                    <button>Jogar</button>
                </form>
            </LetterContainer>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                {
                    wrongLetters.map(
                        (letter, index) => (
                            <span key={index}> {letter}, </span>
                        )
                    )
                }
            </div>
        </Container >
    )
}