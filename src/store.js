import { observable, computed, action, decorate } from "mobx";
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

    getCampaigns = () => {
        this.campaigns = this.mockCampaigns;
        console.log('elo');
        // axios.get(getCampaignsRoute)
        // .then(function (response) {
        //     this.campaigns = response.data.campaigns;
        // })
        // .catch(function (error) {
        //     setTimeout(1000, () => {
        //         this.campaigns = this.mockCampaigns;
        //     });
        // });
        return true;
    }

}

decorate(Store, {
    campaigns: observable,
  });

const store = new Store();

export default store;
