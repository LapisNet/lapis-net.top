<script setup>
import { statusTexts } from '../shared';
</script>

<template>
	<div id="main">
		<h1 class="title">Debug</h1>
		<div class="content">
			<h2 id="status-badge">Status Badge</h2>
			<div class="card card-project" style="width: fit-content;">
				<span class="status-badge" v-for="(text, type) in statusTexts" :key="type" :data-type="type" style="margin-top: 0.4em;">{{ text }}</span>
			</div>
		</div>
	</div>
</template>
