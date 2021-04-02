export const state = () => ({
  blogs: []
});

export const actions = {
  async getBlogs({state, commit}) {
    const hasBlogs = state.blogs.length;
    if(!hasBlogs) {
      try {
        const res = await this.$blogs.getEntries();
        const {items} = res || {};
        commit('SAVE_BLOGS', items);
      }catch(e) {
        console.log(e);
      }
    }
  }
};

export const mutations = {
  SAVE_BLOGS(state, payload = []) {
    if(payload.length) {
      state.blogs = payload;
    }
  }
};

export const getters = {
  blogs: ({blogs}) => blogs
};