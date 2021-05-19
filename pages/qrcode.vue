<template>
  <div class="d-flex flex-column align-center">
    <PicBorad/>
      <v-card class="mx-auto" max-width="350" color="#81C784">
        <v-list-item three-line>
          <v-list-item-content>
      <v-card class="mx-auto" max-width="270">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="d-flex flex-column align-center">
              <a href="#">
                <img src="https://i.imgur.com/nyu0LPz.jpg" style="width: 250px">
              </a>
                <div class="d-flex flex-column align-center">
                  <a href="#">สแกนตอบแบบสำรวจความโปรงใส ของ ปปช. สำหรับบุคคลภายนอก
                  </a>
                </div>
            </div>
            <p class="text-right">
            <a href="#">ดูเพิ่มเติม</a>
            </p>
        </v-list-item-content>
      </v-list-item>
    </v-card>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import PicBorad from '~/components/PicBorad.vue'
export default {
  components: {
    PicBorad
  }
}
</script>

<style></style>
