/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const DanceHands = keyframes`
  0%, 80%, 95%, 100% {
    transform: translateX(0);
  }
  90%, 97% {
    transform: translateX(20px);
  }
`;

const DanceEye = keyframes`
  0%, 80%, 95%, 100% {
    transform: translateY(0);
  }
  90%, 97% {
    transform: translateY(-3px);
  }
`;

const Wrapper = styled.div`
  padding-top: 15px;
  padding-left: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 6em;
  height: 300px;
  background-color: #d4ffd7;
  @media (max-width: 479px) {
    height: 235px;
    font-size: 4.3em;
  }
  @media (max-width: 368px) {
    height: 60px;
    font-size: 2em;
    align-items: flex-start;
  }
`;

const Hand = styled.i`
  animation: ${DanceHands} 5s;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  display: inline-block;
`;

const Eye = styled.i`
  animation: ${DanceEye} 5s;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  display: inline-block;
`;

const Logo = () => (
  <Wrapper>
    <Hand>⊃</Hand>｡<Eye>•́</Eye>‿<Eye>•̀ </Eye>｡)<Hand>⊃</Hand>
  </Wrapper>
);

export default Logo;
