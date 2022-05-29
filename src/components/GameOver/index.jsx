import './index.css';

export const GameOver = ({ handleRetry }) => {
    return (
        <div>
            <h1>GameOver</h1>
            <button onClick={handleRetry}>Resetar jogo</button>
        </div>
    )
}