<template>
	<!-- <img :src="mainPageUrl" alt="" /> -->
	<div
		class="flex flex-col w-full justify-center items-center bg-set1-0 py-16"
		id="top-page-bg"
	>
		<!-- <div class="pb-4">💍</div> -->
		<div class="flex flex-col text-center text-title mb-12">동우 💍 연주</div>

		<div class="w-2/3 h-auto mb-8">
			<img :src="imgs.topView" />
		</div>

		<div
			v-for="msg in msgs"
			class="w-full flex flex-col justify-center items-center mb-2 text-lg"
			:key="'top-msg' + msg"
		>
			{{ msg }}
		</div>
	</div>
</template>

<script setup>

import { useImgStore } from "@/store/global";

const imgStore = useImgStore();
const { imgs } = imgStore;

const msgs = `
			2023년 9월 9일 토요일 오전 11시 30분
			휘닉스 제주 섭지코지 글라스하우스 (장소 공개?)
`.split("\n");

</script>

<style></style>
