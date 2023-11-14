<script setup>
const props = defineProps({
  tooltipTitle: {
    type: String,
    default: 'tooltipTitle',
  },
  tooltipDescription: {
    type: String,
    default: 'tooltipDescription',
  },
})

const emits = defineEmits(["buttonClick"]);

</script>
<template>
  <div class="tooltip">
    <div class="tooltip__tail"></div>
    <div class="tooltip__content">
      <slot name="tooltipContent" >
        <h4>
          {{ tooltipTitle }}
        </h4>
        <span>
          {{ tooltipDescription }}
        </span>
      </slot>
      <div class="tooltip__buttons">
        <button @click="() => emits('buttonClick')">다음</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .tooltip {
    display: flex;
    position: relative;

    .tooltip__tail {
      position: absolute;
      left: 20px;
      width: 0;
      height: 0;
      border-right: 10px solid transparent;
      border-bottom: 10px solid white;
      border-left: 10px solid transparent;
    }

    .tooltip__content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: white;
      box-sizing: border-box;
      padding: 20px;
      margin-top: 10px;
      width: 200px;
      border-radius: 10px;
      
      h4 {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
      }

      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #515257;
      }
    }

    .tooltip__buttons {
      button {
        font-size: 12px;
        padding: 8px 20px;
        line-height: 16px;
        background-color: #1d77ff;
        color: white;
        border: 0;
        border-radius: 6px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>