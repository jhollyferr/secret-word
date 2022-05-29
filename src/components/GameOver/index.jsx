import './index.css';

export const GameOver = ({ handleRetry, score}) => {
    return (
        <div>
            <h1>Fim de Jogo!</h1>
            <h2>A sua pontuação foi <span>{score}</span></h2>
            <button onClick={handleRetry}>Resetar jogo</button>
        </div>
    )
}