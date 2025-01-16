<script setup>
import {ref, onBeforeMount} from 'vue';

const members = ref([]);
onBeforeMount(async() => {
	const res = await fetch('https://ghproxy.cn/https://raw.githubusercontent.com/LapisNet/.public_data/refs/heads/main/members.json');
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
			<p class="loading" v-show="members.length === 0">Loading...</p>
			<div id="mb-ls" v-show="members.length > 0">
				<div class="card" v-for="member in members" :key="member.name" @click="!!member.url && openLink(member.url)">
					<img class="avatar" :src="member.avatar === 'none'? '/res/default_avatar.svg': member.avatar" alt="avatar" :title="member.name">
					<div class="name">{{member.name}}{{member.aka? ` (${member.aka})`: ''}}</div>
					<div class="role">{{member.role}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#mb-ls {
	display: grid;
	align-items: baseline;
	justify-content: space-evenly;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto auto auto auto;
}
@media screen and (max-width: 768px) {
	#mb-ls {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	}
}
</style>

<script>
export default {
	name: 'Member'
}
</script>