<script setup>
defineProps({
  disabled: Boolean
})
</script>

<template>
  <button class="btn btn-primary" :disabled="disabled">
    <slot>Submit</slot>
  </button>
</template>

<style scoped>
.btn {
  max-width: 340px;
  width: 100%;
  padding: 12px 0;
  border-radius: 4px;
  border: none;
  background: hsla(47, 100%, 57%, 1);
  color: #222;
  cursor: pointer;
}
.btn:hover:not(:disabled) {
  background: hsla(47, 100%, 65%, 1);
}
.btn:disabled {
  background: hsla(47, 100%, 57%, .72);
  cursor: not-allowed;
}
.btn:hover:active {
  background: hsla(47, 100%, 57%, 1);
}
</style>
