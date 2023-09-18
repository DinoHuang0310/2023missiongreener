<template>
  <div class="relative">
    <header class="sticky top-0 flex items-center justify-between p-2 px-4 w-full bg-white z-20 border-b shadow">
      <div class="w-1/4 max-w-28">
        <a href="https://esg.businesstoday.com.tw/" target="blank">
          <img src="./assets/images/esg.businesstoday.svg" alt="今周刊-永續台灣ESG">
        </a>
      </div>
      <BtNavbar :navList="navList">
        <template v-slot:after>
          <div class="flex items-center space-x-2 p-2 lg:p-0 lg:ml-2">
            <a class="w-8" href="https://www.facebook.com/BToday/" target="blank">
              <img src="./assets/images/ico-facebook.svg" alt="btnet-facebook">
            </a>
            <a class="w-8" href="https://line.me/R/ti/p/%40btoday" target="blank">
              <img src="./assets/images/ico-line.svg" alt="btnet-line">
            </a>
            <a class="w-8" href="https://www.instagram.com/btoday_ig/" target="blank">
              <img src="./assets/images/ico-instagram.svg" alt="btnet-instagram">
            </a>
          </div>
        </template>
      </BtNavbar>
    </header>

    <div>
      <NuxtPage :info="data" />
    </div>

    <Organizer />
    <BtFooter class="relative" />
    
    <ModalsContainer />

    <VueFinalModal
      v-model="showModal"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-lg max-h-[70vh] overflow-auto m-4 p-4 bg-white border rounded-lg"
      :reserveScrollBarGap="false"
    >
      <article>
        <h3 class="text-center text-xl xl:text-2xl text-primary font-bold mb-4">今周刊自綠生活節 贈品更換聲明</h3>
        <div class="space-y-4">
          <p>致親愛的今周刊讀者：</p>
          <p>感謝各位熱情參與今周刊【2023自綠生活節】，響應永續精神!</p>
          <p>此次大會闖關禮品中的「綬草滋潤賦活乳」，因主辦單位沒有核查到廠商出貨批次之疏失，導致部分中獎民眾兌換到過期產品，對此，今周刊深感抱歉。</p>
          <p>我們即刻啟動贈品更換處理辦法，調配商品出貨給當日領到該獎項之讀者，未來也將加強針對禮品的品管與規範，再次感謝讀者們的支持，任何禮品問題歡迎與我們聯繫。</p>
          <div>
            <p class="text-lg text-primary font-bold mb-2">
              <span class="inline-block px-2 py-1 border border-primary">贈品更換處理辦法</span>
            </p>
            <ul class="text-left pl-6 list-disc space-y-2">
              <li>兌換辦法：凡於今周刊9/16-9/17【2023自綠生活節】中收到「綬草滋潤賦活乳」的民眾，請拍下產品瓶底有效期限照片，傳送至下方專人窗口，今周刊將盡速更換同品項或等值商品。</li>
              <li>聯繫窗口：陳小姐avachen@btnet.com.tw 02-2581-6196 #203</li>
            </ul>
          </div>
          <div class="text-center">
            <button class="btn w-full sm:w-1/3" @click="showModal = false">確定</button>
          </div>
        </div>
      </article>
    </VueFinalModal>
  </div>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'

import BtNavbar from './layouts/BtNavbar/Nav.vue'
import Organizer from './components/home/Organizer.vue'
import BtFooter from './layouts/BtFooter.vue'

import { ModalsContainer } from 'vue-final-modal'
import useClientConfig from './composables/useClientConfig'

const showModal = ref(false)

const { isDev } = useClientConfig()
const { data } = await useFetch(`${isDev ? '' : '.'}/static/data/info.json?${new Date().getTime()}`)

const navList = [
  {
    title: "首頁",
    url: "/",
    isRouter: true,
  },
  {
    title: "免「廢」闖關",
    url: "/event",
    isRouter: true,
  },
  {
    title: "主題特展",
    url: "/exhibition",
    isRouter: true,
  },
  {
    title: "戶外市集",
    url: "/market",
    isRouter: true,
  },
  {
    title: "沙龍講座",
    url: "/lecture",
    isRouter: true,
  },
  {
    title: "逆轉園遊會",
    url: data.value.linkOut,
    className: data.value.linkOut ? '' : 'hidden'
  },
  {
    title: "節目流程",
    url: "/flow",
    isRouter: true,
  },
  {
    title: "自綠‧更幸福",
    url: "/news",
    isRouter: true,
  },
  {
    title: "報名參加",
    url: "/signup",
    isRouter: true,
  },
];

onMounted(() => {
  showModal.value = true
})
</script>

<style>
body {
  font-family: 'Noto Sans TC', sans-serif, 'Microsoft JhengHei', arial;
  font-size: 16px;
  color: #505050
}
@media (min-width: 640px) {
  body {
    font-size: 17px;
  }
}
</style>