<template>
	<p :class="['app-text', { small: small }]">
		<slot />
	</p>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue';

interface Props extends /* @vue-ignore */ HTMLAttributes {
	small?: boolean;
}

const { small = false } = defineProps<Props>();
</script>

<style scoped lang="scss">
.app-text {
	color: $text-secondary;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.2;

	&.small {
		font-size: 14px;
		font-weight: 300;
		line-height: 1;
	}
}
</style>
