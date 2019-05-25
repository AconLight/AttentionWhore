const route = 'http://zzpj.herokuapp.com';
const cors = 'https://cors-anywhere.herokuapp.com/';
export const getCampaignsRoute = (numb) => `${cors}${route}/campaigns/${numb}`;
export const getCampaignRoute = (id) => `${cors}${route}/campaign/${id}`;