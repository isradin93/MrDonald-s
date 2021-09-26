import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        background-color: #f0f0f0;
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #000;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3 {
        font-family: Pacifico;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <NavBar />
        </>
    );
}

export default App;