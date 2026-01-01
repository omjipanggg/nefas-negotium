<script setup>
	import { useDarkMode } from '@/composables/useMode'
	const { isDark } = useDarkMode()
</script>

<template>
  <button @click="isDark = !isDark" aria-label="Toggle mode">{{ isDark ? '☀️' : '🌙' }}</button>
</template>

<style scoped>
button {
	position: fixed;
	top: 1rem;
	right: 1rem;
	background: transparent;
	outline: none;
	border: none;
	cursor: pointer;
}
</style>