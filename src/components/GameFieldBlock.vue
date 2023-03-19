<template>
  <div
    @mouseover="onHover"
    class="game-block" :class="{ 'selected': state.isBlue }"></div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'GameFieldBlock',
  setup() {
    const state = reactive({ isBlue: false })
    function onHover() {
      state.isBlue = !state.isBlue
    }

    return { state, onHover }
  }
})
</script>

<style scoped>
  .game-block {
    display: flex;
    min-width: 36px;
    min-height: 36px;
    background-color: white;
    margin: 5px;
  }
  .game-block.selected {
    background-color: aqua;
  }
</style>