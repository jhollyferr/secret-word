import { Container } from './styles';

export const GameOver = ({ handleRetry, score}) => {
    return (
        <Container>
            <h1>Fim de Jogo!</h1>
            <h2>A sua pontuação foi <span>{score}</span></h2>
            <button onClick={handleRetry}>Resetar jogo</button>
        </Container>
    )
}