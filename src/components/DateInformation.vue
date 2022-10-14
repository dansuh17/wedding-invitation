<template>
	<div
		class="bg-set1-0/80 w-full flex flex-col items-center justify-center py-16"
	>
		<!-- Text -->
		<div class="flex flex-col text-center">
			<!-- Title -->
			<div class="text-title text-set1-3 mb-8">
				{{ title }}
			</div>
			<div v-for="t in body" :key="'invitation-body-' + t" class="mb-1">
				{{ t }}
			</div>
		</div>
		<!-- Calendar -->
		<div class="flex items-center justify-between pt-12 overflow-x-auto">
			<table class="w-full">
				<thead>
					<tr class="border-b border-set1-3">
						<th class="px-4 py-3" v-for="d in days" :key="'textD' + d">
							<div class="w-full flex justify-center">
								<p class="text-base font-medium text-center">
									{{ d }}
								</p>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="row in numRows" :key="'row' + row">
						<td class="px-4 py-3" v-for="col in 7" :key="'col' + col">
							<div class="cursor-pointer flex w-full justify-center">
								<p
									class="text-base font-medium"
									:class="{
										'text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-set1-2  rounded-full':
											getDay(row, col) === theDay,
									}"
								>
									{{ getDay(row, col) }}
								</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<!-- calendar -->
</template>

<script>
export default {
	data() {
		return {
			days: ["일", "월", "화", "수", "목", "금", "토"],
			offset: 2,
			numDays: 30,
			theDay: 12,
			title: "날짜",
			body: `
11월 12일 토요일
낮 12시 30분
			`.split("\n"),
		};
	},
	methods: {
		getDay(row, col) {
			row -= 1;
			col -= 1;
			return this.getDays[row * 7 + col];
		},
	},
	computed: {
		numRows() {
			const numItems = this.offset + this.numDays;
			let numRows = Math.floor(numItems / 7);
			if (numItems % 7 !== 0) {
				numRows++;
			}
			return numRows;
		},
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
};
</script>

<style></style>
