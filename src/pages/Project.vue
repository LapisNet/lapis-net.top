<script setup>
import {ref, onBeforeMount} from 'vue';
import { parseRawText } from '../libs/late-marked';

/** @type {ProjectV2[]} */
const projects = ref([]);
const showedProjectCount = ref(0);

onBeforeMount(async() => {
	projects.value = await (await import('../libs/fetch-data')).fetchData('projects_v2');
	projects.value.forEach(pj => (typeof pj._show === 'undefined' || pj._show) && showedProjectCount.value++);
});
</script>

<template>
	<div id="main">
		<div class="title">项目列表</div>
		<div class="content">
			<p class="loading" v-if="projects.length === 0">正在加载...</p>
			<template v-else>
				<div id="pj-ls" :style="`grid-template-rows: repeat(${Math.ceil(showedProjectCount / 2)}, 1fr);`">
					<template v-for="pj in projects" :key="pj.name">
						<div class="card card-project" v-if="typeof pj._show === 'undefined' || pj._show">
							<img class="pj-icon" :src="pj.icon" :alt="pj.title" v-if="!!pj.icon" />
							<span class="pj-name">
								<div class="pj-title">{{pj.name}}</div>
								<div class="pj-subtitle" v-if="pj.sub_title" v-html="parseRawText(pj?.sub_title)"></div>
							</span>
							<div class="pj-desc">
								<div class="pj-info">
									<div class="pj-badges">
										<status-badge :type="pj._status" />
										<license-badge :license="pj.license" />
									</div>
									<span class="target">🎯目标: {{ pj.target }}</span>
									<span class="next-release-at" v-if="pj.next_release_at">🕔下次更新时间: {{ pj.next_release_at }}</span>
									<span class="leader">👤负责人: {{ pj.leader.name }}</span>
								</div>
								<div class="desc" v-html="parseRawText(pj?.desc ?? '/未提供信息/')" :style="pj.desc? {}: { color: 'grey' }"></div>
							</div>
							<div class="pj-link" v-if="pj.repo || pj.link">
								<a v-if="pj.repo" :class="`fab fa-${(pj?.repo?.startsWith('http')? pj.repo?.split('/')[2]: 'github').split('.')[0]}`" :href="pj.repo.startsWith('http')? pj.repo: `https://github.com/${pj.repo}`" target="_blank" rel="noopener noreferrer">访问仓库</a>
								<a v-if="pj.link" :href="pj.link" target="_blank" rel="noopener">访问链接</a>
							</div>
						</div>
					</template>
				</div>
				<p class="no-more">没有更多项目了...</p>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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
.desc::before {
	content: '> ';
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
