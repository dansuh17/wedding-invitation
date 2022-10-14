<template>
	<div class="flex flex-col justify-center items-center bg-set1-0 w-full py-16">
		<div class="text-title mb-8">{{ title }}</div>
		<div v-for="line in msg" :key="line" class="mb-1">
			{{ line }}
		</div>
		<div class="flex items-center mt-5">
			<button
				class="w-auto h-auto m-4 rounded-lg bg-set1-1 p-3"
				@click="toggle('js')"
			>
				신랑 측
			</button>
			<button
				class="w-auto h-auto m-4 rounded-lg bg-set1-2 text-set1-0 p-3"
				@click="toggle('gc')"
			>
				신부 측
			</button>
		</div>
		<div v-if="selected" class="w-full items-center flex flex-col">
			<div
				class="p-4 w-10/12 h-auto rounded-lg justify-start mb-4"
				:class="{
					'bg-set1-1': selected === 'js',
					'bg-set1-2 text-set1-0': selected === 'gc',
				}"
				v-for="desc in bankAccounts[selected]"
				:key="'bank' + desc.name"
			>
				<!-- upper bar -->
				<div>
					{{ desc.name }}
				</div>
				<!-- lower bar -->
				<div class="flex pt-2">
					<div class="pr-4">
						{{ desc.bank }}
					</div>
					<div>
						{{ desc.acc }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: "마음 전하실 곳",
			msg: `직접 만나지 못해도

축하해 주고싶은 마음을 위해

계좌번호를 기재합니다.

어려운 시기에 축복해 주셔서

감사합니다.`.split("\n"),
			bankAccounts: {
				gc: [
					{
						name: "장금채",
						acc: "088-156667-01-011",
						title: "신부",
						bank: "기업",
					},
				],
				js: [
					{
						name: "전지수",
						acc: "110-491-225579",
						title: "신랑",
						bank: "신한",
					},
					{ name: "정연우", acc: "110-491-225579", title: "모", bank: "신한" },
				],
			},
			selected: null,
		};
	},
	methods: {
		toggle(name) {
			if (this.selected && name === this.selected) {
				this.selected = null;
			} else {
				this.selected = name;
			}
		},
	},
};
</script>
