<script setup>
	import { ref, watch, onMounted } from 'vue'

	const props = defineProps({
	  model: Boolean,
	  indeterminate: Boolean,
	  disabled: Boolean
	})

	const emit = defineEmits(['toggle:model'])

	const inputRef = ref(null)

	const updateState = () => {
		if (inputRef.value) {
			inputRef.value.indeterminate = props.indeterminate
		}
	}

	const handleToggle = (elem) => {
		if (props.indeterminate) {
			emit('toggle:model', true)
		} else {
		  emit('toggle:model', elem.target.checked)
		}
	}

	onMounted(updateState)
	watch(
		() => [props.model, props.indeterminate],
		() => {
			if (inputRef.value) {
				inputRef.value.indeterminate = !!props.indeterminate
			}
		},
		{ immediate: true }
	)
</script>

<template>
  <label class="checkbox" :class="props.disabled">
    <input ref="inputRef" type="checkbox" :checked="props.model" :disabled="props.disabled" @change="handleToggle"/>
    <span class="box">
      <svg v-if="!props.indeterminate" class="check" aria-hidden="true" viewBox="0 0 36 36" width="16" height="16">
        <path d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"/>
      </svg>
	  <svg v-if="props.indeterminate" class="indeterminate" aria-hidden="true" viewBox="0 0 24 24">
	    <rect x="5" y="11" width="14" height="1.25"/>
	  </svg>
    </span>
  </label>
</template>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.box {
  width: 25px;
  height: 25px;
  border-radius: 6px;
  border: 2px solid hsla(216deg, 12%, 88%, 1);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: .91;
}

.box svg {
  pointer-events: none;
  width: 20px;
  height: 20px;
}

.checkbox input + .box .check {
  opacity: 1;
  fill: white;
}

.checkbox input + .box .indeterminate {
  opacity: 1;
  fill: white;
}

.checkbox:hover input:not(:checked):not(:indeterminate):not(:active) + .box svg {
  opacity: 1;
  fill: hsla(0deg, 0%, 0%, .12);
}

.checkbox:hover .box {
  border-color: hsla(216deg, 12%, 82%, 1);
}

.checkbox:hover input:active + .box {
  box-shadow: 0 0 0 3px hsla(212deg, 96%, 93%, 1);
}

.checkbox:hover input:active + .box svg {
  opacity: 1;
  fill: hsla(0deg, 0%, 0%, .5);
}

.checkbox:hover input:checked:active + .box {
  background: #2563eb;
  border-color: #2563eb;
}

.checkbox:hover input:checked:active + .box svg {
	fill: white;
}

.checkbox input:checked + .box {
  background: #2563eb;
  border-color: #2563eb;
}

.checkbox:hover input:checked + .box {
  opacity: 1;
  background: hsla(217deg, 91%, 60%, 1);
  border-color: hsla(217deg, 91%, 60%, 1);
}

.checkbox input:focus-visible + .box {
  box-shadow: 0 0 0 3px hsla(212deg, 99%, 96%, 1);
}

.checkbox input:checked:focus-visible + .box {
  box-shadow: 0 0 0 3px hsla(212deg, 96%, 93%, 1);
}

.checkbox input:disabled + .box {
  background: #f3f4f6;
  border-color: #e5e7eb;
  cursor: not-allowed;
}

.checkbox input:disabled:checked + .box {
  background: #e5e7eb;
  border-color: #e5e7eb;
}

.checkbox input:indeterminate + .box {
  background: #2563eb;
  border-color: #2563eb;
}

.checkbox:hover input:indeterminate + .box {
  opacity: 1;
  background: hsla(217deg, 91%, 60%, 1);
  border-color: hsla(217deg, 91%, 60%, 1);
}

.checkbox:hover input:indeterminate:active + .box {
  background: #2563eb;
  border-color: #2563eb;
}

.checkbox:hover input:indeterminate:active + .box svg {
  opacity: 1;
  fill: white;
}
</style>
