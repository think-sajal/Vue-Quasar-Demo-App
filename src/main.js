import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { Quasar } from 'quasar'
import router from './routes'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions, ).use(store).use(router).mount('#app')
