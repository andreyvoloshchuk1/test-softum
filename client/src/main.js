import { createApp } from 'vue'
import { createStore } from './store'
import { createRouter } from './router'
import { registerComponents } from './utils/globalComponents'
import { axios, createAxiosPlugin } from './utils/axios'
import App from './App.vue'

const plugin = createAxiosPlugin(axios)

const app = createApp(App)
const store = createStore({
    plugins: [plugin]
})
const router = createRouter()

app.use(store)
app.use(router)

registerComponents(app)

app.mount('#app')