<script setup>
import {ref, onBeforeMount} from 'vue';

const members = ref([]);
onBeforeMount(async() => {
	const res = await fetch('https://ghfast.top/https://raw.githubusercontent.com/LapisNet/.public_data/refs/heads/main/members.json');
	members.value = await res.json();
});
function openLink(url) {
	window.open(url, '_blank', 'noopener noreferrer');
}
</script>

<template>
	<div id="main">
		<div class="title">成员列表</div>
		<div class="content">
			<p class="loading" v-if="members.length === 0">Loading...</p>
			<div id="mb-ls" v-else>
				<div class="card" v-for="member in members" :key="member.name" @click="!!member.url && openLink(member.url)" v-show="member._show">
					<img class="avatar" :src="member.avatar === 'none'? '/res/default_avatar.svg': member.avatar" alt="avatar" :title="member.name">
					<div class="name">{{member.name}}{{member.aka? ` (${member.aka})`: ''}}</div>
					<div class="role">{{member.role}}</div>
				</div>
			</div>
			<p class="no-more" v-show="false">到底了...</p>
		</div>
	</div>
</template>

<style scoped>
#mb-ls {
	display: grid;
	align-items: baseline;
	justify-content: space-evenly;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, auto);
}
@media screen and (max-width: 768px) {
	#mb-ls {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, auto);
	}
}
</style>

<script>
export default {
	name: 'Member'
}
</script>