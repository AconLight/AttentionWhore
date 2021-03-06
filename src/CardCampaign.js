import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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
  margin-left: 10px;
  width: calc(100% - 30px);
  background-color: #222222;
  border: solid 4px #222222;
  border-radius: 5px;
  max-height: 150px;
  src: ${props => props.src};
`;

class CardCampaign extends React.Component {
  render = () => (
    <Card
      onClick={this.props.onClick}
      width={'300px'}
      height={'400px'}
    >
      <Title>{this.props.name}</Title>
      <Img src={this.props.img} />
      <Description>{this.props.description}</Description>
    </Card>
  );
}

export default CardCampaign;