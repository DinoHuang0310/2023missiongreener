<template>
  <div class="bg-secondary bg-repeat py-16 sm:py-24" :style="{'background-image': `url(${bgImage})`}">
    <div class="container w-11/12">
      <h2 class="title text-center mb-8 md:mb-16">報名參加</h2>
      <ContentBox class="md:flex md:flex-row-reverse p-4 mb-6 overflow-hidden">
        <div class="relative flex-1 py-2 px-2 sm:w-2/3 md:w-full md:px-4 md:pl-8 m-auto">
          <div class="space-y-3">
            <input
              type="text"
              class="border-2 p-2 w-full placeholder:text-black/30 placeholder:text-base"
              placeholder="請輸入姓名"
              v-model="name"
              maxlength="8"
            >
            <input
              type="text"
              class="border-2 p-2 w-full placeholder:text-black/30 placeholder:text-base"
              placeholder="請輸入手機 (如:0912345678)"
              v-model="cell_phone"
              maxlength="10"
            >
            <div>
              <label class="mr-4"><input class="mr-1" type="radio" v-model="gender" value="男性">男</label>
              <label class="mr-4"><input class="mr-1" type="radio" v-model="gender" value="女性">女</label>
              <label class="mr-4"><input class="mr-1" type="radio" v-model="gender" value="其他">其他</label>
            </div>
            <input
              type="text"
              class="border-2 p-2 w-full placeholder:text-black/30 placeholder:text-base"
              placeholder="請輸入e-mail (如:sample@gmail.com)"
              v-model="email"
              maxlength="100"
            >
            <div>
              <label class="text-lg">自綠生活節活動 預約報名</label>
              <div>
                <label class="mr-4">
                  <input class="scale-125 mr-2" type="checkbox" v-model="is_join_day_1">9/16(六)
                </label>
                <label class="mr-4">
                  <input class="scale-125 mr-2" type="checkbox" v-model="is_join_day_2">9/17(日)
                </label>
              </div>
            </div>
            <label class="block">
              <input class="scale-125 mr-1" type="checkbox" v-model="is_agree">
              我已閱讀<span class="text-yellow underline cursor-pointer" @click.prevent="showModal = !showModal">個資條款</span>且同意送出資料
            </label>
            <div>
              <button class="btn w-full font-bold tracking-widest" @click="submit">送出報名</button>
            </div>
          </div>

          <div
            v-if="!registrable"
            class="absolute flex justify-center items-center w-full h-full top-0 left-0 bg-white"
            v-html="deadlineMsg"
          />
          
        </div>

        <div class="md:hidden my-4 mt-12">
          <h3 class="text-xl text-primary font-bold">華山1914文創產業園區 西一館&大草原</h3>
          <p class="mb-4">台北市中正區八德路一段1號</p>
        </div>
        <div class="relative md:w-1/2 lg:w-2/3 pb-48 md:pb-0">
          <iframe
            class="absolute w-full h-full top-0 left-0 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7052606447637!2d121.52678337599347!3d25.044074637884666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96523e0246d%3A0xf1c9276707165c71!2z6I-v5bGxMTkxNOaWh-WMluWJteaEj-eUoualreWckuWNgA!5e0!3m2!1szh-TW!2stw!4v1689578266488!5m2!1szh-TW!2stw"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div class="md:hidden my-4">
          <h4 class="text-lg font-bold">搭乘捷運：</h4>
          <p class="mb-4">忠孝新生站 1號出口 / 善導寺站 6號出口</p>
          <h4 class="text-lg font-bold">搭乘公車：</h4>
          <p class="mb-4">站牌: 華山公園站(市民大道) / 台北科技大學站(八德路) / 忠孝國小站 / 華山文創園區(忠孝東路)</p>
          <h4 class="text-lg font-bold">自行開車：</h4>
          <p class="mb-4">園區停車場 / 周邊停車場</p>
        </div>
      </ContentBox>

      <ol class="list-decimal pl-6 my-4">
        <li>本活動為免費參加，線上預約報名者請於活動日完成報到，就可獲得早鳥預約好禮一份。</li>
        <li>主辦單位保留變更日期、終止活動及受理報名之權利。​</li>
      </ol>

      <div class="hidden md:block">
        <h3 class="text-xl text-primary font-bold">華山1914文創產業園區 西一館&大草原</h3>
        <p class="mb-4">台北市中正區八德路一段1號</p>
        <h4 class="text-lg font-bold">搭乘捷運：</h4>
        <p class="mb-4">忠孝新生站 1號出口 / 善導寺站 6號出口</p>
        <h4 class="text-lg font-bold">搭乘公車：</h4>
        <p class="mb-4">站牌: 華山公園站(市民大道) / 台北科技大學站(八德路) / 忠孝國小站 / 華山文創園區(忠孝東路)</p>
        <h4 class="text-lg font-bold">自行開車：</h4>
        <p class="mb-4">園區停車場 / 周邊停車場</p>
      </div>
      
    </div>

    <VueFinalModal
      v-model="showModal"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-xl max-h-3/4 overflow-auto m-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg"
      :reserveScrollBarGap="false"
    >
      <div>
        <p class="font-bold text-lg mb-2">我已同意以下條款：</p>
        <p>謹依個人資料保護法第 8 條規定告知以下事項：</p>
        <p>您為本次活動的參與者（以下簡稱參與人）。 參與人所填寫的資料將會提供今周刊。請確認在勾選同意前已詳閱並同意以下條款：今周刊基於客戶管理、統計及調查分析、行銷及其他合於營業登記項目或章程所定業務需要或其他法令所准許之特定目的，向參與人蒐集前述個人資料，並管理維護及處理利用，其得就該等個人資料用於寄送出版物、提供各項服務或活動訊息與調查分析使用。參與人得向今周刊請求查閱、提供複本、更正或補充個人資訊，及請求刪除或停止處理利用。若參與人填寫資料不完整時，可能會影響參與人獲得今周刊所提供之服務或各項訊息通知與活動之權益。</p>
      </div>
    </VueFinalModal>

    <VueFinalModal
      v-model="signupSuccess"
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-xl max-h-3/4 overflow-auto m-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg"
      :reserveScrollBarGap="false"
      :clickToClose="false"
    >
      <div class="space-y-4">
        <h4 class="text-xl text-primary font-bold mb-4">報名成功</h4>
        <p>感謝您報名參加「2023 自綠生活節」!​<br>請記得於活動日完成現場報到，就可獲得早鳥預約好禮一份，謝謝！</p>
        <div class="text-center">
          <button class="btn w-full sm:w-1/3" @click="signupSuccess = false">確定</button>
        </div>
      </div>
    </VueFinalModal>
  </div>
