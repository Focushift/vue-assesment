<template>
  <div class="field">
    <div
      v-for="r in Number(y)" :key="r"
      class="row" >
      <div
        v-for="c in Number(x)" :key="c"
        class="column">
          <game-field-block />
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import GameFieldBlock from './GameFieldBlock.vue'

export default defineComponent({
  name: 'GameField',
  props: {
    x: { type: [Number, String], required: true },
    y: { type: [Number, String], required: true },
  },
  components: { GameFieldBlock },
})
</script>

<style scoped>
  .field {
    background-color: darkslategray;
    min-width: 200px;
    min-height: 200px;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
</style>
