<template>
	<div class="flex flex-col justify-center items-center bg-set1-6 w-full py-16">
		<!-- <hr class="mb-8 border w-1/3 border-set1-3/60" /> -->
		<div class="text-title mb-20 mt-5">{{ title }}</div>
		<div class="grid grid-cols-3 gap-2 mx-2">
			<img
				v-for="(img, i) in imgs.all.slice(0, 9)"
				:key="img"
				:src="img"
				class="rounded-sm cursor-pointer object-cover h-64 w-64 bg-set1-4"
				@click="imgPopup(i)"
			/>
		</div>
		<div
			class="bg-set1-1 w-full p-3 text-center mt-1 cursor-pointer rounded-xl"
			@click="imgPopup(9)"
		>
			더 보기
		</div>
	</div>
</template>

<script setup>
import { useImgStore } from "@/store/global";
import "vueperslides/dist/vueperslides.css";

const { imgs, imgPopup } = useImgStore();

const title = "G A L L E R Y";
</script>
