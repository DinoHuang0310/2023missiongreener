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
  </div>
</template>

<script setup>
import BtNavbar from './layouts/BtNavbar/Nav.vue'
import Organizer from './components/home/Organizer.vue'
import BtFooter from './layouts/BtFooter.vue'

import { ModalsContainer } from 'vue-final-modal'
import useClientConfig from './composables/useClientConfig'

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