<template>
	<nav
		class="sticky top-0 bg-set1-2 w-full flex justify-center items-center py-2 z-1 text-set1-0"
	>
		<div class="flex justify-center gap-10 px-2">
			<div>
				<a href="#invitationLetter"> 초대합니다 </a>
			</div>
			<div>{{ delimiter }}</div>
			<div>
				<a href="#locationGuide"> 오시는 길 </a>
			</div>
			<div>{{ delimiter }}</div>
			<div>
				<a href="#gallaryComponent"> 사진첩 </a>
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
