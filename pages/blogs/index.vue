<template>
  <div class="blogs-page">
    <div class="blogs-list-container">
      <template v-for="(blog, i) in blogs">
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
  computed: {
    ...mapGetters({
      blogs: 'blogs/blogs'
    })
  },
  created() {
    this.getBlogs();
  },
  methods: {
    getBlogs() {
      this.$store.dispatch('blogs/getBlogs');
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