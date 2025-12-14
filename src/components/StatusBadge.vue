<script setup>
const statusTexts = {
	unknown: '❔待确定',
	wip: '🚧开发中',
	normal: '✅活跃中',
	deprecated: '⚠️已放弃',
	archived: '💾已停更'
};
const props = defineProps({
	type: { type: String, default: 'unknown' }
});
</script>

<template>
	<span class="badge status-badge" title="状态" :data-type="type || 'unknown'">{{ statusTexts[type ||
		'unknown'] }}</span>
</template>
