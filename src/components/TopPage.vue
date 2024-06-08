<template>
	<!-- <img :src="mainPageUrl" alt="" /> -->
	<div
		class="flex flex-col w-full justify-center items-center bg-set1-0"
		id="top-page-bg"
	>
		<!-- <div class="pb-4">💍</div> -->
		
<!--    <div class="flex flex-col text-center text-title mb-12"><strong>동우 | 연주</strong></div>
-->
<div class="mb-10"></div>
<div class="text-2xl mt-5 mb-5">서동우</div>
<div class="font-portologo text-3xl text-set1-7">and</div>
<!-- <div class="w-2/3 h-auto mb-8 flex flex-col justify-center items-center">
	<img :src="imgs.andText" />
</div> -->
<div class="text-2xl mt-5 mb-5">오연주</div>
<div class="mb-10"></div>
<img :src="imgs.topView" />


<!---
		<div class="w-2/3 h-auto mb-8">
			<img :src="imgs.topView" />
		</div>
-->    
<div class="mb-10"></div>
		<div
			v-for="msg in msgs"
			class="w-full flex flex-col justify-center items-center mb-3 text-sm"
			:key="'top-msg' + msg"
		>
			{{ msg }}
		</div>
		<div class="mb-10"></div>
	</div>
</template>

<script setup>

import { useImgStore } from "@/store/global";

const imgStore = useImgStore();
const { imgs } = imgStore;

const msgs = `
			2023년 9월 9일 토요일
			제주 휘닉스 섭지코지 글라스하우스
`.split("\n");

</script>

<style></style>
