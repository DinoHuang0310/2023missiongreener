<template>
  <div>
    <div class="relative w-full h-[65vh] sm:h-[100vh]">
      <img class="absolute top-0 right-0 w-2/3 sm:w-1/2 lg:w-1/3" src="../../assets/images/kv-adornment.png" alt="">
      <h1 class="relative top-[10vh] mx-auto w-11/12 sm:w-1/2" style="max-width: 720px">
        <img src="../../assets/images/event-title.png" alt="2023自綠生活節">
        <img class="w-3/5 mx-auto" src="../../assets/images/event-sub.png" alt="今周刊/ACTNOW">
      </h1>
    </div>

    <div class="flex justify-center mb-56">
      <ContentBox class="p-6 space-y-6 max-w-11/12 sm:max-w-2/3 tracking-widest">
        <div>
          <p class="first-letter:text-2xl">過度使用化石燃料與極端氣候已造成不可逆的環境危機！</p>
          <p>乾旱、洪水、融化的冰層和海洋廢棄物，</p>
          <p>在在威脅著生活在地球上的人類與其它物種生命。</p>
        </div>
        <p>我們必須即刻採取行動，搶救脆弱的地球！</p>
        <div>
          <p>今周刊以聯合國ACT NOW【10大個人氣候變遷行動】作為行動基底，</p>
          <p>2022年發起第一屆<span class="font-bold text-primary">「自綠生活節」</span>，作為邁向永續生活的第一步，</p>
          <p>邀請你一同從食、衣、住、行、育、樂的日常中，實踐淨零永續。</p>
        </div>
      </ContentBox>
      
    </div>

    <div class="flex flex-wrap justify-center mb-56">
      <ul
        v-for="ul in items"
        :key="ul.index"
        class="flex flex-wrap justify-around px-4 sm:px-0 sm:justify-center w-11/12 sm:w-full"
      >
        <li
          v-for="(list, index) in ul"
          :key="index"
          class="w-2/5 sm:w-1/4 sm:mx-4 my-2 cursor-pointer max-w-[150px]"
          @click="handleClick(list.id)"
        >
          <img :src="list.image" :alt="list.title">
        </li>
      </ul>

      <!-- popup -->
      <VueFinalModal
        v-model="showModal"
        class="flex justify-center items-center"
        content-class="flex flex-col max-w-sm max-h-3/4 overflow-auto m-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg"
        :reserveScrollBarGap="false"
      >
        <div class="p-4 py-8">
          <!-- <div class="w-2/3 mx-auto mb-4 max-w-[150px]">
            <img :src="activeData.image" :alt="activeData.title">
          </div> -->
          <h4 class="text-primary text-xl text-center font-bold">
            {{ activeData.id }}.「{{ activeData.title }}」
          </h4>
          <p class="text-center my-2">
            <span class="inline-block bg-yellow px-2 xl:px-3 py-0.5 text-base text-white rounded-full">{{ activeData.subtitle }}</span>
          </p>
          <!-- <p class="text-yellow text-base text-center mb-2">{{ activeData.subtitle }}</p> -->
          <p v-html="activeData.description"></p>
        </div>
      </VueFinalModal>
    </div>

    <div class="mb-56 container w-11/12">
      <ContentBox class="p-4 lg:p-6 pb-10 lg:pb-10 lg:px-10 space-y-5 tracking-widest">
        <div>
          <h4 class="inline-block text-xl font-bold mr-2">活動時間:</h4>
          <span class="inline-block">2023/09/16(六){{ width > 640 ? '~' : ' 10:00-18:30\n' }}2023/09/17(日) 10:00-18:30</span>
        </div>
        <div>
          <h4 class="inline-block text-xl font-bold mr-2">活動地點:</h4>
          <span class="inline-block">華山文創園區 西1館、北側綠地草原</span>
        </div>
        <h4 class="text-xl font-bold text-yellow">活動免費入場</h4>
        <hr>
        <div>
          <h4 class="text-xl font-bold">自綠活動說明:</h4>
          <ul class="text-left pl-6 list-disc space-y-2">
            <li>
              <p>於活動日前線上報名參加「自綠生活節」，再於活動當日現場完成報到，即可獲得早鳥預約好禮。​</p>
              <p class="inline-block text-sm text-primary font-bold px-2 py-0.5 mt-1 border border-primary tracking-normal xl:tracking-widest">線上報名截止時間: 2023/9/15 23:59</p>
            </li>
            <li>
              <p>凡於活動當日現場完成報名、報到，即可獲得抽萬元好禮資格！​</p>
              <p class="inline-block text-sm text-primary font-bold px-2 py-0.5 mt-1 border border-primary tracking-normal xl:tracking-widest">中獎者須在現場</p>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-xl font-bold mb-4">早鳥預約報名:</h4>
          <div class="sm:flex sm:items-center space-y-6 sm:space-y-0">
            <div :class="stepBox">
              <img class="w-1/3" src="../../assets/images/event-step1.png" alt="step1. 線上報名，取得序號">
              <div class="flex-1 pl-6">
                <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">step1</label>
                <p>線上立即報名、填資料</p>
              </div>
            </div>
            <div :class="stepBox">
              <img class="w-1/3" src="../../assets/images/event-step4.png" alt="step2. 現場報到">
              <div class="flex-1 pl-6">
                <label class="inline-block bg-yellow text-white text-sm px-2 py-1 mb-1 rounded">step2</label>
                <p>現場報到，核對資料，報到完成即可獲得早鳥禮​</p>
              </div>
            </div>
          </div>
        </div>
      </ContentBox>
      <div class="flex justify-center mt-4">
        <button
          class="text-xl xl:text-2xl text-white px-8 py-2 rounded-full bg-primary border border-white tracking-widest"
          @click="toSignup"
        >立刻報名</button>
      </div>
    </div>

    <div class="flex justify-center mb-36">
      <ContentBox class="w-11/12 sm:w-2/3 lg:w-1/2 p-2 sm:p-4">
        <BtYouTubePlayer videoId="aBU6f1Gq_g0" />
      </ContentBox>
    </div>

  </div>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'

