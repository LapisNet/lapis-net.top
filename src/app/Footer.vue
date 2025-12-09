<script setup>
import {onMounted} from 'vue';
let footer, touchStartX, touchStartY;
onMounted(() => {
	footer = document.getElementById('footer');
});

document.addEventListener('wheel', (e) => { // pc端滚轮影响页脚
	if(!!e.wheelDelta) {
		if(e.wheelDelta > 0) { // 上滚
			footer.classList.remove('scrolled');
		} else { // 下滚
			footer.classList.add('scrolled');
		}
	}
});

document.addEventListener('touchstart', (e) => { // 移动端开始触摸
	if(import.meta.env.DEV) console.log('开始触摸');
	touchStartX = e.touches[0].clientX;
	touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => { // 移动端触摸移动
	if(import.meta.env.DEV) console.log('触摸移动');
	let touchEndX = e.touches[0].clientX;
	let touchEndY = e.touches[0].clientY;

	let x = touchEndX - touchStartX;
	let y = touchEndY - touchStartY;
	
	if(Math.abs(y) > Math.abs(x) && y > 0) { // 上滑
		footer.classList.remove('scrolled');
	} if(Math.abs(y) > Math.abs(x) && y < 0) { // 下滑
		footer.classList.add('scrolled');
	}
});
</script>

<template>
	<div id="footer">
		<div class="content">
			<img class="banner" title="LapisNet" src="/res/banner.webp" />
			<p>Copyright (c) 2025 LapisNet. All rights reserved.</p>
		</div>
		<div class="content" data-title="我们用到的技术"><br>
			<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a><br>
			<a href="https://picocss.com" target="_blank" rel="noopener noreferrer">Pico CSS</a><br>
			<a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome</a><br>
			<a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">Sass</a><br>
		</div>
		<div class="content" data-title="联系我们"><br>
			<i class="fas fa-envelope"></i><a href="mailto:1983997053@qq.com">1983997053@qq.com</a><br>
			<i class="fab fa-qq"></i><a href="https://qm.qq.com/q/i0F8L4P1jW">QQ群</a><br>
			<i class="fab fa-github"></i><a href="https://github.com/LapisNet">GitHub</a><br>
			<i class="fab fa-discord"></i><a href="https://discord.gg/m6BwyRp7Mv">Discord</a><br>
		</div>
		<div class="content" data-title="友情链接"><br>
			<a href="https://mcisee.top" target="_blank" rel="noopener noreferrer">所见皆是MC</a><br>
			<a href="https://fds.moe" target="_blank" rel="noopener noreferrer">FDS</a><br>
			<a href="https://mc.xzwmc.com" target="_blank" rel="noopener noreferrer">饼盒</a><br>
		</div>
	</div>
</template>

<style scoped lang="scss">
#footer {
	padding: 1em 0.4em;
	display: grid;
	align-items: start;
	justify-content: space-between;
	grid-template-columns: 22.6em 15% 15% 15%;
	font-size: 16px;
	height: fit-content;
	transition: opacity 0.3s ease-in-out;
	&.scrolled {
		opacity: 0;
		pointer-events: none;
	}
}
.content {
	&::before {
		content: attr(data-title);
		font-size: 18px;
		font-weight: bold;
	}
}
p {
	margin: 0;
	font-size: 0.8em;
	text-align: center;
	margin-top: 0.2em;
}
.banner {
	filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.2));
}
@media screen and (max-width: 768px) {
	.content:not(:first-child), .banner {
		display: none;
	}
}
</style>

<script>
export default {
	name: 'Footer'
}
</script>
