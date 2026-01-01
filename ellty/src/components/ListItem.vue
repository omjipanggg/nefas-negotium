<script setup>
	import { ref } from 'vue'
	import Checkbox from '@/components/Checkbox.vue'

	defineProps({
	  name: String,
	  checked: Boolean,
	  indeterminate: Boolean,
	  disabled: Boolean
	})

	const emit = defineEmits(['change'])
</script>

<template>
	<div class="list-item">
		<span class="list-name" :style="{ fontWeight: checked || indeterminate ? '500' : '400' }">{{ name }}</span>
		<Checkbox :model="checked" :indeterminate="indeterminate" :disabled="disabled"  @toggle:model="emit('change', $event)"/>
	</div>
</template>

<style scoped>
	.list-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px;
		font-size: 12px;
		color: var(--color-text);
		cursor: pointer;
	}
</style>