import useClientSize from '../../composables/useClientSize'
import useScrollTo from '../../composables/useScrollTo'
import ContentBox from '../../layouts/ContentBox.vue'
import BtYouTubePlayer from '../BtYouTubePlayer/Player.vue'

export default {
  components: {
    ContentBox,
    BtYouTubePlayer,
    VueFinalModal
  },
  setup() {
    const { width, isMobile } = useClientSize(768)

    const showModal = ref(false)
    const activeId = ref(null)
    const handleClick = (id) => {
      activeId.value = id
      showModal.value = true
    }
    const activeData = computed(() => slogans.find(i => i.id === activeId.value))

    const slogans = [
      {
        id: '1',
        title: '節電第一',
        subtitle: 'Save energy at home',
        image: new URL(`../../assets/images/event-purpose1.png`, import.meta.url).href,
        description: '台灣家用電力目前90%以上，還是由傳統石化能源供應，減少家庭用電，永遠是自綠人生的第一步。多用LED燈具、買節能標章的家電用品、衣服多晾乾、少烘乾，把冷氣調到最宜人的26度，隨手節能愛地球！'
      },
      {
        id: '2',
        title: '走路、騎車、大眾交通工具',
        subtitle: 'Walk, bike, or take public transport',
        image: new URL(`../../assets/images/event-purpose2.png`, import.meta.url).href,
        description: '全球64%的石油、27%的能源，都用在交通運輸上，全球25%的溫室氣體排放，也是因為交通。多走路、騎自行車、搭乘大眾交通工具，都是即刻實踐的「自綠」行動。別忘了，塞車也是碳排放的主要來源之一，每個人每月少開車一次，塞車的機會就少一次，排碳少，都市空氣才更好。'
      },
      {
        id: '3',
        title: '吃更多的蔬菜',
        subtitle: 'Eat more vegetables',
        image: new URL(`../../assets/images/event-purpose3.png`, import.meta.url).href,
        description: '自綠生活的餐桌上，建議放一張食物碳排表，牛肉、羊肉、甲殼類海鮮，是碳排量最大的三大食材。蔬食飲食，是對地球最友善的行動，最多可以減少31%的個人碳排，同時，又能完整滿足身體需要的營養，每天多吃一點菜，保持健康同時珍愛地球！​'
      },
      {
        id: '4',
        title: '有意義的旅行',
        subtitle: 'Consider your travel',
        image: new URL(`../../assets/images/event-purpose4.png`, import.meta.url).href,
        description: '捨不得放棄探索世界的機會？一點自律，可以讓旅行更有意義。行李愈重、耗油愈多，儘量簡化行李，減輕重量；不買過度包裝的伴手禮；自帶盥洗用品入住，減少使用拋棄式用品。旅遊業占全球碳排的5-12%，安排一場自綠新旅行，從解封的現在就開始。​'
      },
      {
        id: '5',
        title: '拒絕製造剩食',
        subtitle: 'Throw away less food',
        image: new URL(`../../assets/images/event-purpose5.png`, import.meta.url).href,
        description: '每年，我們丟掉10億噸的食物，相當於全球17%的食物攝取，我們所製造的「剩食」，貢獻8%的地球碳排。如果把剩食看成一個國家，它的碳排放，高居全球第三，只輸美國及中國。把碗裡的飯菜全吃完，是自綠人生最簡單的開始。'
      },
      {
        id: '6',
        title: '循環4R不能忘',
        subtitle: 'Reduce, reuse, repair, recycle',
        image: new URL(`../../assets/images/event-purpose6.png`, import.meta.url).href,
        description: '<p class="mb-2">4R常在我心，自綠生活才真到位！Reduce (減少使用)、Reuse(物盡其用)、Repair(修好再用)、 Recycle(循環再用)​</p>雖然倡導了40年，但根據Circularity Gap Report顯示，2021年全球製造的產品中，只有8.6%是具備循環概念，比前一年的9.1% 還少。'
      },
      {
        id: '7',
        title: '讓再生能源進家門',
        subtitle: 'Change your home\'s source of energy',
        image: new URL(`../../assets/images/event-purpose7.png`, import.meta.url).href,
        description: '<p class="mb-2">太陽能板、充電樁、智慧電表，都是低碳自綠生活的好幫手。​</p>如果你住在陽光燦爛的地方，在屋頂裝上太陽能板吧！如果管委會要在停車場設充電樁，趕快投下贊成票！繳電費時，順便申請安裝智慧電表，一起享受自綠生活吧！'
      },
      {
        id: '8',
        title: '換電動車',
        subtitle: 'Switch to an electric vehicle',
        image: new URL(`../../assets/images/event-purpose8.png`, import.meta.url).href,
        description: '直到現在，人類社會中95%的移動，都還是靠化石能源驅動。電動車雖然目前仍無法零碳排，但比起油車，當然乾淨的多。在最好的狀況下，電動車的碳排，比傳統汽油車少81%，也比柴油車少80%。自綠人生的下一台車，一定要是電動的啦！'
      },
      {
        id: '9',
        title: '選擇友善環境的產品',
        subtitle: 'Choose eco-friendly products',
        image: new URL(`../../assets/images/event-purpose9.png`, import.meta.url).href,
        description: '你花的每一塊錢，都在影響地球的碳排，用你的荷包，讓友善環境的產品，佔滿超商的貨架上，下次shopping時，除了看看熱量及營養成份，也注意一下是否有碳足跡標籤(Carbon Footprint Label)，自綠花錢，豐富你的低碳生活！'
      },
      {
        id: '10',
        title: '多講、多宣導',
        subtitle: 'Speak up',
        image: new URL(`../../assets/images/event-purpose10.png`, import.meta.url).href,
        description: '<p class="mb-2">還記得「瑞典氣候少女」格蕾塔？一句「你們成年人正糟蹋我的未來」，讓全球140萬學生跟隨她，參與氣候變遷行動。​</p>自綠新生活，少你發聲、差很多！自己做不夠，還得大聲說、成群結黨、呼朋引伴，自綠生活才能遍地開花！'
      }
    ]

    const items = computed(() => {
      return isMobile.value ? [slogans] : [
        [
          slogans[0], slogans[1], slogans[2]
        ],
        [
          slogans[3], slogans[4], slogans[5], slogans[6]
        ],
        [
          slogans[7], slogans[8], slogans[9]
        ]
      ]
    })

    const toSignup = () => {
      useScrollTo(document.getElementById('signup').offsetTop)
    }

    const stepBox = computed(() => (
      `flex items-center sm:w-1/2 md:px-8`
    ))

    return { slogans, items, handleClick, activeData, showModal, toSignup, width, stepBox }

  }
}

</script>
