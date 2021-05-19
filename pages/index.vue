<template>
  <div id="app" v-img>
    <div
      class="d-flex flex-column align-center"
      style="background-color: powderblue"
    >
      <div>
        <PicBorad />
      </div>
      <div>
        <Imageslide />
      </div>
      <br>
      <div>
        <NewEven />
      </div>
      <br>
      <div>
        <NewRelease />
      </div>
      <br>
      <div>
        <PurchaseNews />
      </div>
      <br>

      <div class="mb-7">
        <Imglink />
      </div>
    </div>
  </div>
</template>
<script>
import Imageslide from '~/components/Imageslide.vue'
import NewEven from '~/components/NewEven.vue'
import NewRelease from '~/components/NewsRelease.vue'
import PurchaseNews from '~/components/PurchaseNews.vue'
import PicBorad from '~/components/PicBorad.vue'
import Imglink from '~/components/Imglink'

export default {
  components: {
    Imageslide,
    NewEven,
    NewRelease,
    PurchaseNews,
    PicBorad,
    Imglink
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,300;0,500;1,200&display=swap');
body {
  font-family: 'Sarabun', sans-serif;
}
#app {
  font-family: 'Sarabun', sans-serif;
}
</style>
