<template>
	<div class="flex flex-col justify-center items-center bg-slate-300 w-full">
		<div class="text-title">{{ title }}</div>
		<div v-for="line in msg" :key="line">
			{{ line }}
		</div>
		<div class="flex items-center">
			<button class="bank-button bg-red-500 text-white" @click="toggle('js')">
				신랑 측 계좌번호
			</button>
			<button class="bank-button bg-blue-500 text-white" @click="toggle('gc')">
				신부 측 계좌번호
			</button>
		</div>
		<div v-if="selected" class="account-card">
			{{ bankAccounts[selected] }}
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
				gc: "기업은행 088-156667-01-011 (장금채)",
				js: "신한은행 110-491-225579 (전지수)",
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

<style>
.bank-button {
	@apply w-auto h-auto m-4 p-2 rounded-lg;
}
.account-card {
	@apply w-auto h-auto m-4 p-4 bg-white text-black rounded-lg;
}
</style>
