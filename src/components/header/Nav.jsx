import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  background-color: #fffdc0;
  height: 40px;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
`;

const Elem = styled.li`
  width: 50%;
  height: 100%;
  text-transform: uppercase;
  font-size: 1.7em;
`;

const StyledLink = styled(NavLink)`
  color: black;
  display: block;
  width: 100%;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid transparent;
  &:hover {
    background-color: tomato;
  }
`;

const Nav = () => (
  <Wrapper>
    <List>
      <Elem><StyledLink exact activeStyle={{ borderBottom: '3px solid tomato' }} to="/">profile</StyledLink></Elem>
      <Elem><StyledLink exact activeStyle={{ borderBottom: '3px solid tomato' }} to="/add">add</StyledLink></Elem>
    </List>
  </Wrapper>
);

export default Nav;
