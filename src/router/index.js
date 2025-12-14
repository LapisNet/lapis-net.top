import {createWebHistory, createRouter} from 'vue-router';

export const pages = [
	// {path: '/', component: () => import('@pages/Home.vue'), meta: {name: '首页'}},
	{ path: '/', redirect: '/about', meta: { name: '首页' } },
	{path: '/member', component: () => import('@pages/Member.vue'), meta: {name: '成员'}},
	{path: '/project', component: () => import('@pages/Project.vue'), meta: {name: '项目'}},
	{path: '/about', component: () => import('@pages/About.vue'), meta: {name: '关于'}}
];

const routes = pages.concat([
	{path: '/:pathMatch(.*)*', redirect: '/404'},
	{path: '/404', component: () => import('@pages/404.vue')},
	{path: '/debug', component: () => import('@pages/Debug.vue')},
	{path: '/project_v1', component: () => import('@pages/LegacyProject.vue')},
]);

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
