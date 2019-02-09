import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Wrapper = styled.header`
  font-family: 'M PLUS 1p', sans-serif;
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <nav>
      <ul>
        <li><Link to="/add">add</Link></li>
        <li><Link to="/profile">profile</Link></li>
      </ul>
    </nav>
  </Wrapper>
);

export default Header;
