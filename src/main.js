import { createApp } from 'vue'
// eslint-disable-next-line
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import router from './router'
import App from './App.vue'

const vuetify = createVuetify({})

createApp(App).use(router).use(vuetify).mount('#app')
