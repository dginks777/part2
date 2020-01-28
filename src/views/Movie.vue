<template>
  <div class="movie" v-if="!isLoading" data-aos="fade" data-aos-duration="500">
    <BookTicket />
    <Footer />
  </div>
  <Loading v-else />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import isEmpty from "lodash/isEmpty";

import Loading from "../components/Loading";
import BookTicket from "../components/BookTicket";
import Footer from "../components/Footer";

export default {
  name: "Movie",
  components: {
    Loading,
    BookTicket,
    Footer
  },
  methods: {
    ...mapActions(["getSessionsByMovieId", "getMovieById"])
  },
  computed: {
    ...mapGetters(["activeMovie", "activeMovieSessions"]),
    movieId() {
      return this.$route.params.id;
    },
    isLoading() {
      return isEmpty(this.activeMovie) && isEmpty(this.activeMovieSessions);
    }
  },
  created() {
    this.getMovieById(this.movieId);
    this.getSessionsByMovieId(this.movieId);
  }
};
</script>

<style lang="less" scoped>
.movie {
  position: relative;
  flex: 1;
  background: #6b645d;
  display: flex;
  flex-direction: column;
}
</style>
