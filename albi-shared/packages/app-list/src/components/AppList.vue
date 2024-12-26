<template>
	<component :is="tag" class="app-list">
		<slot />
	</component>
</template>

<script setup lang="ts">
import { computed, provide, type OlHTMLAttributes } from 'vue';
import { OrderInjectionKey } from '../constants/injections.const';

interface Props extends /* @vue-ignore */ OlHTMLAttributes {
	ordered?: boolean;
}

const { ordered = false } = defineProps<Props>();

const tag = computed(() => (ordered ? 'ol' : 'ul'));

provide(
	OrderInjectionKey,
	computed(() => ordered)
);
</script>

<style scoped lang="scss">
.app-list {
	color: $text-secondary;
	display: flex;
	flex-direction: column;
	gap: 6px;
}
</style>
