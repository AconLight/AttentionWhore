import { observable, computed, action, decorate, toJS } from "mobx";
import axios from 'axios';
import { getCampaignsRoute, getCampaignRoute } from './Routes';

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

    campaign = this.initCampaigns[0];

    isCampaign = 0;

    getCampaigns = async () => {
        console.log('getcampaigns');
        const resp = await axios.get(getCampaignsRoute(2), { crossdomain: true });
        console.log(resp);
        this.campaigns = resp.data;
    }

    getCampaign = async (id) => {
        const time = this.isCampaign === 0 ? 0 : 700;
        this.isCampaign = 0;
        await axios.get(getCampaignRoute(id))
        .then((response) => {
            this.campaign = response.data;
            setTimeout(() => {
                this.isCampaign = 1;
            }, time);
        })
        .catch((error) => {
            this.campaign = this.mockCampaigns[1];
            setTimeout(() => {
                this.isCampaign = 1;
            }, time);
        });
    }

    exitCampaign = () => {
        this.isCampaign = 0;
    }



}

decorate(Store, {
    campaigns: observable,
    campaign: observable,
    isCampaign: observable,
  });

const store = new Store();

export default store;
