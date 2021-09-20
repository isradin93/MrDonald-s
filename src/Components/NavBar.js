import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';

const NavBarStyled = styled.header`

`;

export const NavBar = () => (
    <NavBarStyled>
        <img src={logoImg} alt="logo" />
        <h1>MrDonald`s</h1>
        <button>Enter</button>
    </NavBarStyled>
);