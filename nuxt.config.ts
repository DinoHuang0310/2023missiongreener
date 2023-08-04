import { resolve } from 'path'
// import { defineNuxtModule } from 'nuxt'
// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development'
const publicPath = isDev ? '/' : '/bt_topic/2023/missiongreener/'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  },
  css: [
    'vue-final-modal/style.css',
    '~/assets/css/main.css',
  ],
  hooks: {
    'pages:extend' (pages) {
      // add a route
      pages.push({
        name: 'event',
        path: '/event',
        file: resolve(__dirname, './pages/index.vue'),
      })
      pages.push({
        name: 'signup',
        path: '/signup',
        file: resolve(__dirname, './pages/index.vue'),
      })
      pages.push({
        name: 'news',
        path: '/news',
        file: resolve(__dirname, './pages/index.vue'),
      })
      pages.push({
        name: 'flow',
        path: '/flow',
        file: resolve(__dirname, './pages/index.vue'),
      })
    }
  },
  app: {
    baseURL: publicPath,
    cdnURL: publicPath,
    head: {
      title: '2023 自綠生活節｜跨出自綠一小步，成就地球永續一大步！',
      meta: [
        { name: 'viewport', content: 'initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: '綠生活, 淨零, 永續, 循環經濟, 綠能, ESG'},
        { name: 'author', content: '今周刊' },
        { name: 'copyright', content: `©${new Date().getFullYear()} Business Today All rights reserved` },
        { name: 'description', content: '極端氣候和清也清不完的垃圾，都是不可逆的環境危機！ 請與今周刊一起採取 ACT NOW 10大行動，搶救脆弱的地球！ 9/16、9/17自綠生活節，邀你呼朋引伴來闖關、拿好禮，實踐永續綠生活。' },
        
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '2023 自綠生活節｜跨出自綠一小步，成就地球永續一大步！' },
        { property: 'og:description', content: '極端氣候和清也清不完的垃圾，都是不可逆的環境危機！ 請與今周刊一起採取 ACT NOW 10大行動，搶救脆弱的地球！ 9/16、9/17自綠生活節，邀你呼朋引伴來闖關、拿好禮，實踐永續綠生活。' },
        { property: 'og:image', content: `${ publicPath }ogimage.png` },
      ],
      link: [
        { rel: 'icon', href: `${ publicPath }favicon.ico` }
      ],
      script: [
        isDev ? {} : { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-4950332-1' },
        isDev ? {} : { children: `
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'UA-4950332-1');
        ` }
      ],
    },
  },
  ssr: false,
})
