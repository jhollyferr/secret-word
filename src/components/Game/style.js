import styled from 'styled-components';

export const Container = styled.div`
    .game h1 {
        font-size: 2.5em;
    }

    .points span {
        font-weight: bold;
    }

    .tip span {
        color: #ecfa00;
    }
`;

export const WordContainer = styled.div`
    margin: 1.5em;
    padding: 1.5em;
    border: 20px solid #ecfa00;
    border-radius: 10px;
    display: flex;

    .letter,
    .blankSquare {
        font-size: 70px;
        line-height: 1.5;
        border: 3px solid #000000;
        height: 100px;
        width: 100px;
        text-transform: uppercase;
        background: #FFFFFF;
        color: #000000;
        font-weight: bold;
    }
`;

export const LetterContainer = styled.div`
    p {
        margin-bottom: 1.2em;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
    }

   input {
        height: 50px;
        width: 50px;
        font-size: 2em;
        text-align: center;
        margin-right: 1em;
    }
`;