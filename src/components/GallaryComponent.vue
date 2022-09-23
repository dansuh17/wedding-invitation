<template>
	<div class="flex flex-col justify-center items-center bg-blue-100 w-full">
		<div class="text-title mb-4">{{ title }}</div>
		<div class="grid grid-cols-3 gap-2 mx-2 mb-4">
			<img
				v-for="(img, i) in imgs"
				:key="img"
				:src="img"
				class="rounded-xl cursor-pointer"
				@click="togglePopup(i)"
			/>
		</div>
	</div>
</template>

<script>
export default {
	emits: ["imgPopup"],
	props: ["imgs"],
	methods: {
		togglePopup(i) {
			this.$emit("imgPopup", i);
		},
	},
	data() {
		return {
			title: "사진첩",
		};
	},
};
</script>
