<template>
  <div class="relative bg-secondary bg-repeat overflow-hidden" :style="{'background-image': `url(${bgImage})`}">
    <img
      class="absolute top-0 right-0 w-2/3 sm:w-1/2 lg:w-1/3"
      src="../assets/images/kv-adornment.png"
      alt="adornment-light"
    >

    <div class="container w-11/12 pb-32">
      <div class="pt-[100%] sm:pt-[70%] md:pt-[40%] xl:pt-[50%]">
        <ContentBox class="relative p-4 sm:p-6 md:p-8 2xl:py-12">
          <div class="absolute w-full xl:w-[120%] top-0 left-0 xl:-left-[10%] -translate-y-[60%]">
            <img class="w-full sm:w-4/5 md:w-3/4 ml-auto" src="../assets/images/content-area3.png" alt="沙龍講座">

            <div class="absolute w-11/12 sm:w-2/3 md:w-[45%] top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-1/10 -translate-y-[120%] md:-translate-y-0">
              <img src="../assets/images/event-title.png" alt="2023自綠生活節">
              <img class="w-3/5 mt-2 mx-auto md:ml-0" src="../assets/images/event-sub.png" alt="今周刊/ACTNOW">
            </div>
          </div>
          <img class="hidden sm:block absolute w-1/5 -translate-x-2/3" src="../assets/images/adornment-knitting.png" alt="adornment-knitting">
          <img class="hidden md:block absolute bottom-0 right-0 translate-x-3/4 translate-y-1/10" src="../assets/images/adornment-potted2.png" alt="adornment-balloon">
          
          <div>
            <div class="text-center mb-4 xl:mb-8">
              <h1 class="title text-center mt-[28%] sm:mt-[25%] mb-4 xl:mb-8">沙龍講座</h1>
              <p>想要實踐自綠卻不知道如何起步？</p>
              <p>從手作小物、視覺影象、經驗分享，打造屬於你的自綠行動</p>
            </div>

            <div class="text-center">
              <button class="btn" @click="scrollToSignup">立即報名</button>
            </div>
            
            <ul class="space-y-8 md:space-y-12 py-6 xl:py-8 xl:px-12">
              <li
                v-for="list in speakers"
                :key="list.id"
                class="relative"
              >
                <!-- shadow -->
                <div class="absolute w-4/5 h-8 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/5 rounded-[100%] bg-black/40 blur-sm md:blur-md" />

                <div class="relative sm:flex items-start border border-gray-300 rounded-xl bg-white p-4 md:py-6 md:px-8">
                  <div class="w-2/3 sm:w-1/4 md:w-1/5 mx-auto rounded-full overflow-hidden">
                    <img :src="`${app.baseURL}${list.image}`" :alt="list.name">
                  </div>
                  <div class="flex-1 sm:pl-6 md:pl-12 mt-3 sm:mt-0">
                    <div class="sm:flex justify-between items-center text-center sm:text-left">
                      <h3 class="text-xl md:text-2xl font-bold sm:-ml-4 mb-2 sm:mb-0">「{{ list.lecture }}」</h3>
                      <span class="inline-block tracking-widest sm:tracking-normal md:tracking-widest text-sm text-white bg-primary px-4 sm:px-3 md:px-4 py-1 md:py-2 rounded-full">
                        {{ list.time }}
                      </span>
                    </div>

                    <div class="sm:block" :class="isMobile && activeId === list.id ? 'block' : 'hidden'">
                      <hr class="my-3 border-gray-300">
                      <div class="sm:flex items-center font-bold mb-2">
                        <div class="text-xl mr-4">{{ list.name }}</div>
                        <div class="text-primary">{{ list.title }}</div>
                      </div>
                      <article v-html="list.description" />
                    </div>
                    <button class="sm:hidden relative w-full h-6" @click="handleClick(list.id)">
                      <span
                        :class="activeId === list.id ? 'rotate-45 -translate-y-1/4' : 'rotate-225 -translate-y-1/2'"
                        class="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 border-t-2 border-l-2 border-primary"
                      />
                    </button>
                    
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </ContentBox>

        <Signup id="signup" />
        
      </div>
    </div>

  </div>
</template>

<script setup>
import ContentBox from '../layouts/ContentBox.vue'
import Signup from '../components/lecturePage/Signup.vue'
import useSpeakers from '../composables/useSpeakers'
import useClientSize from '../composables/useClientSize'

import useScrollTo from '../composables/useScrollTo'

const { app } = useRuntimeConfig()
const bgImage = new URL(`../assets/images/background.png`, import.meta.url).href

const { isMobile } = useClientSize()
const { speakers, getSpeakers, lectures } = useSpeakers()

const activeId = ref('')
const handleClick = (id) => {
  activeId.value = activeId.value === id ? '' : id
}

const scrollToSignup = () => {
  useScrollTo(document.getElementById('signup').offsetTop)
}

onMounted(getSpeakers)

</script>
