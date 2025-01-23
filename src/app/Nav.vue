<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();
</script>

<template>
	<div id="nav">
		<div id="left">
			<router-link to="/" data-first><span class="--lapis-icon"></span></router-link>

			<router-link to="/member" class="member">成员</router-link>
			<router-link to="/project" class>项目</router-link>
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
.--lapis-icon {
	&::before {
		content: '';
		display: inline-block;
		width: 32px;
		height: 32px;
		margin-bottom: -0.4em;
		background: url('/favicon.ico') no-repeat center;
		background-size: contain;
	}
	&::after {
		content: 'LapisNet';
		font-family: Minecraft;
		font-size: 1.2em;
		font-weight: bold;
	}
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
	font-family: Minecraft;
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
@media screen and (max-width: 768px) {
	.--lapis-icon {
		margin-left: -12px;
		&::before {
			width: 24px;
			height: 24px;
			background-size: contain;
		}
		&::after {
			font-size: 1em;
		}
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
		/** 初始化时钟 */
		setInterval(() => {
			const now = new Date();
			const hour = now.getHours() < 10? `0${now.getHours()}`: now.getHours();
			const minute = now.getMinutes() < 10? `0${now.getMinutes()}`: now.getMinutes();
			const period = hour < 12? 'AM': 'PM';
			this.time = `${hour}:${minute} ${period}`;
		}, 1000);
	}
}
</script>