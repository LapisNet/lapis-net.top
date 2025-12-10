import {createApp} from 'vue';
import router from './router';
import defineComponents from './components';

import App from './app';

const app = createApp(App);
defineComponents(app);
app.use(router).mount('#app');

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('title').textContent = 'LapisNet';
	document.documentElement.lang = 'zh-Hans-CN';
});
