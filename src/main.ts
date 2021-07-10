import { createApp } from 'vue'
import App from './App.vue'
import initElement from '/@plugins/ElementPlus.ts'
import router from "./router";
import { store } from "./store";
import '/@/assets/index.css'

const app = createApp(App)
  .use(router)
  .use(store)
initElement(app)

app.mount('#app')
