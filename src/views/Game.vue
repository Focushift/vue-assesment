<template>
  <div class="content">
    <v-card class="game-options">
      <v-card-title>Game options</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="state.sizeX"
          label="Size X" />
        <v-text-field
          v-model="state.sizeY"
          label="Size Y" />
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>Game</v-card-title>
      <v-card-text>
        <game-field :x="state.sizeX" :y="state.sizeY" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { VCard, VCardTitle, VCardText } from 'vuetify/components/VCard'
import { VTextField } from 'vuetify/components/VTextField'
import GameField from '@/components/GameField.vue'

export default defineComponent({
  name: 'GamePage',
  components: { VCard, VCardTitle, VCardText, VTextField, GameField },
  setup() {
    const state = reactive({
      sizeX: 20,
      sizeY: 20,
    })

    return { state }
  }
})
</script>

<style scoped>
  .content {
    min-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
  }
  .content > * {
    margin: 10px;
  }
</style>