<script setup>
const types = ['unknown', 'wip', 'normal', 'deprecated', 'archived'];
</script>

<template>
	<div id="main">
		<h1 class="title">Debug</h1>
		<div class="content">
			<h2 id="status-badge">Status Badge</h2>
			<div class="card card-project" style="width: fit-content;">
				<status-badge v-for="type in types" :key="type" :type="type" style="margin: 0.4em;" />
			</div>
		</div>
	</div>
</template>
