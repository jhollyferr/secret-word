import './index.css';

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
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Advinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s)</p>
            <div className="wordContainer">
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
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form>
                    <input type="text" name="letter" id="letter" required />
                    <button>Jogar</button>
                </form>
            </div>
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
        </div >
    )
}