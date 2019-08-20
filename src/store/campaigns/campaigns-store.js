import uniqby from 'lodash.uniqby';
import articlesActionModule from './campaigns-action';

const initializeState = () => ({
  campaigns: [],
  socialMediaLinks: [],
  companyMission: '',
  teamMembers: [],
  hiringPositions: [],
});

export default ({ $http }) => ({
  state: initializeState(),
  mutations: {
    setCampaignsInState(state, payload) {
      state.campaigns = payload.campaigns;
      state.socialMediaLinks = payload.socialMediaLinks;
      state.companyMission = payload.companyMission;
      state.teamMembers = payload.teamMembers;
      state.hiringPositions = payload.hiringPositions;
    },
    resetCampaignStore(state) {
      state.campaigns = [];
      state.socialMediaLinks = [];
      state.companyMission = '';
      state.teamMembers = [];
      state.hiringPositions = [];
    },
  },
  actions: articlesActionModule({ $http }),
  getters: {
    campaigns: state => state.campaigns,
    socialMediaLinks: state => state.socialMediaLinks,
    companyMission: state => state.companyMission,
    teamMembers: state => state.teamMembers,
    hiringPositions: state => state.hiringPositions,
  },
});
