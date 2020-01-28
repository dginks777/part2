<template>
  <b-container class="slide-container" fluid v-bind:class="getClassList">
    <div class="slide-row">
      <div class="slide-block">
        <span class="slide-date">
          {{ movieDate }}
        </span>
        <div class="slide-title">
          {{ movie.name }}
        </div>
        <CustomButton :onClick="onMovieClick">
          sessions
        </CustomButton>
      </div>
      <div class="slide-image-container">
        <b-img class="slide-image" :src="movie.pictureLink" :alt="movie.name" />
      </div>
    </div>
  </b-container>
</template>

<script>
import moment from "moment";

import router from "../../router";
import CustomButton from "../../uiElements/CustomButton";

export default {
  name: "Slide",
  components: {
    CustomButton
  },
  props: ["movie", "slide", "bgImage", "index"],
  computed: {
    movieDate() {
      return `FROM ${moment(this.movie.dateOfRelease).format(" MMMM YYYY")}`;
    },
    getClassList() {
      return `bg${this.index % 6}`;
    }
  },
  methods: {
    onMovieClick() {
      router.push({ name: "movie", params: { id: this.movie._id } });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";

.slide {
  text-shadow: 1px 1px 2px #333;
  width: 100%;
  height: 500px !important;

  &-container {
    width: 100%;
    height: 100%;
    background-size: cover;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      opacity: 0.7;
      z-index: 1;
    }

    & > * {
      position: relative;
      z-index: 2;
    }
  }

  &-row {
    height: 100%;
    padding-top: 1em;
    display: flex;
  }

  &-block {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 2em;
  }

  &-date {
    background: @bgLight;
    color: @textFirst;
    padding: 0 1em;
    text-transform: uppercase;
    max-width: 12em;
    font-size: 1.5em;

    @media @tablet {
      max-width: 100%;
    }
  }

  &-title {
    font-size: 5em;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    line-height: 1em;

    @media @tablet {
      font-size: 4em;
    }
  }

  &-image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media @tablet {
      display: none;
    }
  }

  &-image {
    object-fit: cover;
    height: 70%;
    width: auto;
  }

  .bg0 {
    background-image: url("../../assets/img/bg0.png");
  }

  .bg1 {
    background-image: url("../../assets/img/bg1.png");
  }

  .bg2 {
    background-image: url("../../assets/img/bg2.jpg");
  }

  .bg3 {
    background-image: url("../../assets/img/bg3.jpg");
  }

  .bg4 {
    background-image: url("../../assets/img/bg4.png");
  }

  .bg5 {
    background-image: url("../../assets/img/bg5.jpg");
  }
}
</style>
