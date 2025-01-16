<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();
</script>

<template>
	<div id="nav">
		<div id="left">
			<router-link to="/" data-first>LapisNet</router-link>

			<router-link to="/" class="home">主页</router-link>
			<router-link to="/member" class="member">成员</router-link>
		</div>
		<div id="right">
			<router-link to="/about" class="about">关于</router-link>
			<span id="time">{{time}}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
a {
	text-decoration: none;
}
.icon {
	height: 1.35em;
}
#left {
	width: 50%;
	display: inline-block;
	&>:not([data-first]) {
		margin-left: 1em;
	}
}
#right {
	width: 50%;
	display: inline-block;
	text-align: right;
	&>:not(:last-child) {
		margin-right: 1em;
	}
}
#time {
	font-family: var(--Minecraft-fonts);
	font-style: normal;
	user-select: none;
	&:hover::before {
		transform: rotate3d(0,2,0,180deg);
	}
	&::before {
		content: '';
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
		margin-bottom: -0.2em; // 对齐右侧时间文字
		background-image: url('/res/clock.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		transition: transform 0.3s ease-in-out;
	}
}
</style>

<script>
export default {
	name: 'Nav',
	data() {
		return {time: 'Loading...'};
	},
	mounted() {
		let _this = this;
		function getTime() {
			const now = new Date();
			const hour = now.getHours() < 10? '0' + now.getHours() : now.getHours();
			const minute = now.getMinutes() < 10? '0' + now.getMinutes() : now.getMinutes();
			const period = now.getHours() >= 12? 'PM' : 'AM';
			_this.time = `${hour}:${minute} ${period}`;
		}
		this.timer = setInterval(getTime, 30000) && getTime();
	},
	beforeDestroy() {
		!!this.timer && clearInterval(this.timer);
	}
}
</script>