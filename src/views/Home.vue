<template>
  <div class="home" v-if="hasMovies" data-aos="fade" data-aos-duration="500">
    <Slider />
    <TopMovies />
    <Sessions />
    <Footer />
  </div>
  <Loading v-else />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../router";
import Slider from "../components/Slider";
import TopMovies from "../components/TopMovies";
import Sessions from "../components/Sessions";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Slider,
    TopMovies,
    Sessions,
    Loading,
    Footer
  },
  methods: {
    ...mapActions(["getAllMovies", "getAllMoviesSessions", "getMovieById"]),
    onMovieClick(id) {
      router.push({ name: "movie", params: { id } });
    }
  },
  computed: {
    ...mapGetters(["allMovies", "isLoading"]),
    hasMovies() {
      return this.allMovies.length > 0;
    }
  },
  created() {
    this.getAllMovies();
    this.getAllMoviesSessions();
  }
};
</script>

<style lang="less" scoped>
@import "../styles/animation";

.home {
  position: relative;
  margin-top: 5em;
}
</style>
