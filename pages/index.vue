<template>
  <div>index page</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters({
      token: 'auth/token'
    })
  },
  watch: {
    token: {
      handler(val) {
        if(val) {
          this.$router.replace('/blogs');
          return;
        } this.$router.replace('/login')
      },
      immediate: true
    }
  }
}
</script>

<style>

</style>