import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';

const Wrapper = styled.header`
  font-family: 'M PLUS 1p', sans-serif;
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Nav />
  </Wrapper>
);

export default Header;
