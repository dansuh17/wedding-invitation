<template>
	<div class="flex flex-col justify-center items-center bg-set1-1 w-full py-10">
		<div class="text-title mb-4 text-xl">{{ title }}</div>
		<div class="flex flex-col items-center mt-5 mb-5 text-sm">
			<div class="flex items-center">
				<p>신랑측</p>
				<button
					class="w-auto h-auto mx-4 my-2 rounded-xl p-2 text-sm"
					:class="{
						'bg-set1-5': selected != 'ds',
						'text-set1-0': selected != 'ds',
						'bg-set1-6': selected == 'ds',
						'text-set1-3': selected == 'ds',
					}"
					@click="toggle('ds')"
				>
					계좌번호 보기
				</button>
			</div>
			<div class="flex items-center">
				<p>신부측</p>
				<button
					class="w-auto h-auto mx-4 my-2 rounded-xl p-2 text-sm"
					:class="{
						'bg-set1-5': selected != 'yj',
						'text-set1-0': selected != 'yj',
						'bg-set1-6': selected == 'yj',
						'text-set1-3': selected == 'yj',
					}"
					@click="toggle('yj')"
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
				class="p-4 w-10/12 h-auto rounded-lg mb-4 flex relative bg-set1-6"
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
const input = ref();
const filteredText = ref("");

// const copyToClipboard = (accountNum) => {
// 	const filtered = accountNum.replaceAll("-", "");
// 	navigator.clipboard.writeText(filtered)
// 		.then(() => alert(`${accountNum} 계좌번호가 복사되었습니다.`))
// 		.catch(() => alert(`Something went wrong.`));
// };
const copyToClipboard = (accountNum) => {
  const filtered = accountNum.replaceAll("-", "");
  filteredText.value = filtered;
  // const copyText = document.getElementById("myInput");
  setTimeout(() => {
    input.value.select();
    // copyText.select();
    document.execCommand("copy");
    alert(`${accountNum} 계좌번호가 복사되었습니다.`);
  });
};

const bankAccounts = {
	yj: [
		{
			name: "오연주",
			acc: "1002-555-033877",
			title: "신부",
			bank: "우리",
		},
		{
			name: "오연환",
			acc: "1002-562-843291",
			title: "신부 부",
			bank: "우리",
		},
		{
			name: "이영희",
			acc: "908-04-237857",
			title: "신부 모",
			bank: "신한",
		},
	],
	ds: [
		{
			name: "서동우",
			acc: "1002-744-500-899",
			title: "신랑",
			bank: "우리",
		},
		{
			name: "서홍원",
			acc: "126-105346-02-302",
			title: "신랑 부",
			bank: "우리",
		},
		{
			name: "박서영",
			acc: "110-414-839755",
			title: "신랑 모",
			bank: "신한",
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
