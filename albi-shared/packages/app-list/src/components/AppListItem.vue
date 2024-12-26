<template>
	<li :class="['app-list-item', { unordered: !order }]">
		<slot />
	</li>
</template>

<script setup lang="ts">
import { computed, inject, type LiHTMLAttributes } from 'vue';
import { OrderInjectionKey } from '../constants/injections.const';

defineProps</* @vue-ignore */ LiHTMLAttributes>();

const order = inject(
	OrderInjectionKey,
	computed(() => false)
);
</script>

<style scoped lang="scss">
.app-list-item {
	color: $text-secondary;
	font-size: 18px;
	font-weight: 400;
	line-height: 1.2;

	&.unordered::marker {
		color: $color-primary;
		font-size: 20px;
	}
}
</style>
