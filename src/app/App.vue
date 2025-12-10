<script setup>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
</script>

<template>
	<Nav />
	<router-view v-slot="{Component}">
		<transition name="app" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
	<Footer />
</template>
