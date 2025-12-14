<script setup>
const props = defineProps({
	license: { type: String, default: 'ARR' }
});
</script>

<template>
	<span class="badge" :class="$style['license-badge']" title="许可证" :data-arr="license === 'ARR'">📄 {{ license === 'ARR'? '保留所有权': license + '许可证' }}</span>
</template>

<style module>
.license-badge {
	background-color: #00bbff;
	color: #333;
}
.license-badge[data-arr="true"] {
	background-color: #6786c9;
}
</style>
