<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
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
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#8BC34A">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
<!-- <Footer/> -->
  </v-app>
</template>

<script>
// import Footer from '~/components/Footer.vue'
export default {
  // components: {
  //   Footer
  // },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'หน้าหลัก',
          to: '/'
        },
        {
          icon: 'mdi-login',
          title: 'เข้าสู่ระบบ',
          to: '/login'
        },
        {
          icon: 'mdi-apps',
          title: 'เมนูหลัก',
          to: '/menu'
        },
        {
          icon: 'mdi-archive',
          title: 'คลังเอกสาร',
          to: '/archives'
        },
        {
          icon: 'mdi-comment-quote ',
          title: 'ร้องทุกข์',
          to: '/complain'
        },
        {
          icon: 'mdi-message-bulleted ',
          title: 'สำรวจความคิดเห็น',
          to: '/reviews'
        },
        {
          icon: 'mdi-contacts',
          title: 'ติดต่อเรา',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
