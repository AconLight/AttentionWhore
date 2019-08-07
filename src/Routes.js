const route = 'https://api-aw.herokuapp.com/api/';
const cors = '';//'https://cors-anywhere.herokuapp.com/';
export const getCampaignsRoute = (numb) => `${cors}${route}campaigns/all`;
export const getCampaignRoute = (id) => `${cors}${route}campaign/${id}`;