import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { observer, inject } from "mobx-react";
import { toJS } from 'mobx';

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
    console.log(toJS(this.props.store.campaigns));
  }

  render() {
    console.log(toJS(this.props.store.campaigns));
    return (
      <Div>
        {this.props.store.campaigns.map(camp => (
        <Card title={camp.title}/>
        ))}
      </Div>
    );
  };
}));

export default CardGrid;