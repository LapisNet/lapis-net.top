import StatusBadge from './StatusBadge.vue'
import LicenseBadge from './LicenseBadge.vue'

/**
 * @name defineComponents
 * @param {import('vue').App} app
 */
export default (app) => {
	app.component('StatusBadge', StatusBadge)
	   .component('status-badge', StatusBadge)
	   .component('LicenseBadge', LicenseBadge)
	   .component('license-badge', LicenseBadge)
}
