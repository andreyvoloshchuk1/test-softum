import { createApp } from 'vue'
import { createStore } from './store'
import { createRouter } from './router'
import { registerComponents } from "./utils/globalComponents";
import App from './App.vue'

const app = createApp(App)
const store = createStore()
const router = createRouter()

registerComponents(app)

app.use(store)
app.use(router)

app.mount('#app')