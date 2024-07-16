import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      sm: 820
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
