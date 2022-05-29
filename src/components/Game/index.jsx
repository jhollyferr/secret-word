import './index.css';

export const Game = ({ handleVerifyLetter }) => {
    return (
        <div>
            <h1>Game</h1>
            <button onClick={handleVerifyLetter}>Finalizar jogo</button>
        </div>
    )
}