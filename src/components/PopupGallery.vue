<template>
	<Transition name="modal">
		<div class="z-[1] fixed top-0 w-full h-full flex flex-col items-center">
			<div
				class="bg-white/90 w-[500px] items-center justify-center h-full flex-col flex"
			>
				<div class="h-1/3 w-screen" @click="togglePopup" id="top-section"></div>
				<div class="w-screen" id="mid-section">
					<div class="flex justify-center items-center" id="img-slide">
						<img
							class="p-2 w-16 h-16 cursor-pointer"
							@click="changeSelected(-1)"
							:src="require('../assets/logos/arrow.png')"
						/>
						<img
							:src="imgs[selectedImg]"
							class="h-96 w-96 object-contain bg-white"
						/>
						<img
							class="p-2 w-16 h-16 cursor-pointer rotate-180"
							@click="changeSelected(1)"
							:src="require('../assets/logos/arrow.png')"
						/>
					</div>
				</div>
				<div
					class="h-1/3 w-screen"
					@click="togglePopup"
					id="bottom-section"
				></div>
			</div>
		</div>
	</Transition>
</template>

<script>
export default {
	emits: ["togglePopup", "changeSelected"],
	props: ["imgs", "selectedImg"],
	data() {
		return {
			localSelectedImg: this.selectedImg,
		};
	},
	methods: {
		changeSelected(i) {
			this.$emit("changeSelected", i);
		},
		togglePopup() {
			this.$emit("togglePopup");
		},
	},
};
</script>

<style>
.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 300px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
}

.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
	opacity: 0;
}

.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
