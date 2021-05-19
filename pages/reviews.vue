<template>
  <v-container>
    <div class="d-flex align-center justify-center pa-4 mx-auto">
      <Logo />
    </div>
    <v-card class="mx-auto" max-width="1200" color="#81C784">
      <v-list-item three-line>
        <v-list-item-content>
          <h1 class="d-flex align-center justify-center pa-4 mx-auto">
            สำรวจความคิดเห็น
          </h1>
          <v-card class="mx-auto" max-width="1200">
            <v-list-item three-line>
              <v-list-item-content>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>
