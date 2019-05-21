import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  z-index: 0;
  position: fixed;
  top: 0px;
  width: 100%;
  background-image: linear-gradient(to bottom, #262626, #262626);
  height: 100px;
  opacity: 0.94;
  transition: height 0.35s ease-out, opacity 0.35s ease-out;

  &:hover {
    height: 160px;
    opacity: 1;
    transition: height 0.35s ease-out, opacity 0.35s ease-out;
 }
`;

const Header = () => (
  <Div />
);

export default Header;