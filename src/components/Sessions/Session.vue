<template>
  <div class="sessions-item">
    <h4 class="sessions-date">{{ movieDate }}</h4>
    <div class="sessions-row">
      <div class="sessions-column">
        <div class="sessions-image-container">
          <img
            class="sessions-image"
            :src="session.movie.pictureLink"
            alt="session.movie.name"
          />
        </div>
        <div class="sessions-content">
          <h3 class="sessions-title">{{ session.movie.name }}</h3>
          <span class="sessions-time" @click="onMovieClick">
            {{ movieTime }}
          </span>
          <p class="sessions-description">
            {{ session.movie.description }}
          </p>
          <Genre
            v-for="genre in session.movie.genre_id"
            :key="`genre${genre}`"
            :genre="genre"
          />
        </div>
      </div>
    </div>
    <BuyButton class="sessions-button" :onClick="onMovieClick">
      Tickets
    </BuyButton>
  </div>
</template>

<script>
import moment from "moment";

import router from "../../router";
import BuyButton from "../../uiElements/BuyButton";
import Genre from "./Genre";

export default {
  name: "Session",
  components: {
    BuyButton,
    Genre
  },
  props: ["session"],
  computed: {
    movieDate() {
      return moment(this.session.startTime).format("DD MMMM YYYY");
    },
    movieTime() {
      return moment(this.session.startTime).format("hh:mm");
    }
  },
  methods: {
    onMovieClick() {
      router.push({
        name: "movie",
        params: { id: this.session.movie._id }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";
@import "../../styles/mixins";

.sessions {
  &-item {
    padding: 1em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &-row {
    display: flex;
  }

  &-column {
    width: 100%;
    padding-bottom: 1em;
  }

  &-image-container {
    margin-right: 1em;
    margin-bottom: 1em;
    width: 200px;
    height: 200px;
    overflow: hidden;
    float: left;

    @media @tablet {
      width: 50%;
      height: auto;
    }
  }

  &-image {
    .image-cover();
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &-title {
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 700;
  }

  &-time {
    padding: 0.5em;
    border: 1px solid @textDefault;
    border-radius: 0.3rem;
    display: inline-block;
    cursor: pointer;
  }

  &-description {
    padding-top: 0.5em;
  }

  &-button {
    align-self: flex-end;

    @media @tablet {
      align-self: center;
    }
  }
}
</style>