</template>

<script setup>
import ContentBox from '../../layouts/ContentBox.vue'
import { VueFinalModal } from 'vue-final-modal'
import api from '../../service/api'
import useClientConfig from '../../composables/useClientConfig'

const props = defineProps({
  registrable: {
    type: Boolean,
    default: false
  },
  deadlineMsg: {
    type: String,
    default: ''
  }
})

const showModal = ref(false)

const bgImage = new URL(`../../assets/images/background.png`, import.meta.url).href

const loading = ref(false)
const signupSuccess = ref(false)
// form
const name = ref('')
const cell_phone = ref('')
const gender = ref(null)
const email = ref('')
const is_join_day_1 = ref(true)
const is_join_day_2 = ref(false)
const is_agree = ref(false)

const submit = () => {
  if (loading.value || !props.registrable) return;

  if (!name.value) {
    alert('請輸入您的姓名')
    return
  }
  if (!cell_phone.value || cell_phone.value.length < 10) {
    alert('請輸入手機號碼，如：0912345678')
    return
  } else {
    if (!cell_phone.value.split('').every(str => /^\d+$/.test(str))) {
      alert('請輸入手機號碼，如：0912345678')
      return
    }
  }
  if (!gender.value) {
    alert('請選擇您的性別')
    return
  }

  if (!email.value) {
    alert('請輸入您的 e-mail')
    return
  } else {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email.value)) {
      alert('請輸入有效的 e-mail');
      return;
    }
  }
  if (!is_join_day_1.value && !is_join_day_2.value) {
    alert('請選擇您想參加的日期')
    return
  }
  if (!is_agree.value) {
    alert('請勾選同意個資蒐集')
    return
  }

  loading.value = true
  const { isWebtest, isDev } = useClientConfig()
  const requestTarget = isWebtest ?
    'https://events-cherry.businesstoday.com.tw/backend/missiongreener1/sign_up' :
    'https://events.businesstoday.com.tw/backend/missiongreener1/sign_up';

  api.post(isDev ? '/static/data/signup_res.json' : requestTarget, {
    'Name': name.value,
    'Cell_phone': cell_phone.value,
    'Gender': gender.value,
    'Email': email.value,
    'Is_join_day_1': is_join_day_1.value ? 1 : 0,
    'Is_join_day_2': is_join_day_2.value ? 1 : 0,
    'Is_Agree': is_agree.value ? 1 : 0,
  }).then((res) => {
    if (res.bIsSignUpSuccess === 1) {
      signupSuccess.value = true

      // 重置
      name.value = ''
      cell_phone.value = ''
      gender.value = null
      email.value = ''
      is_join_day_1.value = true
      is_join_day_2.value = false
      is_agree.value = false

    } else {
      alert(`報名失敗: ${res.sError}`)
    }

    loading.value = false
    
  }).catch((error) => {
    alert('報名失敗')
    loading.value = false
    console.error(error)
  })
}

</script>