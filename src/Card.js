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
  margin: 20px 0;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #222222;
`;

const Description = styled.div`
  margin: 10px 0;
  padding: auto 0;
  text-align: center;
  vertical-align: center;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: #222222;
`;

const Img = styled.img`
  margin-left: -10px;
  width: calc(100% + 10px);
  background-color: #222222;
  border: solid 5px #222222;
  border-radius: 20px;
  max-height: 150px;
  src: ${props => props.src};
`;

class Card extends React.Component {
  render = () => (
    <Div>
      <Title>{this.props.title}</Title>
      <Img src={this.props.img} />
      <Description>{this.props.description}</Description>
    </Div>
  );
}

export default Card;