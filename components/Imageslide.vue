<template>
  <v-card class="mx-auto" max-width="900" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-carousel cycle hide-delimiters height="320px">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://i.imgur.com/SnT7Ryq.jpg'
        },
        {
          src: 'https://i.imgur.com/PzfmslY.jpg'
        },
        {
          src: 'https://i.imgur.com/qebxRMN.jpg'
        },
        {
          src: 'https://i.imgur.com/bgFyBBF.jpg'
        },
        {
          src: 'https://i.imgur.com/L6gye0B.jpg'
        }
      ]
    }
  }
}
</script>
