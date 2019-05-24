import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { observer, inject } from "mobx-react";

const Div = styled.div`
  width: 90%;
  min-height: calc(100vh - 300px);
  opacity: 0.94;
  transition: height 0.35s ease-out, width 0.35s ease-out, opacity 0.35s ease-out, margin-top 0.35s ease-out, border-radius 0.35s ease-out;
  border: solid 5px #222222;
  border-radius: 2px;
  margin: 50px;
  z-index: 2;
  background-color: #444444;
`;

const Title = styled.div`
  margin: 20px 0;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #222222;
  flex: 1;
`;

const Back = styled.div`
  margin: 20px;
  text-align: left;
  font-size: 34px;
  font-weight: 700;
  color: #222222;
  &:hover {
    cursor: pointer;
  }
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

const Roll = styled.div`
  max-height: ${props => props.isCampaign === 1 ? '90vh' : '0px'};
  overflow: hidden;
  transition: max-height 0.7s ease-out;
  margin-top: 170px;
`;

const Flex = styled.div`
  display: flex;
`;



const Campaign = inject('store')(observer(class MyCardGrid extends React.Component {
  
  onBack = () => this.props.store.exitCampaign();

  render() {
    const { campaign, isCampaign } = this.props.store;
    console.log('isCampaing');
    console.log(isCampaign);
    return (
      <Roll isCampaign={isCampaign}>
        <Div>
          <Flex>
            <Back onClick={this.onBack}>{'<-'}</Back>
            <Title>{campaign.title}</Title>
          </Flex>
          <Img src={campaign.img} />
          <Description>{campaign.description}</Description>
        </Div>
      </Roll>
    );
  };
}));

export default Campaign;