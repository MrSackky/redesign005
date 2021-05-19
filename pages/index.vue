<template>
  <div class="d-flex flex-column align-center">
    <div>
      <PicBorad />
    </div>
    <div>
      <Imageslide />
    </div>
    <br />
    <div>
      <NewEven />
    </div>
    <div>
      <Footer />
    </div>
    <br />
    <div>
      <NewRelease />
    </div>
    <br />
    <div>
      <PurchaseNews />
    </div>
  </div>
</template>
<script>
import Imageslide from '~/components/Imageslide.vue'
import NewEven from '~/components/NewEven.vue'
import Footer from '~/components/Footer.vue'
import NewRelease from '~/components/NewsRelease.vue'
import PurchaseNews from '~/components/PurchaseNews.vue'
import PicBorad from '~/components/PicBorad.vue'

export default {
  components: {
    Imageslide,
    NewEven,
    Footer,
    NewRelease,
    PurchaseNews,
    PicBorad
  }
}
</script>
