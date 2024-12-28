import './assets/main.css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import PersistedState from 'pinia-plugin-persistedstate';

const app = createApp(App);

export const pinia = createPinia();
pinia.use(PersistedState);

app.use(pinia);

app.mount('#app');
