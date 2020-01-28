<template>
  <div class="loading">
    <div class="d-flex justify-content-center mb-3">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <strong class="loading-title">Loading...</strong>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";

.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &-title {
    color: @textDefault;
    margin-top: 1em;
  }
}
</style>
