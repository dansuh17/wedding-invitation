<template>
	<nav
		class="sticky top-0 bg-white w-full flex justify-center items-center py-1 z-1"
	>
		<div class="flex justify-center gap-10">
			<div>
				<a href="#invitationLetter"> 초대합니다 </a>
			</div>
			<div>{{ delimiter }}</div>
			<div>
				<a href="#gallaryComponent"> 사진첩 </a>
			</div>
			<div>{{ delimiter }}</div>
			<div>
				<a href="#locationGuide"> 오시는 길 </a>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			delimiter: "|",
		};
	},
};
</script>

<style></style>
