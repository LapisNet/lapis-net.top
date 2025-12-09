<script setup>
import {ref, onBeforeMount} from 'vue';

/** @type {{
_show?: boolean;
name: string;
url?: string;
avatar: string;
role: string;
aka?: string;
}[]} */
const members = ref([]);
onBeforeMount(async() => {
	const res = await fetch('https://ghfast.top/https://raw.githubusercontent.com/LapisNet/.public_data/refs/heads/main/members.json');
	members.value = await res.json();
});
const openLink = (url) => url && window.open(url, '_blank', 'noopener,noreferrer');
</script>

<template>
	<div id="main">
		<div class="title">成员列表</div>
		<div class="content">
			<p class="loading" v-if="members.length === 0">Loading...</p>
			<div id="mb-ls" v-else>
				<a class="card" v-for="member in members" :key="member.name" :href="member.url ?? '#'" @click.prevent="openLink(member.url)" v-show="typeof member._show === 'undefined' || member._show">
					<span class="header">
						<img class="avatar" :src="member.avatar === 'none'? '/res/default_avatar.svg': member.avatar" alt="avatar" :title="member.name">
						<span class="name">
							{{member.name}}
							<span class="aka" v-if="member.aka">{{member.aka? `${member.aka}`: ''}}</span>
						</span>
					</span>
					<span class="role">{{member.role}}</span>
				</a>
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
