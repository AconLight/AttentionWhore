import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  z-index: 1;
  position: absolute;
  top: 0px;
  width: 100%;
  background-image: linear-gradient(to bottom, #262626, #262626);
  height: 100px;
  opacity: 0.94;
  transition: height 0.35s ease-out, opacity 0.35s ease-out;

  &:hover {
    height: 120px;
    opacity: 1;
    transition: height 0.35s ease-out, opacity 0.35s ease-out;
 }
`;

const LoginText = styled.div`
  margin: 30px;
  color: #999999;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`;

const Header = ({switchLoginModal}) => (
  <Div>
    <LoginText onClick={switchLoginModal}>
      Login
    </LoginText>
  </Div>
);

export default Header;