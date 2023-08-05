<template>
	<div class="flex flex-col justify-center bg-set1-0 items-center w-full py-16">
		<hr class="mb-8 border w-1/3 border-set1-3/60" />
		<!-- title -->
		<div class="text-title mb-12">{{ title }}</div>
		<!-- greeting msg -->
		<div class="flex flex-col justify-center items-center mb-6">
			<div v-for="msg in msgs" :key="msg" class="text-md mb-2">
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
				<span class="inline text text-xs text-set1-3/80"> 의 딸</span>
				<span class="inline text"> 연주</span>
			</div>
		</div>
	</div>
</template>

<script setup>

import { useImgStore } from "@/store/global";

const imgStore = useImgStore();
const { imgs } = imgStore;
const title = "초대합니다???";
const msgs = `
오랜 기다림 속에서 저희 두 사람, 
한마음 되어 참된 사랑의 
결실을 맺게 되었습니다.
오셔서 축복해 주시면 
큰 기쁨이 되겠습니다.`.split("\n");

const dongwooParents = "서홍원·박서영";
const yeonjooParents = "오연환·김영희";

</script>
