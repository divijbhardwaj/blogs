export const state = () => ({
  blogs: [],
  blog: {},
  favBlogs: []
});

export const actions = {
  async getBlogs({state, commit, dispatch}) {
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
    dispatch('getFavBlogs');
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
      return blog;
    }catch(e) {
      console.log(e);
    }
  },
  getFavBlogs({commit}) {
    const stringblogs = localStorage.getItem('favourite-blogs');
    const jsonBlogs = stringblogs? JSON.parse(stringblogs) : [];
    if(jsonBlogs.length) {
      commit('SAVE_FAV', jsonBlogs);
    }
  },
  addToFavBlogs({commit}, blogId) {
    const stringblogs = localStorage.getItem('favourite-blogs');
    const jsonBlogs = stringblogs? JSON.parse(stringblogs) : [];
    const existingBlog = jsonBlogs.find(id => id === blogId);
    if(existingBlog) {
      jsonBlogs.splice(jsonBlogs.indexOf(blogId), 1);
    } else jsonBlogs.push(blogId);
    localStorage.setItem('favourite-blogs', JSON.stringify(jsonBlogs));
    commit('SAVE_FAV', jsonBlogs);
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
  },
  SAVE_FAV(state, blogs=[]) {
    state.favBlogs = blogs;
  }
};

export const getters = {
  blogs: ({blogs}) => blogs,
  blog: ({blog}) => blog,
  favBlogs: ({favBlogs}) => favBlogs
};