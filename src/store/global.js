import { defineStore } from "pinia";
import { ref } from "vue";

export const useImgStore = defineStore("globalStore", () => {
	const imgs = {
		topView: require("@/assets/imgs/photos/intro.png"),
		invitationView: require("@/assets/imgs/photos/4_compressed.jpeg"),
		all: [],
	};

	for (let i = 1; i <= 13; i++) {
		imgs.all.push(require(`@/assets/imgs/photos/${i}_compressed.jpeg`));
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
		selectedImg
	};
});

export const useLocationStore = defineStore("locationStore", () => {
	const logoImagePaths = {
		naver: require("../assets/logos/navermap-logo.png"),
		tmap: require("../assets/logos/tmap-logo.svg"),
		kakao: require("../assets/logos/kakaomap-logo.jpeg"),
		google: require("../assets/logos/googlemap-logo.jpeg"),
	};

	const locationUrls = {
		google: "https://goo.gl/maps/GXYdYdEBchGnv8tS6",
		kakao: "http://kko.to/ekInjfWIb",
		naver: "https://naver.me/xC61fokj",
		tmap: "https://surl.tmap.co.kr/9de28c62",
	};

	const redirectToNewTab = (mapType) => {
		window.open(locationUrls[mapType], "_blank");
	};
	return { logoImagePaths, redirectToNewTab };
});
