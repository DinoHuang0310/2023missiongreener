<template>
  <div class="bg-white bg-repeat py-16 sm:py-24" :style="{'background-image': `url(${bgImage})`}">
    <div class="w-11/12 mx-auto">
      <h2 class="title text-center mb-8 sm:mb-16">自綠‧更幸福</h2>
      
      <BtSlider :sliderData="news" :showNavigation="true" />
    </div>
  </div>
</template>

<script setup>
import BtSlider from '../BtSlider.vue'

const bgImage = new URL(`../../assets/images/background.png`, import.meta.url).href

const props = defineProps({
  news: {
    type: Array,
    default: []
  },
})

</script>
