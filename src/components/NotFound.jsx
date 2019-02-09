import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 3em;
`;

const NotFound = () => (
  <Wrapper>
    <b>¯\_(ツ)_/¯</b>
    <b>Что-то тут не то...</b>
    <b>404 404 404 404</b>
  </Wrapper>
);

export default NotFound;
