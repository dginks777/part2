<template>
  <b-container class="sessions" fluid>
    <h4 class="sessions-title" data-aos="fade-right">
      SESSIONS
    </h4>
    <div class="sessions-container" data-aos="fade-up">
      <Session
        v-for="session in reducedSessions"
        :session="session"
        :key="session._id"
      />
      <!--      <div-->
      <!--        v-for="session in reducedSessions"-->
      <!--        :key="session._id"-->
      <!--        class="sessions-item"-->
      <!--      >-->
      <!--        <div class="sessions-image-container">-->
      <!--          <img-->
      <!--            class="sessions-image"-->
      <!--            :src="session.movie.pictureLink"-->
      <!--            alt="session.movie.name"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <div class="sessions-content">-->
      <!--          <div class="sessions-title">{{ session.movie.name }}</div>-->
      <!--          <div class="sessions-time">{{ session.startTime }}</div>-->
      <!--          <div class="sessions-description">-->
      <!--            {{ session.movie.description }}-->
      <!--          </div>-->
      <!--          <div class="sessions-price">{{ session.ticketPrice }}</div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

import Session from "./Session";

export default {
  name: "Sessions",
  components: {
    Session
  },
  computed: {
    ...mapGetters(["allMovies", "allMoviesSessions", "reducedSessions"])
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";

.sessions {
  background: @orange;
  padding: 4em 1em;

  &-title {
    font-size: 2.5em;
    color: @textDefault;
    margin-bottom: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    @media @tablet {
      text-align: center;
    }
  }

  &-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
