<template>
	<Nav />
	<router-view v-slot="{Component}">
		<transition name="app" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
	<Footer />
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
export default {
	name: 'App',
	components: {
		Nav,
		Footer
	}
}
</script>