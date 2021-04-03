<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="isAuth"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon v-if="isAuth" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="'Blogs'" />
      <v-spacer />
      <v-btn v-if="isAuth" @click="logout" small color="warning">
        logout
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          // icon: 'mdi-apps',
          title: 'All blogs',
          to: '/blogs'
        },
        {
          // icon: 'mdi-chart-bubble',
          title: 'Favourite blogs',
          to: '/favourite-blogs'
        }
      ],
      // title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapGetters({
      isAuth: 'auth/token'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/revokeToken');
    }
  }
}
</script>
