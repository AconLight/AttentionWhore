import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import LoginForm from './LoginForm';

const OffModal = styled.div`
  position: fixed;
  z-index: 9;
  top: 0px;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #262626, #262626);
  opacity: 0.2;
`;

const Modal = styled.div`
  margin: 0 15vw;
`;

const Container = styled.div`
  position: absolute;
  top: 5vh;
  z-index: 10;
`;



const LoginModal = ({isOn, switchLoginModal}) => (
  <Container>
    {isOn && (
      <div>
          <OffModal onClick={switchLoginModal} />
          <Modal>
            <Card
              width={'70vw'}
              height={'90vh'}
              margin={'0px'}
              zIndex={10}
              position={'absolute'}
            >
              <LoginForm />
            </Card>
          </Modal>
      </div>
    )}
  </Container>
);

export default LoginModal;