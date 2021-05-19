<template>
  <v-container
    ><div class="d-flex align-center justify-center pa-4 mx-auto">
      <Logo />
    </div>
    <div id="app" class="mx-4">
      <v-app id="inspire">
        <v-card class="mx-auto" max-width="1200" color="#81C784">
        <v-list-item three-line>
          <v-list-item-content>
            <h1 class="d-flex align-center justify-center pa-4 mx-auto">
          คลังเอกสาร</h1>
        <v-card class="mx-auto" max-width="1200">
        <v-list-item three-line>
          <v-list-item-content>
          <v-card-title>
            <v-text-field
              v-model="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field
            ><v-btn outlined fab color="indigo">
              <v-icon> mdi-magnify </v-icon>
            </v-btn>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    </v-list-item-content>
      </v-list-item>
    </v-card>
      </v-app>
    </div>
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
