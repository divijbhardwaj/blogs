export const state = () => ({
  token: undefined
});

export const actions = {
  getToken({commit}) {
    const token = document.cookie.split(';').find(cookie => cookie.includes('token'))?.trim().split('=')[1];
    commit('SET_TOKEN', token);
  },
  setToken({dispatch}, val) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 6);
    document.cookie = `token=${val};expires=${expiry.toUTCString()}`;
    dispatch('getToken');
  },
  revokeToken({dispatch}) {
    document.cookie = 'token=;max-age=0';
    dispatch('getToken');
    this.$router.push({path: '/login'});
  }
};

export const mutations = {
  SET_TOKEN(state,val) {
    state.token = val;
  }
};

export const getters = {
  token: ({token}) => token
}