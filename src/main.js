import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import loggerPlugin from './plugins/logger.js'

const app = createApp(App)

// Install plugins
app.use(router)
app.use(loggerPlugin)

app.mount('#app')