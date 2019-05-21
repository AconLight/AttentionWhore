import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 300px
  height: 400px;
  opacity: 0.94;
  transition: height 0.35s ease-out, width 0.35s ease-out, opacity 0.35s ease-out, margin-top 0.35s ease-out, border-radius 0.35s ease-out;
  border: solid 5px #222222;
  border-radius: 2px;
  margin: 50px;
  margin-top: 5px;
  z-index: 2;
  background-color: #444444;

  &:hover {
    border-radius: 5px;
    margin-top: 0px;
    opacity: 1;
    width: 310px
    height: 410px;
    transition: height 0.35s ease-out, width 0.35s ease-out, opacity 0.35s ease-out, margin-top 0.35s ease-out, border-radius 0.35s ease-out;
 }
`;

const Title = styled.div`
  margin-top: 10px
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #222222;
`;

class Card extends React.Component {
  render = () => (
    <Div>
      <Title>{this.props.title}</Title>
    </Div>
  );
}

export default Card;