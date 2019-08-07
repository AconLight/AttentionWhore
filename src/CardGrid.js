import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { observer, inject } from "mobx-react";
import CardCampaign from './CardCampaign';

const Div = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`; 

const Roll = styled.div`
  margin-left: ${props => props.isCampaign === 0 ? '0' : '-100%'};
  overflow: hidden;
  max-width: 100vw;
  transition: margin-left 0.4s ease-out;
`;

const CardGrid = inject('store')(observer(class MyCardGrid extends React.Component {
  componentWillMount = async () => {
    await this.props.store.getCampaigns();
  }

  cardClick = (id) => () => {
    this.props.store.getCampaign(id);
    setTimeout(() => {
      let elems = document.body.getElementsByTagName("*");
      for (let e of elems) {
        e.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 450);
  }

  render() {
    
    return (
      <Roll isCampaign={this.props.store.isCampaign}>
        <Div>
          {this.props.store.campaigns.map(camp => (
          <CardCampaign
            name={camp.name}
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