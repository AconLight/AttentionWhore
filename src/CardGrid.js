import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { observer } from "mobx-react";
import store from './store';

const Div = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardGrid = (observer(class MyCardGrid extends React.Component {
  onComponentDidMount = () => {
    
  }

  render = () => {
    store.getCampaigns();
    return (
      <Div>
        {store.campaigns.map(camp => (
        <Card title={camp.title}/>
        ))}
      </Div>
    );
  };
}));

export default CardGrid;