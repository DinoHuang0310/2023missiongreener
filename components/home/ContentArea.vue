<template>
  <div class="bg-white bg-repeat" :style="{'background-image': `url(${bgImage})`}">

    <div :class="areaBox" ref="exhibitionRef">
      <div class="relative z-10 sm:w-1/2 text-center sm:text-right p-4 sm:px-8">
        <h2 class="title mb-4">主題特展</h2>
        <p>展現自綠行動力</p>
        <p class="mb-6">看看他們的小動作，帶給地球大大的改變！</p>
        <NuxtLink class="btn" to="/exhibition">了解更多</NuxtLink>
      </div>
      <div class="sm:w-1/2">
        <div class="relative pb-[60%]">
          <img
            ref="exhibitionImg"
            class="absolute max-w-none w-[120%] sm:w-[110%] bottom-0 sm:bottom-auto sm:top-1/2 translate-y-12 sm:-translate-y-1/2 -translate-x-1/2 sm:translate-x-0 left-1/2 sm:left-0"
            src="../../assets/images/content-area1.png"
          >
        </div>
      </div>
    </div>

    <div :class="areaBox" class="sm:flex-row-reverse" ref="exhibitionRef">
      <div class="relative z-10 sm:w-1/2 text-center sm:text-left p-4 sm:px-8">
        <h2 class="title mb-4">戶外市集</h2>
        <p>為地球永續買單</p>
        <p class="mb-6">體驗循環容器、減少廢棄物的綠色消費</p>
        <NuxtLink class="btn" to="/market">了解更多</NuxtLink>
      </div>
      <div class="sm:w-1/2">
        <div class="relative pb-[60%]">
          <img
            ref="exhibitionImg"
            class="absolute max-w-none w-[120%] sm:w-[100%] bottom-0 sm:bottom-0 sm:top-1/2 translate-y-12 sm:-translate-y-1/2 -translate-x-1/2 sm:-translate-x-12 left-1/2 sm:left-auto sm:right-0"
            src="../../assets/images/content-area2.png"
          >
        </div>
      </div>
    </div>

    <div :class="areaBox" ref="exhibitionRef">
      <div class="relative z-10 sm:w-7/12 lg:w-1/2 text-center sm:text-right p-4 sm:px-2 md:px-8">
        <h2 class="title mb-4">沙龍講座</h2>
        <p>想要實踐自綠卻不知道如何起步？</p>
        <p class="mb-4">從手作小物、視覺影象、經驗分享，打造屬於你的自綠行動</p>
        <div class="sm:flex sm:justify-end mb-4 text-primary font-bold">
          <ul v-for="list in dateLectures" :key="list.index">
            <li
              v-for="item in list"
              :key="item.index"
              class="mb-1 sm:px-4"
            >
              <span class="relative">
                <span class="sm:absolute sm:top-2 sm:-right-4 inline-block w-3 h-3 bg-primary" />
                {{ item.lecture }}
              </span>
            </li>
          </ul>
        </div>
        <NuxtLink class="btn inline-block" to="/lecture#signup">立即報名</NuxtLink>
      </div>
      <div class="flex-1">
        <div class="relative pb-[60%]">
          <img
            ref="exhibitionImg"
            class="absolute max-w-none w-[120%] sm:w-[110%] bottom-0 sm:bottom-auto sm:top-1/2 translate-y-12 sm:-translate-y-1/2 left-0 -translate-x-[15%] sm:translate-x-0"
            src="../../assets/images/content-area3.png"
          >
        </div>
      </div>
    </div>

    <div :class="areaBox" class="border-b sm:flex-row-reverse" ref="exhibitionRef">
      <div class="relative z-10 sm:w-1/2 text-center sm:text-left p-4 sm:px-8">
        <h2 class="title mb-4">逆轉園遊會</h2>
        <p>「我敢，我可以！」</p>
        <p class="mb-6 xl:pr-[20%]">近40家社福機構，透過舞台表演、DIY體驗、市集展攤，<br>展現逆轉人生的璀璨生命力與永續理念，快來參加與我們共同建立善的循環。</p>
        <a
          v-if="linkOut"
          class="btn"
          :href="linkOut"
          target="blank"
        >了解更多</a>
      </div>
      <div class="sm:w-1/2">
        <div class="relative pb-[60%]">
          <img
            ref="exhibitionImg"
            class="absolute max-w-none w-[120%] sm:w-[100%] bottom-0 sm:bottom-0 sm:top-1/2 translate-y-12 sm:-translate-y-1/2 -translate-x-1/2 sm:-translate-x-12 left-1/2 sm:left-auto sm:right-0"
            src="../../assets/images/content-area4.png"
          >
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import useClientSize from '../../composables/useClientSize'
import useSpeakers from '../../composables/useSpeakers'

// gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  linkOut: {
    type: String,
    default: ''
  },
})

// const { height, isMobile } = useClientSize()

const bgImage = new URL(`../../assets/images/background.png`, import.meta.url).href

const exhibitionRef = ref(null)
const exhibitionImg = ref(null)

const areaBox = computed(() => (
  'sm:flex items-center overflow-hidden border-t border-gray-300 py-8 sm:py-0'
))

const { speakers, getSpeakers, lectures } = useSpeakers()

const dateLectures = computed(() => {
  return [
    lectures.value.filter(i => i.time.includes('9/16')),
    lectures.value.filter(i => i.time.includes('9/17')),
  ]
  // speakers中會有重複的講座場次, 先用reduce取出同日期的講座名稱後, 再用new Set排除重複
  // const lectures916 = speakers.value.reduce((prev, item) => {
  //   return item.time.includes('9/16') ? prev.concat(item.lecture) : prev
  // }, [])
  // const lectures917 = speakers.value.reduce((prev, item) => {
  //   return item.time.includes('9/17') ? prev.concat(item.lecture) : prev
  // }, [])
  // return [
  //   [...new Set(lectures916)],
  //   [...new Set(lectures917)]
  // ]
})

onMounted(getSpeakers)
// onMounted(() => {
//   setTimeout(() => {
//     if (!isMobile.value) {
//       gsap.fromTo(exhibitionImg.value, {
//         top: 100,
//         // left: 50
//       },
//       {
//         top: -100,
//         // left: 0,
//         scrollTrigger: {
//           trigger: exhibitionRef.value, // 觸發得物件
//           start: 'top bottom', // (物件開始位置, 卷軸開始位置) top center bottom px
//           end: `+=${height.value}`, // (物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
//           // pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
//           scrub: true, // 物件動畫根據卷軸捲動程度跑
//           // toggleClass: "active", // 增加移除的class，class名稱須為字串
//           // markers: true // 顯示標記
//         }
//       })
//     }
//   }, 1000);
// })

</script>