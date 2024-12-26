<template>
	<component :is="tag" :class="['app-heading', tag]">
		<slot />
	</component>
</template>

<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue';

type LevelNumberic = 1 | 2 | 3 | 4;
type Level = LevelNumberic | `${LevelNumberic}`;

interface Props extends /* @vue-ignore */ HTMLAttributes {
	level?: Level;
}

const { level = 1 } = defineProps<Props>();

const tag = computed(() => `h${level}`);
</script>

<style scoped lang="scss">
.app-heading {
	color: $text-secondary;

	&.h1 {
		font-size: 40;
		font-weight: bold;
		line-height: 1.6;
	}

	&.h2 {
		font-size: 32;
		font-weight: bold;
		line-height: 1.5;
	}

	&.h3 {
		font-size: 26;
		font-weight: 400;
		line-height: 1.4;
	}

	&.h4 {
		font-size: 22;
		font-weight: 400;
		line-height: 1.3;
	}
}
</style>
