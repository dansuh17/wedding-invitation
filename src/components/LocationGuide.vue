<template>
	<div class="bg-yellow-200 flex flex-col justify-center items-center w-full">
		<div class="text-title font-serif">{{ title }}</div>
		<div class="text-2xl">{{ primaryLocation }}</div>
		<div class="text-xl">({{ secondaryLocation }})</div>
		<div class="flex gap-4">
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

<script>
export default {
	data() {
		return {
			title: "오시는 길",
			primaryLocation: "더컨벤션 잠실점 3층 아모르홀",
			secondaryLocation: "서울 송파구 올림픽로 319",
			locationUrls: {
				google: "https://goo.gl/maps/GXYdYdEBchGnv8tS6",
				kakao: "http://kko.to/ekInjfWIb",
				naver: "https://naver.me/xC61fokj",
			},
			logoImagePaths: {
				google: require("../assets/googlemap-logo.jpeg"),
				kakao: require("../assets/kakaomap-logo.jpeg"),
				naver: require("../assets/navermap-logo.png"),
			},
		};
	},
	methods: {
		redirectToNewTab(mapType) {
			window.open(this.locationUrls[mapType], "_blank");
		},
	},
};
</script>

<style></style>
