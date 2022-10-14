<template>
	<div class="z-[1] fixed top-0 w-screen h-full flex flex-col items-center">
		<div
			class="bg-black/[.85] w-full items-center justify-center h-full flex-col flex relative"
		>
			<CrossMark
				class="absolute top-0 right-2 cursor-pointer z-[2]"
				@keydown.esc="removePopup"
				@click="removePopup"
			/>

			<div class="w-full" id="mid-section">
				<div class="flex justify-center items-center relative" id="img-slide">
					<ArrowLeft
						class="cursor-pointer absolute left-0"
						@click="changeSelected(-1)"
					/>

					<Transition name="modal">
						<img :src="getSelectedImg()" class="h-auto w-full object-contain" />
					</Transition>

					<ArrowLeft
						class="rotate-180 cursor-pointer absolute right-0"
						@click="changeSelected(-1)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useImgStore } from "../store/global";
import ArrowLeft from "./svgs/ArrowLeft.vue";
import CrossMark from "./svgs/CrossMark.vue";

const { getSelectedImg, changeSelected, removePopup } = useImgStore();
</script>
