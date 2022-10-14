<template>
	<div
		class="bg-set1-0/80 flex flex-col justify-center items-center w-full py-16"
	>
		<div class="text-title">{{ title }}</div>
		<div class="text-lg mt-8">{{ primaryLocation }}</div>
		<div class="text-base mt-1 mb-2 text-set1-30">{{ hallName }}</div>
		<div class="flex gap-4 mt-4">
			<img
				v-for="(imgPath, key) in logoImagePaths"
				:key="key"
				:src="imgPath"
				@click="redirectToNewTab(key)"
				class="w-12 h-12 rounded-xl cursor-pointer"
			/>
		</div>
		<div class="border w-5/6 h-96 rounded-xl mx-auto m-4">
			<iframe
				src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAPq5eh2Azx1OCqRGMWh-V_5Tw48R_FTR0&q=더컨벤션+잠실점&zoom=15&language=ko"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				class="w-full h-full rounded-xl"
			></iframe>
		</div>
	</div>
</template>

<script setup>
import { useLocationStore } from "@/store/global";

const { logoImagePaths, redirectToNewTab } = useLocationStore();

const texts = {
	title: "오시는 길",
	primaryLocation: "더컨벤션 잠실점",
	hallName: "3층 아모르홀",
};
const { title, primaryLocation, hallName } = texts;
</script>

<style></style>
