<template>
	<button :class="['app-button', theme]" type="button">
		<slot />
	</button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import { AppButtonTheme } from '../constants/AppButton.const';

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
	theme?: AppButtonTheme;
}

withDefaults(defineProps<Props>(), {
	theme: AppButtonTheme.Primary
});
</script>

<style scoped lang="scss">
.app-button {
	align-content: stretch;
	align-items: center;
	border: 0;
	border-radius: 24px;
	color: $text-primary;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	flex-wrap: nowrap;
	font-size: 18px;
	height: 50px;
	justify-content: start;
	padding: 12px 25px 12px 25px;
	width: auto;

	&.primary {
		background: $color-primary;
		box-shadow: 4px 4px 10px -1px color-mix(in srgb, $color-primary, transparent 70%);

		&:hover {
			background: $hover;
			cursor: pointer;
		}

		&:active {
			background: $color-secondary;
		}
	}

	&.danger {
		$color-danger: #c20d0a;
		$hover-danger: #f2110d;
		$active-danger: #910a08;

		background: $color-danger;
		box-shadow: 4px 4px 10px -1px color-mix(in srgb, $color-danger, transparent 70%);

		&:hover {
			background: $hover-danger;
			cursor: pointer;
		}

		&:active {
			background: $active-danger;
		}
	}
}
</style>
