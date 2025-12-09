<script setup>
import {ref, onBeforeMount} from 'vue';

const projects = ref([]);
onBeforeMount(async() => {
	const res = await fetch('https://ghfast.top/https://raw.githubusercontent.com/LapisNet/.public_data/refs/heads/main/projects.json');
	projects.value = await res.json();
});
</script>

<template>
	<div id="main">
		<div class="title">项目列表</div>
		<div class="content">
			<p class="loading" v-if="projects.length === 0">正在加载...</p>
			<div id="pj-ls" :style="`grid-template-rows: repeat(${Math.ceil(projects.length / 2)}, 1fr);`" v-else>
				<div class="card card-project" v-for="item in projects" :key="item.title" v-show="item._show">
					<img class="pj-icon" :src="item.icon" :alt="item.title" v-if="!!item.icon" />
					<span class="pj-name">
						<div class="pj-title">{{item.title}}</div>
						<div class="pj-subtitle" :innerHTML="item.subTitle"></div>
					</span>
					<div class="pj-desc">
						<div class="info1" :innerHTML="item.info1"></div>
						<div class="info2" :innerHTML="item.info2"></div>
					</div>
					<div class="pj-repo" v-if="!!item.repo">
						<a :class="`fab fa-${item.repotype || 'github'}`" :href="`https://${item.repotype || 'github'}.com/${item.repo}`" target="_blank" rel="noopener noreferrer">访问仓库</a>
					</div>
				</div>
				<p class="no-more">没有更多项目了...</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#main {
	margin-bottom: 0.4em;
}
#pj-ls {
	display: grid;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	& .card-project {
		height: fit-content;
		// width: fit-content;
	}
}
.pj-name {
	display: inline-flex;
	align-items: baseline;
	& .pj-subtitle {
		margin-left: 0.4em;
	}
}
.info1::before {
	content: '- ';
}
@media screen and (max-width: 768px) {
	#pj-ls {
		grid-template-rows: repeat(10, auto);
		grid-template-columns: 1fr;
		& .card-project {
			height: 90%;
		}
	}
}
</style>
