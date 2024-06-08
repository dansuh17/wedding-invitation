<template>
	<div class="bg-set1-0 w-full flex flex-col items-center justify-center py-16">
		<!-- Text -->
		<hr class="mb-8 border w-1/3 border-set1-3/60" />
		<div class="w-max flex flex-col justify-center items-center">
			<p class="text-title">9월</p>
			<!-- <div class="relative">
				<div class="absolute left-0">11월</div>
				<div class="absolute right-0">토. 낮 1:30</div>
			</div> -->
			<!-- Calendar -->
			<!--<div class="relative w-full">
				<p class="text-lg absolute right-2"></p>
			</div>-->
			<div class="flex items-center justify-between pt-12">
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
	</div>
	<!-- calendar -->
</template>

<script>

export default {
	data() {
		return {
			days: ["일", "월", "화", "수", "목", "금", "토"],
			offset: 5,
			numDays: 30,
			theDay: 9,
			title: "날짜",
			body: `
9월 9일 토요일
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
