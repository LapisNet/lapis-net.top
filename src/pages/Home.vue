<script setup>
import {ref, onBeforeMount} from 'vue';

function splitOnce(str) {
	const index = str.indexOf(' ');
	return [str.slice(0, index), str.slice(index + 1)];
}

function getToday() {
	const date = new Date();
	const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	let today = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${week[date.getDay()]}`;
	return today;
}

function paseDate(date) {
	date = date.trim().split(/\/|\-|\./);
	return `${date[0]}年${date[1]}月${date[2]}日`;
}

const news = ref([]);
onBeforeMount(async() => {
	const res = await fetch('https://ghproxy.cn/https://raw.githubusercontent.com/LapisNet/.public_data/refs/heads/main/news.txt');
	let text = await res.text();
	text = text.trim().split('\n');
	for(text of text) {
		if(text.startsWith('#')) continue;
		const [date, title] = splitOnce(text);
		news.value.push({date: paseDate(date), title});
	}
});

</script>

<template>
	<div id="main">
		<div class="title">欢迎</div>
		<div class="content">
			<p>
				欢迎访问 LapisNet 官网!<br>
				今天是 {{getToday()}}
			</p>
		</div>
		<div class="title">新闻</div>
		<div class="content">
			<div id="news">
				<p v-show="news.length === 0" class="loading">加载新闻...</p>
				<ul v-show="news.length > 0">
					<p></p>
					<li v-for="item in news" :key="item.date">{{item.date}} - {{item.title}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
#news {
	display: block;
	padding: 1em;
	background-color: #0008;
	border-radius: 16px;
	width: fit-content;
}
</style>

<script>
export default {
	name: 'Home'
}
</script>