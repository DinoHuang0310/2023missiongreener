<template>
  <div class="relative py-16 sm:py-24 bg-secondary bg-repeat overflow-hidden" :style="{'background-image': `url(${bgImage})`}">
    <img class="absolute left-0 top-0 w-5/12 sm:w-1/4" src="../../assets/images/adornment-ribbon-left.png" alt="">
    <img class="absolute right-0 top-0 w-5/12 sm:w-1/4" src="../../assets/images/adornment-ribbon-right.png" alt="">

    <div class="container w-11/12">
      <h2 class="title text-center mb-16">免「廢」闖關</h2>
      <ContentBox class="relative p-4 md:p-8 2xl:py-12 rounded-tl-none sm:rounded-tl-none mb-24 sm:mb-32">
        <div class="absolute top-0 left-0 w-full sm:w-auto -translate-y-full bg-primary text-white sm:text-lg font-bold text-center px-4 py-2 pr-2 rounded-tl-md rounded-tr-md">
          闖關成功 換好禮！
        </div>
        <div class="text-center mb-8">
          <p>自綠生活節一起耍廢！​</p>
          <p>完成活動現場所有關卡，即可兌換好禮</p>
        </div>
        <div class="sm:flex sm:items-center space-y-6 sm:space-y-0">
          <div :class="stepBox">
            <img class="w-24 md:w-32" src="../../assets/images/event-step3.png" alt="step1. 現場報到，加闖關APP">
            <div class="flex-1 pl-6">
              <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">step1</label>
              <p>現場報到、加Line帳號</p>
            </div>
          </div>
          <div :class="stepBox">
            <img class="w-24 md:w-32" src="../../assets/images/event-step4.png" alt="step2. 完成關卡，兌換好禮">
            <div class="flex-1 pl-6">
              <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">step2</label>
              <p>完成所有關卡，兌換好禮！​</p>
            </div>
          </div>
        </div>

        <!-- <div v-if="prize.length" class="mt-6">
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
        </div> -->

        <img class="hidden md:block absolute bottom-0 right-0 translate-x-3/4 translate-y-1/10" src="../../assets/images/adornment-potted2.png" alt="">
      </ContentBox>

       
      <ContentBox class="relative p-4 md:p-8 2xl:py-12 rounded-tl-none sm:rounded-tl-none mb-8 sm:mb-32">
        <div class="absolute top-0 left-0 w-full sm:w-auto -translate-y-full bg-primary text-white sm:text-lg font-bold text-center px-4 py-2 pr-2 rounded-tl-md rounded-tr-md">
          自綠生活節吃喝玩樂悠遊付! 筆筆享最高12%
        </div>

        <div class="space-y-10">
          <div class="md:flex ms:items-center md:px-8">
            <div class="w-32 mx-auto">
              <img class="w-full" src="../../assets/images/event-step5.png" alt="活動一">
            </div>
            <div class="flex-1 md:pl-6">
              <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">活動一</label>
              <p>活動期間於「自綠生活節」活動店家使用悠遊付消費，筆筆享10%現金回饋，單筆回饋上限新臺幣(下同)50元，每人(戶)回饋上限200元。本活動總回饋金上限10萬元，送完為止。</p>
              <ul class="list-['※'] pl-5 mt-2 text-primary text-sm font-bold">
                <li>本活動可與<a class="underline" href="https://bit.ly/45dtY98" target="blank">「天天悠遊付筆筆回饋2%」</a>活動疊加，活動期間於「自綠生活節」活動店家使用悠遊付消費，每筆扣款最高享12%悠遊付回饋金。</li>
              </ul>
            </div>
          </div>

          <div class="md:flex ms:items-center md:px-8">
            <div class="w-32 mx-auto">
              <img class="w-full" src="../../assets/images/event-step6.png" alt="活動二">
            </div>
            <div class="flex-1 md:pl-6">
              <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">活動二</label>
              <p>民眾至「自綠生活節」活動現場的大會服務台出示悠遊付APP內的「我的減碳紀錄」，只要出示減碳量成果，送限定悠遊卡1張  (卡娜赫拉的小動物造型悠遊卡-新年如意、卡娜赫拉的小動物造型悠遊卡-祝福、高山巖福德宮發財悠遊卡三款隨機出貨，恕不挑選)。</p>
              <ul class="list-['※'] pl-5 mt-2 text-primary text-sm font-bold">
                <li>活動期間每人限贈1 張，每日限量100張，數量有限，送完為止。</li>
              </ul>
            </div>
          </div>
          
          <div class="md:px-8 space-y-2">
            <ul class="list-['★'] pl-5">
              <li>
                現在加入悠遊付新會員，即贈價值新台幣<a class="underline text-yellow" href="https://lihi2.com/Zzhz7" target="blank">300元迎新大禮包</a>
                <div class="w-1/2 sm:w-1/5 mx-auto my-2">
                  <a href="https://lihi2.com/JRbRj" target="blank"><img src="../../assets/images/easywallet-qrcode.jpg" alt="下載悠遊付"></a>
                  <p class="text-center">下載悠遊付</p>
                </div>
              </li>
              <li>回饋金達檻順序以交易日期時間之先後認定，先消費先享回饋。</li>
              <li>本活動適用悠遊付錢包/綁定銀行帳戶/綁定信用卡扣款，皆計入回饋金額計算。</li>
              <li>請下載/更新最新版本悠遊付APP，可查詢消費紀錄及回饋進度等資訊。(回饋進度查詢：APP首頁>點擊「筆筆享回饋」>進入活動列表>點擊本活動頁)</li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-6">
          <button class="btn" @click="showEventModal = !showEventModal">活動完整資訊</button>
        </div>
      </ContentBox>
     
    </div>

    <VueFinalModal
      v-model="showModal"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-lg max-h-[70vh] overflow-auto m-4 p-4 bg-white border rounded-lg"
      :reserveScrollBarGap="false"
    >
      <div>
        <img class="mb-4" :src="`${app.baseURL}${activeData.image}`" :alt="activeData.title">
        <div class="text-lg font-bold pb-2 mb-2 border-b border-gray-400">
          {{ activeData.title }}
        </div>
        <div v-html="activeData.description" />
      </div>
    </VueFinalModal>

    <VueFinalModal
      v-model="showEventModal"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-2xl max-h-[70vh] overflow-auto m-4 p-4 bg-white border rounded-lg"
      :reserveScrollBarGap="false"
    >
      <div class="space-y-2">
        <h4 class="text-xl text-primary font-bold">自綠生活節吃喝玩樂悠遊付! 筆筆享最高12%</h4>
        <p class="font-bold">活動期間：<br class="md:hidden"><span class="font-normal">2023/9/16 10:00~9/17 18:30 (六、日兩天)</span></p>
        <p class="font-bold">活動內容：</p>
        <div>
          <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">活動一</label>
          <p>活動期間於「自綠生活節」活動店家使用悠遊付消費，筆筆享10%現金回饋，單筆回饋上限新臺幣(下同)50元，每人(戶)回饋上限200元。本活動總回饋金上限10萬元，送完為止。</p>
          <div class="inline-block text-sm text-primary font-bold px-2 py-0.5 mt-1 border border-primary">
            本活動可與<a class="underline" href="https://bit.ly/45dtY98" target="blank">「天天悠遊付筆筆回饋2%」</a>活動疊加，活動期間於「自綠生活節」活動店家使用悠遊付消費，每筆扣款最高享12%悠遊付回饋金。
          </div>
        </div>
        <div>
          <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">活動二</label>
          <p>民眾至「自綠生活節」活動現場的大會服務台出示悠遊付APP內的「我的減碳紀錄」，只要出示減碳量成果，送限定悠遊卡1張 (卡娜赫拉的小動物造型悠遊卡-新年如意、卡娜赫拉的小動物造型悠遊卡-祝福、高山巖福德宮發財悠遊卡三款隨機出貨，恕不挑選)。</p>
          <div class="inline-block text-sm text-primary font-bold px-2 py-0.5 mt-1 border border-primary">
            活動期間每人限贈1 張，每日限量100張，數量有限，送完為止。
          </div>
        </div>
        <div class="sm:w-4/5 mx-auto">
          <img src="../../assets/images/event-prize.png" alt="">
        </div>
        <br>
        <ul class="list-['★'] pl-5">
          <li>
            現在加入悠遊付新會員，即贈價值新台幣<a class="underline text-yellow" href="https://lihi2.com/Zzhz7" target="blank">300元迎新大禮包</a>
            <div class="w-1/2 sm:w-1/3 mx-auto my-2">
              <a href="https://lihi2.com/JRbRj" target="blank"><img src="../../assets/images/easywallet-qrcode.jpg" alt="下載悠遊付"></a>
              <p class="text-center">下載悠遊付</p>
            </div>
          </li>
          <li>回饋金達檻順序以交易日期時間之先後認定，先消費先享回饋。</li>
          <li>本活動適用悠遊付錢包/綁定銀行帳戶/綁定信用卡扣款，皆計入回饋金額計算。</li>
          <li>請下載/更新最新版本悠遊付APP，可查詢消費紀錄及回饋進度等資訊。(回饋進度查詢：APP首頁>點擊「筆筆享回饋」>進入活動列表>點擊本活動頁)</li>
        </ul>
        <hr>
        <div class="font-bold">注意事項：</div>
        <ol class="list-decimal pl-6 my-4">
          <li>活動參加人於參加本活動之時，即同意接受本活動之活動辦法及注意事項，如有違反，主辦單位得取消其參加或回饋資格。(活動期間使用悠遊付消費之人，視同參加本活動，為活動參加人。)</li>
          <li>本活動依悠遊付交易扣款時間排序回饋，先扣款先得回饋，額滿即止，額滿於悠遊付 APP 本活動頁公告。(APP首頁>點擊「筆筆享回饋」按鈕>進入活動列表>點擊本活動頁) </li>
          <li>活動回饋依實際扣款金額計算，消費日逐筆扣款交易金額X10%後取小數點二位數，消費當日逐筆回饋金額加總後四捨五入至個位數，加總回饋金額於7日後(D+7)發送回饋金至悠遊付帳戶，請於悠遊付APP點選「我的」＞「交易紀錄」＞「收入」查詢悠遊卡公司通知之訊息。回饋時若悠遊付錢包儲值餘額加上回饋金達儲值額度上限，將無法完成回饋金發送，待悠遊付錢包釋出儲值額度後系統批次重送回饋金。活動期間如有負項交易(如退貨)，將計入回饋金額減項。提醒您妥善利用悠遊付相關服務理性消費。</li>
          <li>本活動最高享12%，係指如活動期間於「自綠生活節」活動店家以悠遊付消費可獲得之回饋計算之回饋率。範例：小悠在9/16(六)於適用悠遊付攤位以悠遊付單筆消費100元，可得「自綠生活節筆筆10%回饋」10元回饋金及「天天悠遊付筆筆2%回饋」2元回饋金。</li>
          <li>本活動回饋金若回饋時有下列任一情形無法完成入帳，視同放棄回饋資格：悠遊付帳戶失效、帳戶註銷、強制停用、刪除等或其他違反本活動注意事項。</li>
          <li>若悠遊付用戶因任何理由取消交易或交易無效，或因帳務爭議、虛偽交易，或其他違反誠信原則之方法取得上述活動資格者，悠遊卡公司將逕予以取消活動符合資格，且不另行通知。</li>
          <li>本活動如有任何因不可歸責於悠遊卡公司之事由，而使活動參加人之資料有遺失、錯誤、未回傳、無法辨識或毀損所導致資料無效之情況，悠遊卡公司不負任何責任與不負通知義務，參與本活動者不得異議。</li>
          <li>悠遊卡公司為本活動主辦單位，相關活動辦法及注意事項，如有疑義或爭議，主辦單位有最終解釋權及決定權，且保留對本活動之參加資格、回饋、贈送資格等最後審核權。本活動辦法及注意事項如有未盡事宜，主辦單位得隨時補充、修正或變更，且以主辦單位官網最新公告為主。</li>
          <li>活動參加人同意，如因不可抗力或特殊事由致活動辦法或注意事項無法執行，悠遊卡公司有權隨時取消、終止、修改或暫停本活動。</li>
          <li>活動參加人如對本活動有任何疑問，歡迎洽<a class="text-yellow underline" href="https://chatbot.easycard.com.tw/chatbot/#/robotchat?platform=QR" target="blank">24小時智能客服小幫手嗶寶</a>(每日09:00~18:00提供真人文字客服)，我們將竭誠為您服務。</li>
        </ol>
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

const showEventModal = ref(false)

</script>
