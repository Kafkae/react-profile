import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  border: 2px solid red;
  width: 1400px;
  height: 1100px;
  background-color: tomato;
  margin: 0 auto;
`;

const Add = () => (
  <Wrapper>
    <p>Add</p>
  </Wrapper>
);

export default Add;
