<template>
  <footer class="text-center px-4 py-8" style="background: #4b4b4b">
    <div class="space-y-1 text-sm text-white">
      <p>內容監製: 今周刊</p>
      <p>專題製作:｜今周刊 數位內容部</p>
      <p>Copyright © {{ year }} 今周刊.All rights reserved. 版權所有，禁止擅自轉貼節錄</p>
    </div>
    
    <div v-if="showFloatButton" class="fixed right-1 top-1/2 -translate-y-1/2 z-10">
      <button
        v-show="isHomePage"
        class="flex items-center justify-center bg-primary px-2 py-4 rounded-full border border-white"
        @click="showModal = true"
      >
        <img class="block w-5 text-white" src="../assets/images/notice.svg" alt="signup">
      </button>
      <a
        href="https://social-plugins.line.me/lineit/share?url=https://www.businesstoday.com.tw/bt_topic/2023/missiongreener/"
        target="blank"
      >
        <img class="w-9 mt-1 mx-auto" src="../assets/images/ico-line-share.svg" alt="分享到Line">
      </a>
      
      <!-- <button class="flex items-center justify-center" @click="useScrollTo(0)">
        <span class="relative bg-primary w-10 h-10 rounded-full scale-110 border border-white">
          <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 rotate-45 w-4 h-4 border-t-2 border-l-2 border-white" />
        </span>
      </button> -->
    </div>

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
    
  </footer>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
import { computed } from 'vue';
import useClientSize from '../composables/useClientSize';
import useWindowScroll from '../composables/useWindowScroll';
import useScrollTo from '../composables/useScrollTo';

export default {
  props: {
    showFloat: {
      type: Boolean,
      default: true
    }
  },

  components: {
    VueFinalModal
  },

  setup(props) {
    const year = new Date().getFullYear();
    const { height } = useClientSize();
    const { scrollTop } = useWindowScroll();

    const showModal = ref(false)

    const route = useRoute()
    const homePagePath = ['/', '/event', '/flow', '/signup', '/news']
    const isHomePage = computed(() => homePagePath.some(i => i === route.path))

    const showFloatButton = computed(() => {
      return props.showFloat && scrollTop.value > height.value / 2;
    })

    const toSignup = () => {
      useScrollTo(document.getElementById('signup').offsetTop)
    }
    
    return {
      year,
      showFloatButton,
      useScrollTo,
      toSignup,
      isHomePage,
      showModal,
    }
  }
  
}
</script>
