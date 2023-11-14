<script setup>
import { ref, onMounted } from 'vue';
import { useProcessTour, useActivateTourOverlay } from './hooks/useTourOverlay'
import { DEMO_EL_LIST } from './constants'

const demoElContainer = ref(null);
const randomizeDemoElPositions = () => {
  const els = demoElContainer.value.children;
  for (let el of els) {
    const x = Math.floor(Math.random() * 400);
    const y = Math.floor(Math.random() * 200);
    el.style.transform = `translate(${x}%, ${y}%)`;
  }
}
onMounted(() => {
  randomizeDemoElPositions();
});

</script>
<template>
  <div class="logo__container">
    <img class="logo__image logo__image--medi" alt="Medistream logo" src="./assets/logo-medistream.svg">
  </div>
  <div class="buttons-container">
    <button @click="() => randomizeDemoElPositions()">요소 위치 수정</button>
    <button @click="() => useActivateTourOverlay()">튜토리얼 시작</button>
  </div>
  <div class="demo-el__container" ref="demoElContainer">   
    <component v-for="demoEl in DEMO_EL_LIST" :key="demoEl.id" :is="demoEl.component" :id="demoEl.id" @click="() => useProcessTour()" />
  </div>
</template>

<style lang="scss" scoped>
.logo__container {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;

  .logo__image {
    width: 400px;
  }
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  button {
    border: 1px solid #959090;
    border-radius: 10px;
    background-color: transparent;
    font-size: 20px;
    width: 150px;
    box-sizing: border-box;
    padding: 10px;

    &:hover {
      cursor: pointer;
      background-color: #faf9f9;
    }
  }
}

.demo-el__container {
  max-width: 1200px;
  width: 100%;
  margin: 50px auto 0;
  height: 500px;
}
</style>
