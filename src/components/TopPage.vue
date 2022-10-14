<template>
	<!-- <img :src="mainPageUrl" alt="" /> -->
	<div
		class="flex flex-col w-full justify-center items-center bg-set1-0 py-16"
		id="top-page-bg"
	>
		<div class="flex flex-col text-center text-xl">
			지수 <br />
			💍 <br />
			금채
		</div>

		<div class="w-5/6 h-auto mt-8 mb-8">
			<img :src="imgs.topView" class="rounded-md" />
		</div>
	</div>
</template>

<script setup>
import { useImgStore } from "@/store/global";

const imgStore = useImgStore();
const { imgs } = imgStore;
</script>

<style></style>
