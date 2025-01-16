import {createApp} from 'vue';
import router from './router';

import App from './app';

createApp(App).use(router).mount('#app');

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('title').textContent = 'LapisNet';
	document.documentElement.lang = 'zh-Hans-CN';
});