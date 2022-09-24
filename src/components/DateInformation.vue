<template>
	<div class="bg-green-400 w-full flex flex-col items-center justify-center">
		<div class="flex items-center justify-between pt-12 overflow-x-auto">
			<table class="w-full">
				<thead>
					<tr>
						<th v-for="d in days" :key="'textD' + d">
							<div class="w-full flex justify-center">
								<p
									class="text-base font-medium text-center text-gray-800 dark:text-gray-100"
								>
									{{ d }}
								</p>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="pt-6">
							<div
								class="px-2 py-2 cursor-pointer flex w-full justify-center"
							></div>
						</td>
						<td class="pt-6">
							<div
								class="px-2 py-2 cursor-pointer flex w-full justify-center"
							></div>
						</td>
						<td>
							<div
								class="px-2 py-2 cursor-pointer flex w-full justify-center"
							></div>
						</td>
						<td class="pt-6">
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									1
								</p>
							</div>
						</td>
						<td class="pt-6">
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									2
								</p>
							</div>
						</td>
						<td class="pt-6">
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">3</p>
							</div>
						</td>
						<td class="pt-6">
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">4</p>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									5
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									6
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									7
								</p>
							</div>
						</td>
						<td>
							<div class="w-full h-full">
								<div
									class="flex items-center justify-center w-full rounded-full cursor-pointer"
								>
									<a
										role="link"
										tabindex="0"
										class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
										>8</a
									>
								</div>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									9
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">10</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">11</p>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									12
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									13
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									14
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									15
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									16
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">17</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">18</p>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									19
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									20
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									21
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									22
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									23
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">24</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p class="text-base text-gray-500 dark:text-gray-100">25</p>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									26
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									27
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									28
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									29
								</p>
							</div>
						</td>
						<td>
							<div class="px-2 py-2 cursor-pointer flex w-full justify-center">
								<p
									class="text-base text-gray-500 dark:text-gray-100 font-medium"
								>
									30
								</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
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
