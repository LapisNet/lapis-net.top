import {createApp} from 'vue';
import router from './router';

import App from './app';

createApp(App).use(router).mount('#app');

import './index.scss';

document.addEventListener('DOMContentLoaded', async() => (await import('./events')).loaded());