<template>
  <div @click="saveFav">
    <v-rating
      length="1"
      :value="marked"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  props: {
    blogId: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    ...mapGetters({
      favBlogs: 'blogs/favBlogs'
    }),
    marked() {
      return this.favBlogs.find(id => id === this.blogId) ? 1 : 0
    }
  },
  methods: {
    saveFav() {
      this.$store.dispatch('blogs/addToFavBlogs', this.blogId);
    }
  }
}
</script>

<style>

</style>