import { observable, computed, action, decorate, toJS } from "mobx";
import axios from 'axios';
import getCampaignsRoute from './Routes';

class Store {
	mockCampaigns = [
        {
            title: 'Fantasy drawings',
            profileImg: 'https://i.ytimg.com/vi/RLmIn0sr9is/maxresdefault.jpg',
            shortDescription: 'just wanna share my art with as many peopla as possible',
        },
        {
            title: 'Krzysztof Kononowicz',
            profileImg: 'https://www.wykop.pl/cdn/c3201142/comment_lJckK84pMOLgfZThUtAm6Q6Mtp1spmVW,w400.jpg',
            shortDescription: 'zagłosuj by nie było niczego',
        },
        {
            title: 'siema',
            profileImg: 'https://i.ytimg.com/vi/RLmIn0sr9is/maxresdefault.jpg',
        },
        {
            title: 'siema',
            profileImg: 'https://i.ytimg.com/vi/RLmIn0sr9is/maxresdefault.jpg',
        },
        {
            title: 'siema',
            profileImg: 'https://i.ytimg.com/vi/RLmIn0sr9is/maxresdefault.jpg',
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
            }, 200);
        });
    }

}

decorate(Store, {
    campaigns: observable,
  });

const store = new Store();

export default store;
