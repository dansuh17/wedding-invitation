<template>
	<div
		class="flex flex-col justify-center bg-set1-0 items-center bg w-full py-16"
	>
		<!-- title -->
		<div class="text-title mb-8">{{ title }}</div>
		<!-- greeting msg -->
		<div class="flex flex-col justify-center items-center mb-6">
			<div v-for="msg in msgs" :key="msg" class="text-sm mb-2">
				{{ msg }}
			</div>
		</div>
		<div class="w-5/6 h-auto mt-8 mb-8">
			<img :src="imgs.invitationView" class="rounded-md" />
		</div>
		<!-- name & entitlements -->
		<div class="flex flex-col text-right">
			<div id="jisuFamily">
				<span class="inline text">{{ jisuParents }}</span>
				<span class="inline text text-xs text-set1-3/80"> 의 장남</span>
				<span class="inline text"> 지수</span>
			</div>
			<div id="geumchaeFamily">
				<span class="inline text">{{ geumchaeParents }}</span>
				<span class="inline text text-xs text-set1-3/80"> 의 장녀</span>
				<span class="inline text"> 금채</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useImgStore } from "@/store/global";

const imgStore = useImgStore();
const { imgs } = imgStore;
const title = "초대합니다";
const msgs = `
오랜 기다림 속에서 저희 두 사람, 
한마음 되어 참된 사랑의 
결실을 맺게 되었습니다.
오셔서 축복해 주시면 
큰 기쁨이 되겠습니다.`.split("\n");
const jisuParents = "전용출·정연우";
const geumchaeParents = "(故)장행기·조찬숙";
</script>
