<template>
	<div class="flex flex-col justify-center bg-set1-1 items-center w-full py-16">
		<!-- <hr class="mb-8 border w-1/3 border-set1-3/60" /> -->
		<!-- title -->
		<!-- <div class="text-title mb-12">{{ title }}</div> -->
		<div class="font-portologo text-3xl text-set1-7 mb-10">Introduction</div>

		<!-- <div class="w-2/3 h-auto mb-8 flex flex-col justify-center items-center">
			<img :src="imgs.introductionText" />
		</div> -->
		<!-- greeting msg -->
		<div class="flex flex-col justify-center items-center mb-2">
			<div v-for="msg in msgs" :key="msg" class="text-md mb-2 text-sm">
				{{ msg }}
			</div>
		</div>
		<div class="w-5/6 h-auto mt-8 mb-8">
			<img :src="imgs.invitationView" />
		</div>
		<!-- name & entitlements -->
		<div class="flex flex-col text-right text-lg">
			<div id="dongwooFamily">
				<span class="inline text">{{ dongwooParents }}</span>
				<span class="inline text text-xs text-set1-3/80"> 의 아들</span>
				<span class="inline text"> 동우</span>
			</div>
			<div id="yeonjooFamily">
				<span class="inline text">{{ yeonjooParents }}</span>
				<span class="inline text text-xs text-set1-3/80"> 의 &nbsp;&nbsp;&nbsp;딸</span>
				<span class="inline text"> 연주</span>
			</div>
		</div>
	</div>
</template>

<script setup>

import { useImgStore } from "@/store/global";

const imgStore = useImgStore();
const { imgs } = imgStore;
// const title = "결혼합니다";
const msgs = `

함께 손을 맞잡고 맞이하는 일곱 번째 가을, 
저희 두 사람 결혼합니다.
두 사람의 뜻에 따라 
양가 부모님과 형제만 모시고,
제주에서 소박한 결혼식을 올리게 되었습니다.
저희에게 소중하고 감사한 분들을 모시고 
직접 인사드리지 못해 송구스럽습니다.
멀리서나마 마음으로 축복해 주시면 
정말 감사하겠습니다.
예쁘게 사는 모습으로 
여러분들의 축복에 보답하겠습니다.`.split("\n");

const dongwooParents = "서홍원·박서영";
const yeonjooParents = "오연환·이영희";

</script>
