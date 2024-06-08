<template>
	<div
		class="bg-zinc-800 font-maru text-set1-4 flex flex-col max-w-screen-sm items-center justify-center mx-auto"
	>
		<Teleport to="body">
			<PopupGallery
				@wheel.prevent
				@touchmove.prevent
				@scroll.prevent
				v-if="popupEnabled"
				:selectedImg="selectedImg"
			/>
		</Teleport>
		<top-page id="topPage" />
		<nav-bar id="navBar" />
		<invitation-letter id="invitationLetter" />
		<DateInformation id="dateInformation" />
		<gallary-component id="gallaryComponent" :imgs="imgs" />
		<location-guide id="locationGuide" />
		<give-love id="giveLove" />
	</div>
</template>

<script setup>

import TopPage from "./components/TopPage.vue";
import InvitationLetter from "./components/InvitationLetter.vue";
import GallaryComponent from "./components/GallaryComponent.vue";
/* import LocationGuide from "./components/LocationGuide.vue"; */
/* import NavBar from "./components/NavBar.vue"; */
import GiveLove from "./components/GiveLove.vue";
/* import DateInformation from "./components/DateInformation.vue"; */
import PopupGallery from "./components/PopupGallery.vue";
import { useImgStore } from "./store/global";
import { storeToRefs } from "pinia";

const imgStore = useImgStore();
const { popupEnabled } = storeToRefs(imgStore);

</script>
