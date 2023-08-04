<template>
  <div class="relative py-16 sm:py-24 bg-secondary bg-repeat overflow-hidden" :style="{'background-image': `url(${bgImage})`}">
    <img class="absolute left-0 top-0 w-5/12 sm:w-1/4" src="../../assets/images/adornment-ribbon-left.png" alt="">
    <img class="absolute right-0 top-0 w-5/12 sm:w-1/4" src="../../assets/images/adornment-ribbon-right.png" alt="">

    <div class="container w-11/12">
      <h2 class="title text-center mb-16">免「廢」闖關</h2>
      <ContentBox class="relative p-4 md:p-8 2xl:py-12 rounded-tl-none sm:rounded-tl-none mb-8 sm:mb-32">
        <div class="absolute top-0 left-0 w-full sm:w-auto -translate-y-full bg-primary text-white sm:text-lg font-bold text-center px-4 py-2 pr-2 rounded-tl-md rounded-tr-md">
          闖關成功 換好禮！
        </div>
        <div class="text-center mb-8">
          <p>自綠生活節一起耍廢！​</p>
          <p>完成活動現場所有關卡，即可兌換好禮</p>
        </div>
        <div class="sm:flex sm:items-center space-y-6 sm:space-y-0">
          <div :class="stepBox">
            <img class="w-1/3" src="../../assets/images/event-step3.png" alt="step1. 現場報到，加闖關APP">
            <div class="flex-1 pl-6">
              <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">step1</label>
              <p>現場報到、加Line帳號</p>
            </div>
          </div>
          <div :class="stepBox">
            <img class="w-1/3" src="../../assets/images/event-step4.png" alt="step2. 完成關卡，兌換好禮">
            <div class="flex-1 pl-6">
              <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">step2</label>
              <p>完成所有關卡，兌換好禮！​</p>
            </div>
          </div>
        </div>

        <div v-if="prize.length" class="mt-6">
          <label class="inline-block bg-yellow text-white text-sm px-4 py-1 mb-2 ml-[40px] rounded">獎項</label>
          <BtSlider
            :sliderData="prize"
            :showNavigation="true"
            :params="{
              spaceBetween: 20,
              breakpoints: {
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
              },
            }"
          >
            <template v-slot:listItem="{ item, index }">
              <div class="cursor-pointer group" @click="handleClick(index)">
                <div class="relative">
                  <img :src="`${app.baseURL}${item.image}`" :alt="item.title">
                  <div class="absolute w-full h-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:md:opacity-100 transform duration-500 bg-black/70">
                    <div class="text-white text-sm border border-white px-4 py-2">了解更多</div>
                  </div>
                </div>
                <div class="pb-4 xl:pb-0">
                  <h3 class="text-lg font-bold mt-2">{{ item.title }}</h3>
                </div>
              </div>
            </template>
          </BtSlider>
        </div>

        <img class="hidden md:block absolute bottom-0 right-0 translate-x-3/4 translate-y-1/10" src="../../assets/images/adornment-potted2.png" alt="">
      </ContentBox>
    </div>

    <VueFinalModal
      v-model="showModal"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-lg max-h-[70vh] overflow-auto m-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg"
    >
      <div>
        <img class="mb-4" :src="`${app.baseURL}${activeData.image}`" :alt="activeData.title">
        <div class="text-lg font-bold pb-2 mb-2 border-b border-gray-400">
          {{ activeData.title }}
        </div>
        <div v-html="activeData.description" />
      </div>
    </VueFinalModal>

  </div>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'
import ContentBox from '../../layouts/ContentBox.vue'
import BtSlider from '../BtSlider.vue'

const props = defineProps({
  prize: {
    type: Array,
    default: []
  },
})
const { app } = useRuntimeConfig()
const bgImage = new URL(`../../assets/images/background.png`, import.meta.url).href

const stepBox = computed(() => (
  `flex items-center sm:w-1/2 md:px-8`
))

const showModal = ref(false)
const activeIndex = ref(null)
const activeData = computed(() => props.prize[activeIndex.value])
const handleClick = (index) => {
  activeIndex.value = index
  showModal.value = true
}

</script>
