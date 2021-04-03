<template>
  <div class="blog-item-container">
    <div class="blog-details-container">
      <h2 class="blog-title">{{fields.title}}</h2>
      <p class="blog-desc">{{fields.description}} <nuxt-link :to="blogPage">Read more</nuxt-link></p>
      <p class="blog-createdOn">{{createdAt}} <mark-fav :blogId="blog.sys.id"/></p>
    </div>
    <div class="blog-img-container">
      <img class="blog-img" :src="fields.url" alt="blog img">
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MarkFav: () => import('@/components/blogs/MarkFav')
  },
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
    },
    blogPage() {
      return `/blogs/${this.blog.sys?.id}`
    }
  },
}
</script>

<style lang="scss">
  .blog-item-container {
    text-decoration: none;
    display: flex;
    overflow: hidden;
    color: black !important;

    .blog-details-container {
      flex:1;
      margin-right: 20px;
    }
    .blog-img {
      width: 100%;
      max-width: 200px;
      height: auto;
    }
  }
</style>