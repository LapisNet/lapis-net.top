<template>
	<div id="main">
		<div class="title">404 - 未找到页面</div>
		<div class="content">
			<p>＞︿＜ 你需要的页面没有找到，也许它被移动了或者删除了。</p>
			<a role="button" href="#prev" @click.prevent="$router.go(-1)">返回上一页</a>
			<a role="button" href="#index" @click.prevent="$router.push('/')" style="margin-left: 1em;">返回首页</a>
		</div>
	</div>
</template>

<script>
export default {
	name: '404'
}
</script>