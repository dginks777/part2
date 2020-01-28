<template>
  <b-carousel
    id="carousel-1"
    class="slider-container"
    v-model="slide"
    :interval="8000"
    indicators
  >
    <b-carousel-slide
      class="slider-content"
      v-for="(movie, index) in allMovies"
      :key="movie._id"
    >
      <template v-slot:img>
        <Slide :movie="movie" :slide="slide" :index="index" />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { mapGetters, mapActions } from "vuex";

import router from "../../router";
import Slide from "./Slide";

export default {
  name: "Slider",
  components: {
    Slide
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    ...mapActions(["getAllMovies", "getMovieById"]),
    onMovieClick(id) {
      router.push({ name: "movie", params: { id } });
    }
  },
  computed: {
    ...mapGetters(["allTodos", "allMovies"])
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";

.slider {
  &-content,
  &-container {
    width: 100%;
    height: 80vh;
    position: relative;
  }

  &-container {
  }
}
</style>
