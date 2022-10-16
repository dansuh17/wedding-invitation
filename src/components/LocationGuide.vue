<template>
	<div
		class="bg-set1-0 flex flex-col justify-center items-center text-center w-full py-16"
	>
		<hr class="mb-8 border w-1/3 border-set1-3/60" />
		<div class="text-title mb-12">{{ title }}</div>
		<div id="content" class="w-5/6">
			<div id="loc">
				<div class="text-lg text-set1-4">{{ primaryLocation }}</div>
				<div class="text-set1-4/70">
					<div class="text-base mt-1">
						{{ secondaryLocation }}
					</div>
					<div class="text-base mb-2">
						{{ texts.tel }}
					</div>
				</div>
			</div>
			<div id="googleMap" class="border h-96 mx-auto m-4">
				<iframe
					src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAPq5eh2Azx1OCqRGMWh-V_5Tw48R_FTR0&q=더컨벤션+잠실점&zoom=15&language=ko"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="w-full h-full"
				></iframe>
			</div>

			<div
				id="appMaps"
				class="flex gap-4 mt-4 justify-center items-center mb-8"
			>
				<img
					v-for="(imgPath, key) in logoImagePaths"
					:key="key"
					:src="imgPath"
					@click="redirectToNewTab(key)"
					class="w-14 h-14 rounded-xl cursor-pointer"
				/>
			</div>
			<div id="locationInstructions" class="flex flex-col text-set1-4">
				<div id="subway" class="mb-8">
					<p class="text-lg">지하철안내</p>
					<p
						class="text-set1-4/70"
						v-for="inst in instructions.subway.split('\n')"
						:key="'subway' + inst"
					>
						{{ inst }}
					</p>
				</div>
				<div id="parking" class="mb-8">
					<p class="text-lg">주차안내</p>
					<p class="text-set1-4/70">
						{{ instructions.parking }}
					</p>
				</div>
				<div
					id="bus-info"
					class="flex flex-col text-center items-center justify-center"
				>
					<p class="text-lg">전세버스 안내</p>
					<p class="text-set1-4/70">
						{{ busInfo.dateLocation }}
					</p>
					<p class="text-set1-4/70 text-right">
						{{ busInfo.driverInfo }}
					</p>
					<p class="text-set1-4/70 text-right">
						{{ busInfo.emergencyInfo }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useLocationStore } from "@/store/global";

const { logoImagePaths, redirectToNewTab } = useLocationStore();

const texts = {
	title: "오시는 길",
	primaryLocation: "잠실 더컨벤션 (교통회관) 3층 아모르홀",
	secondaryLocation: "서울 송파구 올림픽로 319 (서울 송파구 신천동 11-7)",
	hallName: "3층 아모르홀",
	tel: "Tel. 02-418-5000",
};

const instructions = {
	subway: `2호선 잠실역 8번 출구 약 800m
	8호선 잠실역 9번 출구 약 30m`,
	bus: `간선버스(파랑): 341, 302, 3003, 320
	지선(초록): 4319, 3216, 2415, 4318, 4313, 3215, 3313
	`,
	parking: "교통회관 지상·지하 주차장 이용 (2시간 무료주차)",
};

const busInfo = {
	dateLocation: "예식당일 아침 6시 순천시 연향동 여성회관 맞은편",
	driverInfo: "초원관광대표 강봉수님: 010-3642-3836",
	emergencyInfo: "혼주쪽연락처 장종기님: 010-2458-1338",
};
const { title, primaryLocation, secondaryLocation } = texts;
</script>

<style></style>
