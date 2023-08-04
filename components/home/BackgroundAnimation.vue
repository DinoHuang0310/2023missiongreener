<template>
  <ClientOnly>
    <div class="fixed w-full h-screen overflow-hidden -z-10 bg-secondary">
      <div
        class="relative min-w-full max-w-full sm:max-w-none left-1/2 top-2/5 -translate-x-1/2"
        :style="{'width': setWidth}"
      >
        <picture>
          <source srcset="../../assets/images/kv-layer.png" media="(min-width: 640px)">
          <img
            class="w-full"
            src="../../assets/images/kv-layer-m.png"
            :style="{
              'transform': `translate(0px, ${setPercentage(0, -50)}) scale(${setScale(1.1)})`,
              'filter': `brightness(${ isMobile ? 1 : setPercentage(100, 85) })`
            }"
          >
        </picture>
        
        <div
          class="hidden sm:block absolute w-full h-full top-0 left-0"
          :style="{
            'transform': `translate(0px, ${setPercentage(0, -50)}) scale(${setScale(1.2)})`,
            'backdrop-filter': `blur(${setBlur})`
          }"
        />
      </div>

      <div
        class="hidden md:block absolute min-w-full left-1/2 bottom-0 -translate-x-1/2 md:translate-y-1/2 lg:translate-y-0"
        :style="{'width': setWidth}"
      >
        <img
          class="w-full"
          src="../../assets/images/kv-layer2.png"
          :style="{
            'transform': `translate(0px, ${setPercentage(110, 0)}) scale(${setScale(1.3)})`,
            'filter': `brightness(${ isMobile ? 1 : setPercentage(100, 95) })`
          }"
        >
      </div>

      <div
        class="hidden md:block absolute min-w-full left-1/2 bottom-0 -translate-x-1/2 md:translate-y-1/2 lg:translate-y-0"
        :style="{'width': setWidth}"
      >
        <img class="w-full" src="../../assets/images/kv-layer3.png" :style="{ 'transform': `translate(0px, ${setPercentage(130, 0)}) scale(${setScale(1.4)})` }">
      </div>

      <div class="absolute w-full h-1/2 left-0 bottom-0" :class="showMask ? 'block' : 'hidden'" style="background: #4b4b4b" />
    </div>
  </ClientOnly>
</template>

<script>
import useWindowScroll from '../../composables/useWindowScroll'
import useClientSize from '../../composables/useClientSize'

export default {
  props: {
    breakPoint: {
      type: Number,
      default: 0
    },
  },

  setup(props) {
    const { width, height, isMobile } = useClientSize(1024)
    const breakPointRef = toRef(props.breakPoint)
    
    watch(() => props.breakPoint, (val) => {
      breakPointRef.value = val
    })
    const { scrollTop, overY } = useWindowScroll(breakPointRef)

    const showMask = computed(() => (
      scrollTop.value > props.breakPoint + height.value
    ))

    const setWidth = computed(() => {
      if (width.value >= 1536) {
        return `1920px`
      } else if (width.value >= 1024) {
        return `1536px`
      } else if (width.value >= 768) {
        return `1152px`
      }
    })

    const setPercentage = computed(() => {
      if (isMobile.value) {
        return (from, to) => to
      }
      return (from, to) => overY.value ? `${to}%` : `${scrollTop.value / props.breakPoint * (to - from) + from}%`
    })

    const setScale = computed(() => {
      if (isMobile.value) {
        return () => 1
      }
      return (scale) => overY.value ? 1 : scale - (scrollTop.value / props.breakPoint * (scale - 1))
    })

    const setBlur = computed(() => {
      if (isMobile.value) {
        return () => 0
      }
      return overY.value ? `2px` : `${scrollTop.value / props.breakPoint * 2}px`
    })

    return {
      showMask,
      isMobile,
      setWidth,
      setPercentage,
      setScale,
      setBlur,
    }
  }
}
</script>
