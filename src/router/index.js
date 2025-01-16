import {createWebHistory, createRouter} from 'vue-router';

const routes = [
	{path: '/', component: () => import('@pages/Home.vue')},
	{path: '/about', component: () => import('@pages/About.vue')},
	{path: '/member', component: () => import('@pages/Member.vue')},
	{path: '/:pathMatch(.*)*', redirect: '/404'},
	{path: '/404', component: () => import('@pages/404.vue')}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;