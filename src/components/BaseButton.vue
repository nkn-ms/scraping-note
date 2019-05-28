<template>
  <button
    class="btn-base"
    type="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    // 'click'イベントを発行
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }

}
</script>

<style scoped>
.btn-base {
  width: 70px;
  height: 30px;
  position: relative;
  margin: 0 5px;
  border-radius: 8px;
  outline: none;
}
</style>
