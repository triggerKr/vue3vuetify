import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import pinia from './store'
import { loadFonts } from './plugins/webfontloader'
//import '@mdi/font/css/materialdesignicons.css'

await loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')
