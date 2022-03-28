import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import moment from 'moment'

// createApp(App).mount('#app')
const app = createApp(App)

app.use(Maska) // Plugin
app.config.globalProperties.$moment = moment // Propriedade Global
app.config.globalProperties.$moment.locale('pt-br')

app.mount('#app')