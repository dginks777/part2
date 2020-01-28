<template>
  <div class="footer">
    <img
      class="footer-image"
      src="../../assets/img/GitHub-Mark-Light-32px.png"
      alt="GitHub"
    />
    <a
      class="footer-link"
      href="https://github.com/dginks777/part2"
      target="_blank"
      >Git Hub</a
    >
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="less">
@import "../../styles/variables";

.footer {
  width: 100%;
  height: 10em;
  background: @bgDefault;
  color: @textDefault;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  &-image {
    margin-right: 1em;
  }

  &-link {
    color: @textDefault;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
