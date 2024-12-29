import './assets/base.css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import PersistedState from 'pinia-plugin-persistedstate';
import router from '@renderer/router';
import * as ElementPlusIcons from '@element-plus/icons-vue';

const app = createApp(App);

export const pinia = createPinia();
pinia.use(PersistedState);

app.use(pinia);
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component);
}

app.mount('#app');
