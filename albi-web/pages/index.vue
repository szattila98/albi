<template>
	<div>
		<h1>Nuxt Routing set up successfully!</h1>
		<p>Current route: {{ route.path }}</p>
		<a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
	</div>
	<AlbiButton msg="kutyaa" />
</template>

<script setup lang="ts">
import AlbiButton from '@shared/components/AlbiButton.vue';
const route = useRoute();
</script>
