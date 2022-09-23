<template>
	<div class="bg-zinc-800">
		<div class="flex flex-col w-[500px] items-center justify-center mx-auto">
			<Teleport to="body">
				<PopupGallery
					:imgs="imgs"
					:selectedImg="selectedImg"
					:show="popupEnabled"
					@toggle-popup="popupEnabled = false"
				/>
			</Teleport>
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
			<give-love id="giveLove" />
			<bus-information id="busInfo" />
		</div>
	</div>
</template>

<script>
import TopPage from "./components/TopPage.vue";
import InvitationLetter from "./components/InvitationLetter.vue";
import GallaryComponent from "./components/GallaryComponent.vue";
import LocationGuide from "./components/LocationGuide.vue";
import NavBar from "./components/NavBar.vue";
import GiveLove from "./components/GiveLove.vue";
import BusInformation from "./components/BusInformation.vue";
import DateInformation from "./components/DateInformation.vue";
import PopupGallery from "./components/PopupGallery.vue";

export default {
	name: "App",
	methods: {
		imgPopup(i) {
			this.popupEnabled = true;
			this.selectedImg = i;
		},
		turnOffPopup() {},
	},
	components: {
		TopPage,
		InvitationLetter,
		GallaryComponent,
		LocationGuide,
		NavBar,
		GiveLove,
		BusInformation,
		DateInformation,
		PopupGallery,
	},
	data() {
		return {
			popupEnabled: false,
			selectedImg: null,
			imgs: [
				require("./assets/IMG_1593.jpeg"),
				require("./assets/IMG_1593.jpeg"),
				require("./assets/IMG_1593.jpeg"),
				require("./assets/IMG_1593.jpeg"),
				require("./assets/IMG_1593.jpeg"),
			],
		};
	},
};
</script>

<style></style>
