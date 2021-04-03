<template>
  <v-card class="blog-item-container">
    <div class="blog-img-container">
      <img class="blog-img" :src="fields.url" alt="blog img">
    </div>
    <div class="blog-details-container">
      <h2 class="blog-title">{{fields.title}}</h2>
      <p class="blog-desc">{{fields.description}} <nuxt-link :to="blogPage">Read more</nuxt-link></p>
      <div class="createdon-rating-container"><p class="blog-createdOn">{{createdAt}} </p> <mark-fav class="fav-star" color="white" background-color="cyan" size="34" :blogId="blog.sys.id"/></div>
    </div>
  </v-card>
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
    overflow: hidden;
    color: black !important;
    margin-bottom: 20px;

    .blog-img-container {
      position: relative;
      .blog-img {
        width: 100%;
        height: auto;
      }
    }

    .blog-details-container {
      padding: 12px 10px ;
      flex:1;
      margin-right: 20px;

      .createdon-rating-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .blog-createdOn {
          margin:0;
          margin-right: 20px;
          color: #676767;
          font-size: 14px;
        }
      }
    }

    @media only screen and(min-width: 650px) {
      display: flex;
      padding: 0;

      .blog-img-container {
        margin-right: 30px;
        .blog-img {
          min-width: 260px;
          max-width: 260px;
          width: 100%;
          height: auto;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }
</style>