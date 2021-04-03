<template>
  <div class="blog-id-page">
    <div class="hero-section" :style="{backgroundImage: `url(${fields.url})`}">
      <h1 class="blog-title">{{fields.title}}</h1>
    </div>
    <div class="desc-container">
      <p class="blog-desc">{{fields.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  middleware: ['authenticated'],
  computed: {
    ...mapGetters({
      blog: 'blogs/blog'
    }),
    blogId() {
      return this.$route.params?.id || '';
    },
    fields() {
      return this.blog?.fields || {};
    }
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      this.$store.dispatch('blogs/getBlog', this.blogId);
    }
  }
}
</script>

<style lang="scss">
  .blog-id-page {
    .hero-section {
      height: fit-content;
      min-height: 480px;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      width: calc(100% + calc(100vw - 100%));
      left: calc(calc(100vw - 100%) / 2 * -1);
      
      .blog-title {
        padding:0 20px;
        margin: 50px 0 20px;
        width: 100%;
        text-align: center;
        color: white;
        background-color: rgba(0, 0, 0, 0.6);
        font-size: 36px;
      }
    }

    .desc-container {
      margin-top:50px;
      .blog-desc{
        font-size: 1.2em;
        line-height: 1.9;
      }
    }
  }
</style>