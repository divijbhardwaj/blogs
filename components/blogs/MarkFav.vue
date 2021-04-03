<template>
  <div @click="saveFav">
    <v-rating :value="marked" length="1">
      <template v-slot:item="props">
        <v-icon
          :color="props.isFilled ? 'orange' : 'grey lighten-1'"
          large
          @click="props.click"
        >
          {{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
        </v-icon>
      </template>
    </v-rating>
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
    },
  },
}
</script>

<style lang="scss">
</style>