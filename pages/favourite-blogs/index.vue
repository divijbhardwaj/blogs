<template>
  <div class="blogs-page">
    <div class="blogs-list-container">
      <template v-for="(blog, i) in favBlogsData">
        <list-item :key="i" :blog="blog"/>
      </template>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  middleware: ['authenticated'],
  components: {
    ListItem: () => import('@/components/blogs/ListItem')
  },
  data() {
    return {
      favBlogsData: []
    }
  },
  computed: {
    ...mapGetters({
      favBlogs: 'blogs/favBlogs',
    }),
  },
  created() {
    this.getFavBlogsData();
  },
  methods: {
    async getFavBlogsData() {
      if(!this.favBlogs.length) {
        this.$store.dispatch('blogs/getFavBlogs');
      }
      if(this.favBlogs.length) {
        for(const blogId of this.favBlogs){
          try {
            const blog = await this.$blogs.getEntry(blogId);
            if(blog) {
              this.favBlogsData = [...this.favBlogsData, blog];
            }
          }catch(e) {
            console.log(e);
          }
        }
      }
    }
  }
}
</script>

<style lang="scss"> 
  @import '~/assets/styles/pages/blogs.scss';
</style>