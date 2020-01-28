<template>
  <span class="sessions-genre">
    {{ genreName }}
  </span>
</template>

<script>
import { getGenreName } from "../../store/modules/helpers";

export default {
  name: "Genre",
  props: ["genre"],
  computed: {
    genreName() {
      return getGenreName(this.genre);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";
@import "../../styles/mixins";

.sessions {
  &-genre {
    font-size: 0.9em;
    padding: 0.5em;
    display: inline-block;
    color: @textSecond;
  }
}
</style>
