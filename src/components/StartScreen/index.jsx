import { Container } from './styles';

export const StartScreen = ({ handleStartGame }) => {
    return (
        <Container>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button
                onClick={handleStartGame}
            >Começar o jogo</button>
        </Container>
    )
}