
export const state = () => ({
  entries: [],
  trackFacts: {},
});

export const actions = {
  async getJson (context, data) {
    const epoch = (new Date()).getTime();
    console.log('test');
    const res = await fetch(
      'https://storage.googleapis.com/fiawec-prod/assets/live/WEC/__data.json?_=' + epoch
    );
    const realres = await res.json();
    console.log(realres);
    context.commit('UPDATEENTRIES', realres);
  },

};

export const mutations = {
  UPDATEENTRIES (state, data) {
    state.entries = data.entries;
    state.trackFacts = data.params;
  },
};

export const getters = {
  getAll (state) {
    return Object.values(state.entries);
  },
  getParams (state) {
    console.log(state.trackFacts);
    return state.trackFacts;
  },
};
