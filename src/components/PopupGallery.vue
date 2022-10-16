<template>
	<Transition name="modal">
		<div class="z-[1] fixed top-0 w-screen h-full flex flex-col items-center">
			<div
				class="bg-black/[.85] w-full items-center justify-center h-full flex-col flex relative"
				@click.self="removePopup"
			>
				<CrossMark
					class="absolute top-0 right-2 cursor-pointer z-[2]"
					@keydown.esc="removePopup"
					@click="removePopup"
				/>

				<vueper-slides
					:init-slide="selectedImg + 1"
					:fade="true"
					:bullets="false"
					:transition-speed="1000"
					:slide-image-inside="true"
					:fixed-height="'90vh'"
					class="w-full"
				>
					<vueper-slide
						v-for="(img, i) in imgs.all"
						:key="'img' + i"
						:image="img"
					/>
				</vueper-slides>
			</div>
		</div>
	</Transition>
</template>

<script setup>
import { useImgStore } from "../store/global";
import CrossMark from "./svgs/CrossMark.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { storeToRefs } from "pinia";

const imgStore = useImgStore();
const { removePopup, imgs } = imgStore;
const { selectedImg } = storeToRefs(imgStore);
</script>

<style>
.vueperslide__image {
	@apply bg-contain bg-no-repeat;
}
</style>
