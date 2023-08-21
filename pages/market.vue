<template>
  <div class="relative bg-secondary bg-repeat overflow-hidden" :style="{'background-image': `url(${bgImage})`}">
    <img
      class="absolute top-0 right-0 w-2/3 sm:w-1/2 lg:w-1/3"
      src="../assets/images/kv-adornment.png"
      alt="adornment-light"
    >

    <div class="container w-11/12 pb-32">
      <div class="pt-[100%] sm:pt-[70%] md:pt-[50%] xl:pt-[60%]">
        <ContentBox class="relative p-4 sm:p-6 md:p-8 2xl:py-12">
          <div class="absolute w-full xl:w-[120%] top-0 left-0 xl:-left-[10%] -translate-y-[60%]">
            <img class="w-full sm:w-4/5 md:w-3/4 mr-auto" src="../assets/images/content-area2.png" alt="戶外市集">

            <div class="absolute w-11/12 sm:w-2/3 md:w-[45%] top-0 left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 -translate-y-[120%] md:-translate-y-1/2">
              <img src="../assets/images/event-title.png" alt="2023自綠生活節">
              <img class="w-3/5 mt-2 mx-auto md:mr-4" src="../assets/images/event-sub.png" alt="今周刊/ACTNOW">
            </div>
          </div>
          <img class="hidden sm:block absolute right-[5%] w-[6%] -translate-y-3/4" src="../assets/images/adornment-tree2.png" alt="adornment-tree">
          <img class="hidden md:block absolute bottom-0 right-0 translate-x-3/4 translate-y-1/10" src="../assets/images/adornment-potted2.png" alt="adornment-balloon">
          
          <div>
            <div class="text-center mb-8">
              <h1 class="title text-center mt-[28%] sm:mt-[25%] mb-4 xl:mb-8">戶外市集</h1>
              <p>為地球永續買單</p>
              <p>體驗循環容器、減少廢棄物的綠色消費</p>
            </div>
            
            <ul class="flex flex-wrap">
              <li
                v-for="list in market"
                :key="list.id"
                class="w-full sm:w-1/2 md:w-1/3 p-4 sm:p-6 md:p-4 xl:p-8 cursor-pointer group"
                @click="handleClick(list.id)"
              >
                <div class="relative">
                  <img :src="`${app.baseURL}${list.image}`" :alt="list.title">
                  <div class="absolute w-full h-full top-0 left-0 flex justify-center items-center opacity-0 group-hover:md:opacity-100 transform duration-500 bg-black/70">
                    <div class="text-white text-sm border border-white px-4 py-2">了解更多</div>
                  </div>
                </div>
                
                <div class="pb-4 xl:pb-0">
                  <h3 class="text-lg font-bold mt-2">{{ list.title }}</h3>
                  <p class="text-base">{{ list.eventName }}</p>
                  <hr class="mt-2 mb-1">
                  <div class="text-primary text-sm font-bold">
                    {{ renderTagName(list.tags) }}
                  </div>
                  <div class="sm:hidden text-white text-center text-sm bg-primary w-full px-4 py-2 mx-auto mt-2 rounded-full">了解更多</div>
                </div>
              </li>
            </ul>
          </div>
        </ContentBox>
      </div>
    </div>

    <!-- popup -->
    <VueFinalModal
      v-model="showModal"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-lg max-h-[70vh] overflow-auto m-4 p-4 pt-0 bg-white border rounded-lg"
    >
      <div class="flex justify-between bg-white sticky top-0 py-4 pb-2">
        <div class="w-1/2 sm:w-2/5">
          <div
            class="pb-[20%] bg-contain bg-left bg-no-repeat"
            :style="{'background-image': `url('${app.baseURL}${activeData.logo}')`}"
            :alt="`${activeData.title}-logo`"
          />
          <!-- <img class="w-full" :src="activeData.logo" :alt="`${activeData.title}-logo`"> -->
        </div>
        
        <button class="relative w-10 h-10" @click="showModal = !showModal">
          <div class="absolute left-0 w-10 rotate-45 border-gray-500 border-b" />
          <div class="absolute left-0 w-10 -rotate-45 border-gray-500 border-b" />
        </button>
      </div>

      <!-- <div
        class="mb-4 pb-[60%] bg-cover bg-center"
        :style="{'background-image': `url(${app.baseURL}${activeData.contentImage})`}"
      /> -->
      <img class="mb-4" :src="`${app.baseURL}${activeData.contentImage}`" :alt="activeData.title">
      <div class="text-lg xl:text-xl font-bold pb-2 mb-4 border-b border-gray-400">
        {{ `${activeData.title}${activeData.eventName && ' | ' + activeData.eventName}` }}
      </div>

      <div class="space-y-3">
        <article v-if="activeData.content.org">
          <h4 class="mb-1">
            <span class="inline-block bg-primary text-white px-2 py-1 rounded">品牌介紹</span>
          </h4>
          <div v-html="activeData.content.org"></div>
        </article>

        <article v-if="activeData.content.missiongreener">
          <h4 class="mb-1">
            <span class="inline-block bg-primary text-white px-2 py-1 rounded">自綠宣言</span>
          </h4>
          <div v-html="activeData.content.missiongreener"></div>
        </article>

        <div v-if="activeData.content.link.length">
          <h4 class="mb-1">
            <span class="inline-block bg-primary text-white px-2 py-1 rounded">官方網站</span>
          </h4>
          <p v-for="link in activeData.content.link" :key="link.index">
            <a class="underline break-all" :href="link" target="blank">{{ link }}</a>
          </p>
        </div>
      </div>
    </VueFinalModal>
  </div>
</template>

<script setup>
import ContentBox from '../layouts/ContentBox.vue'
import { VueFinalModal } from 'vue-final-modal'
import useClientConfig from '../composables/useClientConfig'

const { app } = useRuntimeConfig()
const bgImage = new URL(`../assets/images/background.png`, import.meta.url).href

const showModal = ref(false)
const activeId = ref('')
const activeData = computed(() => {
  return market.value.find(i => i.id === activeId.value)
})

const error = ref(false)
const { isDev } = useClientConfig()
const fetchUrl = `${ isDev ? '' : '.' }/static/data/market.json?${new Date().getTime()}`

const { data: market } = await useFetch(fetchUrl, {
  onResponse({ response }) {
    if (!Array.isArray(response._data)) {
      error.value = true
    }
  },
})

const renderTagName = (arr) => {
  return arr.reduce((prev, item, index) => {
    return index === 0 ? prev += `#${item}` : prev += ` #${item}`
  }, '')
}

const handleClick = (id) => {
  activeId.value = id
  showModal.value = true
}

</script>
