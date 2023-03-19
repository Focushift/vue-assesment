<template>
  <div class="content">
    <v-card class="login-form">
      <v-card-title>Login Form</v-card-title>

      <v-card-text>
        <v-form @submit.prevent>
          <v-text-field
            v-model="state.email"
            :error-messages="getError('email')"
            autofocus
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="state.password"
            :error-messages="getError('password')"
            label="Password"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="submit"
          type="submit"
          color="success" variant="flat">
          Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { VCard, VCardTitle, VCardActions, VCardText } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'

export default defineComponent({
  name: 'LoginPage',
  components: { VCard, VCardTitle, VCardActions, VCardText, VBtn, VForm, VTextField },
  setup() {
    const router = useRouter()
    const state = reactive({
      email: '',
      password: '',
    })
    const rules = {
      email: { required, email },
      password: {
        required,
        minLength: minLength(state.password),
        minLengthValue: minLength(6),
      },
    }
    const v$ = useVuelidate(rules, state)

    async function submit () {
      v$.value.$touch()
      if (v$.value.$invalid) return
      router.push('/game')
    }
    function getError(field) {
      v$.value.$touch()
      if (!v$.value.$invalid || !field) return ''
      const error = v$.value.$errors.find(err => err.$propertyPath === field)
      return error?.$message || ''
    }

    return { state, v$, submit, getError }
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
    min-width: 400px;
  }
  .login-form .v-card-actions{
    justify-content: flex-end;
  }
</style>