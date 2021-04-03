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
    this.getFavBlogsData()
  },
  methods: {
    getFavBlogsData() {
      if(!this.favBlogs.length) {
        this.$store.dispatch('blogs/getFavBlogs');
      }
      if(this.favBlogs.length) {
        this.favBlogs.forEach(async(blogId) => {
         const blog =  await this.$store.dispatch('blogs/getBlog', blogId);
         if(blog) {
            this.favBlogsData.push(blog);
         }
        });
      }
    }
  }
}
</script>

<style lang="scss"> 
.blogs-page {
  .blogs-list-container {
    display: flex;
    flex-direction: column;
  }
}
</style>