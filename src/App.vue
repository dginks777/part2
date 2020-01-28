<template>
  <div id="app">
    <div class="body-wrapper">
      <Header />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header,
  }
};
</script>

<style lang="less">
@import (inline) "styles/google-fonts.css";
@import "~nprogress/nprogress.css";
@import "styles/variables";

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto Condensed", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: @bgDefault;
  color: @textDefault;
}
.body-wrapper {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#nprogress .bar {
  background: @orange;
}

.carousel-indicators li:focus {
  outline: none !important;
}
</style>
