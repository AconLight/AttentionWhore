import { observable, computed, action, decorate, toJS } from "mobx";
import axios from 'axios';
import getCampaignsRoute from './Routes';

class Store {
	mockCampaigns = [
        {
            title: 'siema',
        },
        {
            title: 'siema',
        },
        {
            title: 'siema',
        },
        {
            title: 'siema',
        },
        {
            title: 'siema',
        },
    ];

    initCampaigns = [
        {
            title: 'elo',
        },
        {
            title: 'elo',
        },
    ];

    campaigns = this.initCampaigns;

    getCampaigns = async () => {
        console.log('elo');
        await axios.get(getCampaignsRoute)
        .then((response) => {
            console.log('got it');
            this.campaigns = response.data.campaigns;
        })
        .catch((error) => {
            setTimeout(() => {
                this.campaigns = this.mockCampaigns;
                console.log('error');
            }, 2000);
        });
    }

}

decorate(Store, {
    campaigns: observable,
  });

const store = new Store();

export default store;
