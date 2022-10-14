<template>
	<div class="flex flex-col justify-center items-center bg-set1-0 w-full py-16">
		<div class="text-title mb-8">{{ title }}</div>
		<div class="grid grid-cols-3 gap-2 mx-2 mb-4">
			<img
				v-for="(img, i) in imgs.all"
				:key="img"
				:src="img"
				class="rounded-md cursor-pointer object-cover h-48 w-96 bg-white"
				@click="imgPopup(i)"
			/>
		</div>
	</div>
</template>

<script setup>
import { useImgStore } from "@/store/global";

const { imgs, imgPopup } = useImgStore();

const title = "사진첩";
</script>
