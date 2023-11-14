<script setup>
import { ref, watch, nextTick, computed } from 'vue'
import { useProcessTour } from '../hooks/useTourOverlay'
import { useStore } from "vuex";
import Tooltip from '../components/Tooltip.vue'
import { DEMO_EL_LIST } from '../constants/index'

const store = useStore()
const highlightStyle = ref(null)
const tooltipContainerStyle = ref(null)
const activatedTourIndex = computed(() => store.state.tour.activatedTourIndex)

const updateTourElSize = () => {
  const index = store.state.tour.activatedTourIndex 

  const element = document.getElementById(`tour-${index + 1}`);
  const rect = element.getBoundingClientRect();

  highlightStyle.value = {
    height: (rect.height + 40) + "px",
    width: (rect.width + 40) + "px",
    left: (rect.left - 20) + "px",
    top: (rect.top - 20) + "px",
  };

  tooltipContainerStyle.value = {
    left: (rect.left - 20) + "px",
    top: (rect.top - 20 + rect.height + 40 + 5) + "px",
  };
}

watch(() => store.state.tour.activatedTourIndex, (newIndex) => {
  const element = document.getElementById(`tour-${newIndex + 1}`)
  if (element) {
    nextTick(() => {
      updateTourElSize()
    })
  }
}, { immediate: true })

watch(() => store.state.tour.isTourActivated, (isTourActivated) => {
  isTourActivated ? window.addEventListener('resize', updateTourElSize) : window.removeEventListener('resize', updateTourElSize)
})

</script>
<template>
  <div class="tour-overlay" id="tour-overlay">
    <div class="highlight" :style="highlightStyle"></div>
    <div class="tooltip__container" :style="tooltipContainerStyle">
      <Tooltip 
        :tooltipTitle="DEMO_EL_LIST[activatedTourIndex].tooltipContent.title" 
        :tooltipDescription="DEMO_EL_LIST[activatedTourIndex].tooltipContent.description"
        @button-click="() => useProcessTour()">
      </Tooltip>
    </div>    
  </div>
</template>
<style lang="scss" scoped>
  .tour-overlay {
    .highlight {
      position: absolute;
      background-color: transparent;
      box-shadow: rgb(0 0 0 / 60%) 0 0 0 99999px;
    }
    .tooltip__container {
      position: absolute;;
    }
  }
</style>