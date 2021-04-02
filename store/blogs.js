export const state = () => ({
  blogs: [],
  blog:{}
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
  },
  async getBlog({state, commit}, blogId) {
    let blog = state.blogs.find(b => b.sys.id === blogId);
    if(blog) {
      commit('SAVE_BLOG', blog);
      return;
    }
    try {
      blog = await this.$blogs.getEntry(blogId);
      commit('SAVE_BLOG', blog);
    }catch(e) {
      console.log(e);
    }
  }
};

export const mutations = {
  SAVE_BLOGS(state, payload = []) {
    if(payload.length) {
      state.blogs = payload;
    }
  },
  SAVE_BLOG(state, payload = {}) {
    if(Object.keys(payload).length) {
      state.blog = payload;
    }
  }
};

export const getters = {
  blogs: ({blogs}) => blogs,
  blog: ({blog}) => blog
};