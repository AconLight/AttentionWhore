import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;



const LoginForm = () => (
  <Container>
    <Form>
      Login Form
    </Form>
  </Container>
);

export default LoginForm;