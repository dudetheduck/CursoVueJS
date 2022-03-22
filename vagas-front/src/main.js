import { createApp } from 'vue'
import App from './App.vue'

// Importar o pacote mitt
import mitt from 'mitt'

// Criar a instância do pacote mitt
const emitter = mitt()

// Iniciar a instância do Vue com base no componente
// createApp(App).mount('#app')
const app = createApp(App)

// Configurar a instância do pacote mitt como sendo uma propriedade global
// Essa propriedade estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

// Associar a instância do Vue com o elemento HTML de Id app
app.mount('#app')