<template>
	<div class="flex flex-col items-center justify-center bg-blue-300 w-full">
		<div class="text-title">{{ title }}</div>
		<div v-for="msg in msgs" :key="msg">
			{{ msg }}
		</div>
		<div class="bg-red-200 w-96 h-32 m-2 p-1 rounded-lg text-center">
			{{ info }}
			<div>
				<p class="text-lg">연락처</p>
				<p>초원관광대표 강봉수: 010-3642-3836</p>
				<p>혼주쪽 연락처: 010-2458-1338</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: "버스 안내",
			msgs: `순천에서 오시는 하객님들을 위해
대절 버스를 준비 하였습니다.
먼 거리에서 와주셔서 감사합니다 (TODO)`.split("\n"),
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
			location: "연향동 여성회관 건너편",
			altPhoneNumber: "010 2458 1338",
			info: "11월 12일 연향동 여성회관 건너편 6시출발",
		};
	},
};
</script>

<style></style>
