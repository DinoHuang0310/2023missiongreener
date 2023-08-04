<template>
  <div class="pt-16 sm:pt-24">
    <div>
      <h2 class="title text-center mb-8">立即報名</h2>
      <ContentBox class="p-4 mb-6 overflow-hidden">
        <div v-if="formState.registrable">
          <div v-if="allowSignup" class="md:flex md:justify-center">
          
            <!-- 基本資料 -->
            <div class="sm:w-2/3 md:w-2/5 lg:w-1/3 sm:p-4 mx-auto md:mx-0 space-y-3">
              <h3 class="text-xl">基本資料:</h3>
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
            </div>
            <!-- 場次選擇 -->
            <div class="sm:w-2/3 md:w-auto sm:p-4 mx-auto md:mx-0 mt-6 md:mt-0 space-y-3">
              <h3 class="text-xl">請選擇報名場次/參加人數:</h3>
              <div
                v-for="list in lectures"
                :key="list.code"
                class="flex justify-between items-center"
                :class="[list.full && 'opacity-50']"
              >
                <label class="mr-2 flex items-center">
                  <input class="w-5 mr-2 scale-125" type="checkbox" v-model="list.checked" :disabled="list.full">
                  <span class="flex-1">{{ list.name }}</span>
                </label>
                <div v-if="list.full">已額滿</div>
                <select
                  v-else
                  class="border border-gray-400"
                  :class="[!list.checked && 'opacity-50']"
                  v-model="list.attendances"
                  :disabled="!list.checked"
                >
                  <option v-for="num in 4" :key="num" :value="num">{{ num }}位</option>
                </select>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <h4 class="text-xl xl:text-2xl mb-2">報名已額滿</h4>
            <p>本活動報名已經額滿，感謝您的支持。</p>
          </div>
        </div>

        <div v-else v-html="formState.deadlineMsg" />
      </ContentBox>

      <div v-if="allowSignup" class="text-center">
        <label class="inline-block mb-4">
          <input class="scale-125 mr-1" type="checkbox" v-model="is_agree">
          我已閱讀<span class="text-yellow underline cursor-pointer" @click.prevent="showModal = !showModal">個資條款</span>且同意送出資料
        </label>
        <div>
          <button class="btn w-4/5 sm:w-1/4 font-bold tracking-widest" @click="submit">送出報名</button>
        </div>
      </div>

      <div class="flex justify-center">
        <ol class="list-decimal pl-6 mt-4">
          <li>本次沙龍講座為免費參加，報名完成後，請於活動日準時入場。</li>
          <li>報名人數若超過五人，請來電預約報名。 (02)2581-6196 #203 陳小姐</li>
          <li>主辦單位保留變更日期、終止活動及受理報名之權利。​</li>
        </ol>
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
      content-class="relative flex flex-col max-w-xl max-h-3/4 overflow-auto m-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg"
      :reserveScrollBarGap="false"
      :clickToClose="false"
    >
      <div class="space-y-4">
        <h4 class="text-xl text-primary font-bold">
          感謝您報名參加「2023 自綠生活節」沙龍講座！<br>您的報名結果為：
        </h4>
        <ul class="pl-6">
          <li v-for="result in signupResult" :key="result.index" class="list-disc font-bold">
            {{ result.sSignUpResult }}
          </li>
        </ul>
        <div>
          <p>本次沙龍講座為免費參加，請準時入場！</p>
          <p>若逾時入場，將不保留座位，並開放給現場民眾，謝謝！</p>
        </div>
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
import useClientConfig from '../../composables/useClientConfig'
import api from '../../service/api'

const showModal = ref(false)

const loading = ref(false)
const signupSuccess = ref(false)
const signupResult = ref([])

const { isWebtest, isDev } = useClientConfig()
const { app } = useRuntimeConfig()

watch(() => signupSuccess.value, (bool) => {
  if (!bool) {
    // 重置表單
    signupResult.value = []
    getLectureStatus()

    name.value = ''
    cell_phone.value = ''
    gender.value = null
    email.value = ''
    is_agree.value = false
  }
})

const formState = reactive({
  registrable: false,
  deadlineMsg: ''
})

// form
const name = ref('')
const cell_phone = ref('')
const gender = ref(null)
const email = ref('')
const is_agree = ref(false)

const lectures = reactive([])
api.get(`${app.baseURL}static/data/get_lectures.json?${new Date().getTime()}`).then((res) => {
  if (typeof res === 'object') {
    const { registrable, deadlineMsg } = res
    lectures.push(...res.lectures)
    formState.registrable = registrable
    formState.deadlineMsg = deadlineMsg

    if (registrable) getLectureStatus()
    
  } else {
    alert('取得沙龍講座失敗')
    console.error(res)
  }
}).catch((error) => {
  alert('取得沙龍講座錯誤')
  console.error(error)
})

const lecturesMapping = computed(() => {
  const payloadStr = lectures.reduce((prev, item) => {
    return item.checked ? prev += `${item.code}:${item.attendances}/` : prev
  }, '')
  return payloadStr.slice(0, -1)
})

const allowSignup = computed(() => lectures.some(i => !i.full))

const getLectureStatus = () => {
  const requestTarget = isWebtest ?
    'https://events-cherry.businesstoday.com.tw/backend/missiongreener2/getDisabledSignUpId' :
    'https://events.businesstoday.com.tw/backend/missiongreener2/getDisabledSignUpId';

  api.post(isDev ? '/static/data/getDisabledSignUpId.json' : requestTarget).then((res) => {
    if (res.bIsSuccess === 1) {
      lectures.forEach(item => {
        item.full = res.aDisableSignUpId.some(id => id === item.code)
        item.checked = false
        item.attendances = '1'
      })
    } else {
      alert(res.sError)
    }
  }).catch((error) => {
    alert('取得講座額滿狀態失敗')
    console.error(error)
  })
}

const submit = () => {
  if (loading.value || !allowSignup.value) return;

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
      alert('請輸入有效的 e-mail')
      return
    }
  }

  if (!lecturesMapping.value) {
    alert('請選擇您想參加的沙龍講座場次')
    return
  }

  if (!is_agree.value) {
    alert('請勾選同意個資蒐集')
    return
  }

  loading.value = true
  const requestTarget = isWebtest ?
    'https://events-cherry.businesstoday.com.tw/backend/missiongreener2/sign_up' :
    'https://events.businesstoday.com.tw/backend/missiongreener2/sign_up';
  
  api.post(isDev ? '/static/data/signup_lecture_res.json' : requestTarget, {
    'Name': name.value,
    'Cell_phone': cell_phone.value,
    'Gender': gender.value,
    'Email': email.value,
    'Sign_up_data': lecturesMapping.value,
    'Is_Agree': is_agree.value ? 1 : 0,
  }).then((res) => {
    // console.log(res)
    if (res.bIsSignUpSuccess === 1) {
      signupResult.value = res.aSignUpResult
      signupSuccess.value = true

    } else {
      alert(`報名失敗: ${res.sError}`)
    }

    loading.value = false
    
  }).catch((error) => {
    alert('報名送出失敗')
    loading.value = false
    console.error(error)
  })
  
}

</script>