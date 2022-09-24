<template>
	<div class="bg-zinc-800">
		<div class="flex flex-col w-[500px] items-center justify-center mx-auto">
			<top-page id="topPage" />
			<nav-bar id="navBar" />
			<invitation-letter id="invitationLetter" />
			<DateInformation id="dateInformation" />
			<location-guide id="locationGuide" />
			<gallary-component
				id="gallaryComponent"
				:imgs="imgs"
				@img-popup="imgPopup"
			/>
			<Teleport to="body">
				<PopupGallery
					v-if="popupEnabled"
					:imgs="imgs"
					:selectedImg="selectedImg"
					@toggle-popup="popupEnabled = false"
					@change-selected="changeSelected"
				/>
			</Teleport>
			<give-love id="giveLove" />
			<bus-information id="busInfo" />
		</div>
	</div>
</template>

<script setup>
import TopPage from "./components/TopPage.vue";
import InvitationLetter from "./components/InvitationLetter.vue";
import GallaryComponent from "./components/GallaryComponent.vue";
import LocationGuide from "./components/LocationGuide.vue";
import NavBar from "./components/NavBar.vue";
import GiveLove from "./components/GiveLove.vue";
import BusInformation from "./components/BusInformation.vue";
import DateInformation from "./components/DateInformation.vue";
import PopupGallery from "./components/PopupGallery.vue";
import { ref } from "vue";

const popupEnabled = ref(false);
const selectedImg = ref(null);

const changeSelected = (i) => {
	let newValue = selectedImg.value + i;
	if (newValue >= imgs.length) {
		newValue -= imgs.length;
	} else if (newValue < 0) {
		newValue += imgs.length;
	}
	selectedImg.value = newValue;
};

const imgs = [
	require("./assets/imgs/IMG_1593.jpeg"),
	require("./assets/imgs/360_F_218065567_U1oGBXnkce1vks7OUe7cqoKDGwSrdpDx.jpeg"),
	require("./assets/imgs/istockphoto-1186306039-612x612.jpeg"),
	require("./assets/imgs/istockphoto-1190043570-612x612.jpeg"),
];

const imgPopup = (i) => {
	popupEnabled.value = true;
	selectedImg.value = i;
};
</script>

<style></style>
