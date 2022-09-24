<template>
	<div class="bg-green-400 w-full flex flex-col items-center justify-center">
		<div class="text-title">날짜</div>
		<div class="text-3xl my-4">11월</div>
		<div class="grid grid-cols-7 gap-x-10 mx-auto text-center">
			<div
				v-for="(d, i) in days"
				class="mt-2 mb-3"
				:key="d + i"
				:class="[
					{
						' text-red-400': [0, 6].includes(i % 7),
					},
				]"
			>
				{{ d }}
			</div>
			<div
				v-for="(day, i) in getDays()"
				name="backgroundCircle"
				class="rounded-full relative p-4"
				:class="{
					'text-blue-500 bg-white': day === theDay,
					'text-red-500': [0, 6].includes(i % 7),
				}"
				:key="i"
			>
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				>
					{{ day }}
				</div>
			</div>
		</div>
	</div>
	<!-- calendar -->
</template>

<script>
export default {
	methods: {
		getDays() {
			const days = [];
			for (let i = 0; i < this.offset; i++) {
				days.push("");
			}
			for (let day = 1; day < this.numDays + 1; day++) {
				days.push(day);
			}

			return days;
		},
	},
	data() {
		return {
			days: ["일", "월", "화", "수", "목", "금", "토"],
			offset: 2,
			numDays: 30,
			theDay: 12,
		};
	},
};
</script>

<style></style>
