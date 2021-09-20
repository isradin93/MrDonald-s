import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
        <div>
            <GlobalStyle />
            <div className="App">
                <h1>Hello React</h1>
            </div>
        </div>
    );
}

export default App;