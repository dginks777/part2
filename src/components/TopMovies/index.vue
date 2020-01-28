<template>
  <b-container class="top-movies" fluid>
    <h4 class="top-movies-title" data-aos="fade-right">
      NOW <span class="orange">PLAYING</span>
    </h4>
    <div class="movies" data-aos="fade-up">
      <div
        v-for="movie in allMovies"
        :key="movie._id"
        class="movie-container"
        @click="onMovieClick(movie._id)"
      >
        <img class="movie-image" :src="movie.pictureLink" alt="" />
        <div class="movie-overlay">
          <div class="movie-overlay-content">
            <span class="movie-overlay-name">{{ movie.name }}</span>
            <span class="movie-overlay-link">
              More details
              <b-icon-chevron-right />
            </span>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../../router";
import moment from "moment";

export default {
  name: "TopMovies",
  methods: {
    ...mapActions(["getAllMovies", "getMovieById"]),
    onMovieClick(id) {
      router.push({ name: "movie", params: { id } });
    }
  },
  computed: {
    ...mapGetters(["allMovies"])
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";

.top-movies {
  padding: 4em 0;
  background-image: url("../../assets/img/bg9.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;

  &-title {
    font-size: 2.5em;
    padding: 0 1em;

    @media @tablet {
      text-align: center;
    }
  }
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie {
  &-container {
    width: 250px;
    height: 250px;
    position: relative;
    background: @bgDefault;
    overflow: hidden;
    cursor: pointer;
  }

  &-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &-overlay {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: @orangeTransparent;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;

    &-content {
      padding: 1em;

      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &-name {
      color: @bgDefault;
      text-transform: uppercase;
      font-size: 1.4em;
      font-weight: 700;
      padding-bottom: 1em;
    }

    &-link {
      color: @bgDefault;
      font-size: 1em;
      font-weight: 400;
    }
  }

  &-container:hover &-overlay {
    bottom: 0;
    height: 100%;
  }
}

.orange {
  color: @orange;
}
</style>
