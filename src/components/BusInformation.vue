<template>
	<div
		class="flex flex-col items-center justify-center bg-set1-0/80 w-full py-16"
	>
		<div class="text-title">{{ title }}</div>
		<div class="bg-set1-1 w-96 h-96 mt-8 p-1 rounded-lg text-center">
			<p class="text-lg">{{ location }}</p>
			<p>{{ time }}</p>
		</div>
		<div>
			<p class="text-lg">연락처</p>
			<p>초원관광대표 강봉수: 010-3642-3836</p>
			<p>혼주쪽 연락처: 010-2458-1338</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: "전세버스 탑승 안내",
			contact: {
				companyName: "초월관광",
				name: "강봉수",
				phoneNumber: "010 3642 3836",
			},
			date: {
				month: "11",
				day: "12",
				time: "AM 06.00",
			},
			location: "순천시 연향동 여성회관 맞은편",
			time: "(11월 12일 오전 06:00 출발)",
		};
	},
};
</script>

<style></style>
