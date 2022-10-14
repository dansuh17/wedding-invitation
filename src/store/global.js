import { defineStore } from "pinia";
import { ref } from "vue";

export const useImgStore = defineStore("globalStore", () => {
	const imgs = {
		topView: require("@/assets/imgs/photos/1.jpeg"),
		invitationView: require("@/assets/imgs/photos/2.jpeg"),
		all: [],
	};

	for (let i = 1; i < 8; i++) {
		imgs.all.push(require(`@/assets/imgs/photos/${i}.jpeg`));
	}

	// for (let i = 1; i++; i < 10) {
	// 	imgs.push(require(`@/assets/imgs/photos/${i}.jpeg`));
	// }

	const selectedImg = ref(null);
	const popupEnabled = ref(false);

	const getSelectedImg = () => {
		return imgs.all[selectedImg.value];
	};

	const changeSelected = (i) => {
		let newValue = selectedImg.value + i;
		if (newValue >= imgs.all.length) {
			newValue -= imgs.all.length;
		} else if (newValue < 0) {
			newValue += imgs.all.length;
		}
		selectedImg.value = newValue;
	};

	const imgPopup = (i) => {
		popupEnabled.value = true;
		selectedImg.value = i;
	};

	const removePopup = () => {
		popupEnabled.value = false;
	};

	return {
		imgs,
		changeSelected,
		imgPopup,
		removePopup,
		getSelectedImg,
		popupEnabled,
	};
});

export const useLocationStore = defineStore("locationStore", () => {
	const logoImagePaths = {
		google: require("../assets/logos/googlemap-logo.jpeg"),
		kakao: require("../assets/logos/kakaomap-logo.jpeg"),
		naver: require("../assets/logos/navermap-logo.png"),
	};

	const locationUrls = {
		google: "https://goo.gl/maps/GXYdYdEBchGnv8tS6",
		kakao: "http://kko.to/ekInjfWIb",
		naver: "https://naver.me/xC61fokj",
	};

	const redirectToNewTab = (mapType) => {
		window.open(locationUrls[mapType], "_blank");
	};
	return { logoImagePaths, redirectToNewTab };
});
