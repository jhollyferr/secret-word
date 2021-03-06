import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    height: 100%;
    }

    body {
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, rgba(9, 35, 175, 1) 0%, rgba(0, 0, 0, 1) 100%);
    color: #FFFFFF;
    }

    button {
    background: #1646a0;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 25px;
    padding: 0 45px;
    height: 50px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    transition: .4s;
    }

    button:hover {
    background: #0923af;
    }
`;
