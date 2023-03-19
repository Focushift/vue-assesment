<template>
  <div class="content">
    <v-card class="login-form">
      <v-card-title>Test</v-card-title>

      <v-card-actions>
        <v-btn
          @click=""
          prepend-icon="mdi-cloud-upload" color="success" variant="flat">
          Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { VCard, VCardTitle, VCardActions } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'

export default defineComponent({
  name: 'LoginPage',
  components: { VCard, VCardTitle, VCardActions, VBtn },
  setup() {
    const state = reactive({
      email: '',
      password: '',
    })
    const rules = {
      email: { required, email },
      password: {
        required,
        minLength: minLength(state.password),
        minLengthValue: minLength(10),
      },
    }

    const v$ = useVuelidate(rules, state)
    return { state, v$ }
  }
})
</script>

<style scoped>
  .content {
    min-width: 500px;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
  }
  .login-form {
    min-width: 300px;
  }
  .login-form .v-card-actions{
    justify-content: flex-end;
  }
</style>