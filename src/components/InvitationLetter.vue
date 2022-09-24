<template>
	<div class="flex flex-col justify-center items-center bg-red-100 w-full">
		<div class="text-title">{{ title }}</div>
		<div v-for="msg in msgs" :key="msg">
			{{ msg }}
		</div>
		<div class="flex flex-col text-right text-">
			<div id="jisuFamily">
				<span class="inline text-lg">{{ jisuParents }}</span> 의 장남
				<span class="inline text-lg">지수</span>
			</div>
			<div id="geumchaeFamily">
				<span class="inline text-lg">{{ geumchaeParents }}</span> 의 장녀
				<span class="inline text-lg">금채</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: "초대합니다",
			msgs: `
        오랜 기다림 속에서 
        저희 두 사람 한마음 되어 
        참된 사랑의 결실을 
        맺게 되었습니다.
        오셔서 축복해 주시면 
        큰 기쁨이 되겠습니다.
      `.split("\n"),
			jisuParents: "전용출·정연우",
			geumchaeParents: "(故)장행기·조찬숙",
		};
	},
};
</script>
