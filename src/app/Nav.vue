<script setup>
import {ref, onMounted, useTemplateRef} from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter();

const time = ref('Loading...');
onMounted(() => {
	/** 初始化时钟 */
	setInterval(() => {
		const now = new Date();
		const hour = now.getHours() < 10? `0${now.getHours()}`: now.getHours();
		const minute = now.getMinutes() < 10? `0${now.getMinutes()}`: now.getMinutes();
		const period = hour < 12? '上午': '下午';
		time.value = `${hour}:${minute} ${period}`;
	}, 1000);
});

const navMenu = useTemplateRef('navMenu');
const navMenuBgShadow = useTemplateRef('navMenuBgShadow');
const toggleMenu = () => {
	navMenu.value.classList.toggle('show');
	navMenuBgShadow.value.classList.toggle('show');
}
globalThis.toggleMenu = toggleMenu;
</script>

<template>
	<div id="nav">
		<div id="left">
			<router-link to="/" class="first"><span class="--lapis-icon"></span></router-link>

			<router-link to="/member" class="more">成员</router-link>
			<router-link to="/project" class="more">项目</router-link>
		</div>
		<div id="right">
			<router-link to="/about" class="more">关于</router-link>
			<span id="time">{{time}}</span>
			<a id="menu" href="#menu" class="less" @click.prevent="toggleMenu"><i class="fa fa-bars"></i></a>
		</div>

		<div id="nav-menu" ref="navMenu">
			<h2 style="margin-top: 0.2em;">菜单</h2>
			<router-link to="/">首页</router-link>
			<router-link to="/member">成员</router-link>
			<router-link to="/project">项目</router-link>
			<router-link to="/about">关于</router-link>
		</div>
		<div id="nav-menu-bg-shadow" ref="navMenuBgShadow" @click="toggleMenu"></div>
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
		font-family: Minecraft, Unifont, system-ui, -apple-system, BlinkMacSystemFont;
		font-size: 1.2em;
		font-weight: bold;
	}
}
#left {
	width: 50%;
	display: inline-block;
	&>:not(.first) {
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
	font-family: Minecraft, Unifont, system-ui, -apple-system, BlinkMacSystemFont;
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
.less, #nav-menu {
	display: none;
}
@media screen and (max-width: 768px) {
	#nav {
		font-size: 125%;
	}
	/* #menu {
		&>i {
			position: relative;
			display: inline-block;
			width: 28px;
			height: 2.5px;
			color: #fff;
			font: 700 14px/.4 Helvetica;
			text-transform: uppercase;
			text-indent: -55px;
			background: #fff;
			-webkit-transition: .2s;
			transition: .2s;
			&::before, &::after {
				content: "";
				width: 28px;
				height: 2.5px;
				background: #fff;
				position: absolute;
				left: 0;
				transition: .2s;
			}
			&::before {
				top: -10px;
			}
			&::after {
				bottom: -10px;
			}
		}
	} */
	#nav-menu {
		display: flex;
		flex-direction: column;
		font-size: 115%;
		background-color: var(--pico-secondary-background);
		position: fixed;
		top: 0;
		right: -40%;
		height: 100%;
		width: 40%;
		z-index: 10;
		transition: .2s ease-in-out;
		& * {
			margin-left: 0.4rem;
		}
		&.show {
			right: 0;
		}
	}
	#nav-menu-bg-shadow {
		display: block;
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.4);
		backdrop-filter: blur(10px);
		opacity: 0;
		z-index: 1;
		transition: .2s;
		pointer-events: none;
		&.show {
			opacity: 1;
			pointer-events: auto;
		}
	}
	#right>*:not(:last-child) {
		margin-right: 0.4rem;
	}
	.less {
		display: inline-block;
	}
	.more {
		display: none;
	}
	.--lapis-icon {
		margin-left: -12px;
		&::after {
			font-size: 1em;
		}
	}
}
</style>