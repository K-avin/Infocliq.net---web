import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index'
import './tailwind/Index.css'


createApp(App).use(router).mount('#app')
