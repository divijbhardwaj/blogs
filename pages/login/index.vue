<template>
  <div>
    {{token}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      token: 'auth/token'
    })
  },
  mounted() {
    // this.$store.dispatch('auth/setToken', 'tmkc');
  }
}
</script>

<style>

</style>