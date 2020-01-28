<template>
  <div
    class="seat-button"
    :class="{ free: isFree, checked: isChecked }"
    size="sm"
  >
    <b-icon v-if="!isFree" icon="x" aria-hidden="true" class="border rounded" />
  </div>
</template>

<script>
export default {
  name: "Seat",
  props: ["isFree", "isChecked"]
};
</script>

<style lang="less" scoped>
@import "../styles/variables";

.seat-button {
  width: 2em;
  height: 3em;
  margin-right: 2px;
  border-radius: 3px;
  color: @textDefault;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: @textSecond;
}

.free {
  border: 1px solid @textDefault;
  background: transparent;
}

.free.checked {
  background: @bgLight;
  border: 1px solid @bgLight;
}
</style>
