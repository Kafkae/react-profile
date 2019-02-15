import React from 'react';
import styled from 'styled-components';
import Addprofile from './ProfileAdd';

const Wrapper = styled.div`
  display: block;
  border: 2px solid black;
  padding: 5px;
  border-radius: 20px;
  max-width: 60%;
  margin: 4% auto;
  padding: 10px;
  font-family: 'M PLUS 1p', sans-serif;
  @media (max-width: 1110px) {
    max-width: 99%
  }
`;

const Add = () => (
  <Wrapper>
    <Addprofile />
  </Wrapper>
);

export default Add;
