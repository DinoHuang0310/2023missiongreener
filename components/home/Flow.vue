<template>
  <div class="bg-secondary bg-repeat py-16 sm:py-24" :style="{'background-image': `url(${bgImage})`}">
    <div class="container w-11/12 xl:w-full">
      <h2 class="title text-center mb-8 sm:mb-16">節目流程</h2>
      
      <ul class="flex space-x-1">
        <li
          class="text-white cursor-pointer px-8 py-2"
          :class="activeTab === 916 ? 'bg-primary' : 'bg-gray-500 bg-opacity-50'"
          @click="activeTab = 916"
        >9/16</li>
        <li
          class="text-white cursor-pointer px-8 py-2"
          :class="activeTab === 917 ? 'bg-primary' : 'bg-gray-500 bg-opacity-50'"
          @click="activeTab = 917"
        >9/17</li>
      </ul>
      <table class="mt-1 w-full mb-16 text-sm sm:text-base">
        <thead>
          <tr>
            <th class="w-1/2 tracking-widest">華山西一館</th>
            <th class="w-1/2 tracking-widest">自綠體驗區+逆轉舞台</th>
          </tr>
        </thead>

        <!-- 9/16 -->
        <tbody v-if="activeTab === 916" v-html="flow0916" />

        <!-- 9/17 -->
        <tbody v-if="activeTab === 917" v-html="flow0917" />
        
      </table>

      <SwitchBtn @handleSwitchVal="val => activeSwitch = val" :option="switchOption" />
      <div v-if="activeSwitch === 'speakers'">
        <BtSlider :sliderData="speakers" :showNavigation="true">
          <template v-slot:listItem="{ item }">
            <div class="text-center cursor-pointer" @click="activeSpeaker = item.id">
              <div class="rounded-full overflow-hidden mx-8 md:mx-0">
                <img :src="`${app.baseURL}${item.image}`" :alt="item.name">
              </div>
              <h3 class="font-bold text-xl mt-2">{{ item.name }}</h3>
              <p class="font-bold text-primary">{{ item.title }}</p>
              <p>{{ item.lecture }}</p>
            </div>
          </template>
        </BtSlider>
      </div>

      <div v-if="activeSwitch === 'entertainer'">
        <BtSlider v-if="entertainers.length" :sliderData="entertainers" :showNavigation="true">
          <template v-slot:listItem="{ item }">
            <div class="text-center cursor-pointer" @click="activeEntertainers = item.id">
              <div class="rounded-full overflow-hidden mx-8 md:mx-0">
                <img :src="`${app.baseURL}${item.image}`" :alt="item.name">
              </div>
              <h3 class="font-bold text-xl mt-2">{{ item.name }}</h3>
              <p class="font-bold text-primary">{{ item.title }}</p>
            </div>
          </template>
        </BtSlider>
        <div v-else class="text-center text-xl py-8 xl:py-16">
          <span class="inline-block text-primary border-2 border-primary px-4 py-2">敬請期待</span>
        </div>
      </div>
    </div>

    <!-- popup -->
    <VueFinalModal
      v-model="showModal"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-sm max-h-3/4 overflow-auto m-4 p-4 bg-white border rounded-lg"
      @beforeClose="closeModal"
      :reserveScrollBarGap="false"
    >
      <div>
        <div class="w-2/3 mx-auto mb-4">
          <div class="rounded-full overflow-hidden">
            <img :src="`${app.baseURL}${activeData.image}`" :alt="activeData.name">
          </div>
        </div>
        
        <h4 class="text-xl text-center font-bold mb-2">{{ activeData.name }}</h4>
        <p v-html="activeData.description"></p>
      </div>
    </VueFinalModal>
  </div>
</template>

<script setup>
import SwitchBtn from '../SwitchBtn.vue'
import useSpeakers from '../../composables/useSpeakers'
import BtSlider from '../BtSlider.vue'
import useClientConfig from '../../composables/useClientConfig'

import { VueFinalModal } from 'vue-final-modal'

const { isDev } = useClientConfig()
const { app } = useRuntimeConfig()
const showModal = ref(false)

const bgImage = new URL(`../../assets/images/background.png`, import.meta.url).href

const { data: flow0916 } = await useFetch(`${isDev ? '' : '.'}/static/flow/flow0916.html?${new Date().getTime()}`)
const { data: flow0917 } = await useFetch(`${isDev ? '' : '.'}/static/flow/flow0917.html?${new Date().getTime()}`)

const activeTab = ref(916)

const { speakers, getSpeakers, entertainers, getEntertainers } = useSpeakers()
const activeSwitch = ref('speakers')
const switchOption = {
  left: {
    name: '講師介紹',
    value: 'speakers'
  },
  right: {
    name: '表演團體介紹',
    value: 'entertainer'
  }
}

const activeSpeaker = ref(null)
const activeEntertainers = ref(null)
watch([
  () => activeSpeaker.value,
  () => activeEntertainers.value
], ([val, val2]) => {
  if (val || val2) showModal.value = true
})

const activeData = computed(() => {
  return activeSwitch.value === 'speakers' ?
    speakers.value.find(i => i.id === activeSpeaker.value) :
    entertainers.value.find(i => i.id === activeEntertainers.value)
})

const closeModal = () => {
  activeSpeaker.value = null
  activeEntertainers.value = null
}

onMounted(() => {
  getSpeakers()
  getEntertainers()
})

</script>

<style>
#flow th, #flow td {
  padding: 0.4rem 0.6rem;
  border-collapse: collapse;
  border: solid 1px #ccc;
}
#flow th {
  background: var(--color-primary);
  color: white;
  text-align: left;
}
#flow td {
  background: white;
}

@media (min-width: 640px) {
  #flow th, #flow td {
    padding: 0.6rem 1rem;
  }
}

.time-wrapper {
  @apply text-sm whitespace-nowrap font-normal pt-1;
}
.td-content {
  @apply sm:flex-1 sm:pl-4;
}
.label-lecture {
  @apply inline-block text-sm px-2 py-1 my-1 sm:my-0 bg-primary text-white rounded-full;
}
.label-liveShow {
  @apply inline-block text-sm px-2 py-1 my-1 sm:my-0 bg-yellow text-white rounded-full;
}
.event-name {
  @apply block sm:inline-block font-bold;
}
</style>