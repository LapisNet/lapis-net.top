import StatusBadge from './StatusBadge.vue'

/**
 * @name defineComponents
 * @param {import('vue').App} app
 */
export default (app) => {
	app.component('StatusBadge', StatusBadge)
	   .component('status-badge', StatusBadge)
}
