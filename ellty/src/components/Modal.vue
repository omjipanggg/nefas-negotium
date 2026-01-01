<script setup>
	import { ref, computed } from 'vue'
	import ListItem from '@/components/ListItem.vue'
	import Button from '@/components/Button.vue'

	const items = ref(
		Array.from({ length: 4 }, (item, i) => ({
			name: `Page ${i + 1}`,
			checked: false
		}))
  	)

	const isAllChecked = computed(() =>  items.value.length > 0 ? items.value.every(item => item.checked) : false)
	const isIndeterminate = computed(() => items.value.some(item => item.checked) && !isAllChecked.value)

	const toggleAll = (isChecked) => {
		items.value.forEach(item => item.checked = isChecked)
	}

	const toggleItem = (index, value) => {
		items.value[index].checked = value
	}

	const doSomething = () => {
		alert('btn clicked yay')
	}
</script>

<template>
	<div class="modal-overlay">
		<div class="modal">

		<ListItem name="All pages" :checked="isAllChecked" :indeterminate="isIndeterminate" @change="toggleAll"></ListItem>

		<div class="divider"></div>

		<div class="list">
			<ListItem v-for="(item, i) in items" :key="i" :name="item.name" :checked="item.checked" @change="toggleItem(i, $event)"/>
		</div>

		<div class="divider"></div>

		<Button class="btn-modal" @click="doSomething">Done</Button>

		</div>
	</div>
</template>

<style scoped>
.modal-overlay {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 370px;
  background: var(--color-modal-background);
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.125);
  -webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.125);
  -moz-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.125);
}

.divider {
  height: 0.7px;
  margin: 10px 0;
  background: hsla(0deg, 0%, 80%, 1);
}

.btn-modal {
	margin-top: 10px;
}
</style>