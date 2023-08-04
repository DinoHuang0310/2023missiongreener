<template>
  <div>
    <BackgroundAnimation :breakPoint="contentEndPosition" />

    <div class="relative">

      <Kvarea ref="contentRef" />

      <Event id="event" :prize="info.prize" />

      <ContentArea :linkOut="info.linkOut" />

      <Flow id="flow" />

      <Signup id="signup" :registrable="info.registrable" :deadlineMsg="info.deadlineMsg" />

      <News v-if="info.news.length" id="news" :news="info.news" />

    </div>
  </div>
</template>

<script setup>
import Kvarea from '../components/home/Kvarea.vue'
import Event from '../components/home/Event.vue'
import ContentArea from '../components/home/ContentArea.vue'
import Flow from '../components/home/Flow.vue'
import Signup from '../components/home/Signup.vue'
import News from '../components/home/News.vue'
import BackgroundAnimation from '../components/home/BackgroundAnimation.vue'

import useScrollTo from '../composables/useScrollTo'

const contentRef = ref(null)

const contentEndPosition = computed(() => contentRef.value ? contentRef.value.$el.clientHeight : 0)

const props = defineProps({
  info: {
    type: Object,
  },
})

onMounted(() => {
  const { path } = useRoute()
  if (path !== '/') {
    setTimeout(() => {
      useScrollTo(document.getElementById(path.replaceAll('/', '')).offsetTop)
    }, 300);
  }
})

</script>
