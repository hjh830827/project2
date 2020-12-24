export const state = () => ({
  PHONE_PROD_SELECT_INFO: {},
  SKT_PROD_SELECT_INFO: {}
});

export const mutations = {
  addInfo(state, payload) {
    state[payload.step][payload.key] = payload.value;
  }
};
