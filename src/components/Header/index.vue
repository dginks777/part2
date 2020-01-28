<template>
  <div class="header">
    <div class="header-content">
      <router-link class="header-link" to="/">
        <div class="header-logo">
          Cinema<span class="header-logo-color">For</span>You
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="less">
@import "../../styles/variables";

.header {
  height: 5em;
  background: @bgDefault;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 99;

  &-content {
    height: 5em;
    padding: 0 2em;
    display: flex;
    align-items: center;
  }

  &-link {
    text-decoration: none;
  }

  &-logo {
    font-family: "Abel", Arial, sans-serif;
    font-size: 2.5em;
    color: @textDefault;
    text-transform: uppercase;

    &-color{
      color: @orange;
    }
  }
}
</style>
