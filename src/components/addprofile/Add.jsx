import React from 'react';
import styled from 'styled-components';
import Addprofile from './ProfileAdd';

const Wrapper = styled.div`
  display: block;
  border: 2px solid black;
  border-radius: 20px;
  width: 70%;
  margin: 4% auto;
  padding: 5px;
`;

const Add = () => (
  <Wrapper>
    <Addprofile />
  </Wrapper>
);

export default Add;
