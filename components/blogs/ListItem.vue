<template>
  <nuxt-link to="/blogs" class="blog-item-container">
    <div class="blog-details-container">
      <h2 class="blog-title">{{fields.title}}</h2>
      <p class="blog-desc">{{fields.description}}</p>
      <p class="blog-createdOn">{{createdAt}}</p>
    </div>
    <img class="blog-img" :src="fields.url" alt="blog img">
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  computed: {
    fields() {
      return this.blog?.fields || {}
    },
    createdAt() {
      const date = this.blog.sys?.createdAt || ''
      if(date) {
        const d = new Date(date);
        return `${this.$utils.DATE.getMonth(d)} ${d.getDate()}, ${d.getFullYear()}`;
      }
      return '';
    }
  },
  // blogPage() {
  //   return `/blogs/${}`
  // }
}
</script>

<style lang="scss">
  .blog-item-container {
    display: flex;
    overflow: hidden;

    .blog-details-container {
      flex:1;
    }
    .blog-img {
      max-width: 200px;
      height: auto;
    }
  }
</style>