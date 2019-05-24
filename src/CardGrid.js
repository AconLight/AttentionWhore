import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { observer, inject } from "mobx-react";

const Div = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`; 

const Roll = styled.div`
  max-height: ${props => props.isCampaign === 0 ? '1000px' : '0px'};
  overflow: hidden;
  transition: max-height 0.7s ease-out;
`;

const CardGrid = inject('store')(observer(class MyCardGrid extends React.Component {
  componentWillMount = async () => {
    await this.props.store.getCampaigns();
  }

  cardClick = (id) => () => {
    this.props.store.getCampaign(id);
    // scroll
  }

  render() {
    
    return (
      <Roll isCampaign={this.props.store.isCampaign}>
        <Div>
          {this.props.store.campaigns.map(camp => (
          <Card
            title={camp.title}
            img={camp.profileImg}
            description={camp.shortDescription}
            onClick={this.cardClick(camp.id)}
          />
          ))}
        </Div>
      </Roll>
    );
  };
}));

export default CardGrid;