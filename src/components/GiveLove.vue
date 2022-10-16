<template>
	<div class="flex flex-col justify-center items-center bg-set1-0 w-full py-16">
		<hr class="mb-8 border w-1/2 border-set1-3/60" />
		<div class="text-title mb-8">{{ title }}</div>
		<!-- <div v-for="line in msg" :key="line" class="mb-1">
			{{ line }}
		</div> -->
		<div class="flex flex-col items-center mt-5">
			<div class="flex items-center">
				<p>신랑측</p>
				<button
					class="w-auto h-auto m-4 rounded-xl bg-set1-1 p-3"
					@click="toggle('js')"
				>
					계좌번호 보기
				</button>
			</div>

			<div class="flex items-center">
				<p>신부측</p>
				<button
					class="w-auto h-auto m-4 rounded-xl bg-set1-2 text-set1-0 p-3"
					@click="toggle('gc')"
				>
					계좌번호 보기
				</button>
			</div>
		</div>
		<div
			v-if="selected"
			class="w-full items-center flex flex-col transition-all duration-500 ease-in-out"
		>
			<div
				class="p-4 w-10/12 h-auto rounded-lg mb-4 flex relative"
				:class="{
					'bg-set1-1': selected === 'js',
					'bg-set1-2 text-set1-0': selected === 'gc',
				}"
				v-for="desc in bankAccounts[selected]"
				:key="'bank' + desc.name"
			>
				<div id="content">
					<!-- upper bar -->
					<div>{{ desc.name }} ({{ desc.title }})</div>
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

				<div class="absolute top-1/3 right-4">
					<CopyPaste
						class="align-middle cursor-pointer"
						@click="copyToClipboard(desc.acc)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import CopyPaste from "./svgs/CopyPaste.vue";

const title = "마음 전하실 곳";

// const msg = `직접 만나지 못해도

// 축하해 주고싶은 마음을 위해

// 계좌번호를 기재합니다.

// 어려운 시기에 축복해 주셔서

// 감사합니다.`.split("\n");
const copyToClipboard = (acc) => {
	const filtered = acc.replaceAll("-", "");
	navigator.clipboard.writeText(filtered);
	alert(`${acc} 계좌번호가 복사되었습니다`);
};

const bankAccounts = {
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
		{
			name: "전용출",
			acc: "1021-01-4441708",
			title: "신랑 부",
			bank: "농협",
		},
		{
			name: "정연우",
			acc: "010-9001-8821-19",
			title: "신랑 모",
			bank: "전북",
		},
	],
};

let selected = ref(null);

const toggle = (name) => {
	if (selected.value && name === selected.value) {
		selected.value = null;
	} else {
		selected.value = name;
	}
};
</script>
