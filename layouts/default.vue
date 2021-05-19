<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      color="#FFFDE7"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div class="mx-auto text-center mt-3">
        <img src="../assets/2.png" width="200px" alt="">
      </div>
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
      <div class="mx-auto text-center mt-3">
        <h1>วารสาร</h1>
        <p>Scan QRcode ได้ที่นี่!</p>

        <img
          src="https://www.nongmaingam.go.th/uploads/20160128141521BA4MNhc/store/mag_202006041123389uaB.jpg"
          width="200px"
          alt=""
        >
      </div>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#8BC34A">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <nuxt />
      <v-footer color="#8BC34A" padless>
        <v-col class="text-center" cols="12">
          <strong>เทศบาลตำบลหนองไม้งาม</strong>
          <br>
          <strong>
            199 หมู่ที่ 9 ตำบลหนองไม้งาม อำเภอบ้านกรวด จังหวัดบุรีรัมย์ 31180
          </strong>
          <br>
          <strong>
            Email :
            <a href="mailto:nongmaingam21@gmail.com">nongmaingam21@gmail.com</a>
            &nbsp;โทรศัพท์ 044-679976 &nbsp;โทรสาร 044-679976
          </strong>
          <div style="display: none;">
            1
          </div>
          <br>
          <strong>Copyrigth By NONG MAI NGAM . All rigths reserved </strong>
          <br>
          <strong>
            Powered by
            <a
              href="https://government.icti.co.th/"
              title="government.icti"
              target="_blank"
            >government.icti.co.th</a>
          </strong>
          <br>
          <br>
          <img
            src="https://i.imgur.com/kkOu83d.png"
            alt="QR code map"
            style="width: 100px"
          >
        </v-col>
      </v-footer>
    </v-main>
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
