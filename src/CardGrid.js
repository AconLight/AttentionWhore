import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { observer, inject } from "mobx-react";

const Div = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardGrid = inject('store')(observer(class MyCardGrid extends React.Component {
  componentWillMount = async () => {
    await this.props.store.getCampaigns();
  }

  render() {
    
    return (
      <Div>
        {this.props.store.campaigns.map(camp => (
        <Card
          title={camp.title}
          img={camp.profileImg}
          description={camp.shortDescription}
        />
        ))}
      </Div>
    );
  };
}));

export default CardGrid;