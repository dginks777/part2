import axios from "axios";
import NProgress from "nprogress";

import router from "../../router";
import {
  SET_ERROR,
  SET_MOVIES,
  ADD_TICKET,
  REMOVE_TICKET,
  CLEAR_TICKETS,
  SET_IS_LOADING,
  SET_ACTIVE_MOVIE,
  RESET_ACTIVE_MOVIE,
  SET_RESERVATION_CODE,
  CLEAR_RESERVATION_CODE,
  SET_ALL_MOVIES_SESSIONS,
  SET_ACTIVE_MOVIE_SESSIONS
} from "./mutationTypes";

NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
axios.defaults.timeout = 3000;

export const getAllMovies = async ({ dispatch, commit }) => {
  await dispatch("loadingStart");

  try {
    const response = await axios.get(
      `https://cinema-api-test.herokuapp.com/movies`
    );
    await commit(SET_MOVIES, response.data);
  } catch (e) {
    await commit(SET_ERROR, `Can't get movies`);
  } finally {
    await dispatch("loadingDone");
  }
};

export const getMovieById = async ({ dispatch, commit }, id) => {
  await dispatch("loadingStart");
  await dispatch("resetActiveMovie");

  try {
    const response = await axios.get(
      `https://cinema-api-test.herokuapp.com/movies?movie_id=${id}`
    );

    await commit(SET_ACTIVE_MOVIE, response.data);
  } catch (e) {
    commit(SET_ERROR, `Can't get movie`);
    await router.push({ name: "home" });
  } finally {
    await dispatch("loadingDone");
  }
};

export const getAllMoviesSessions = async ({ dispatch, commit }) => {
  await dispatch("loadingStart");

  try {
    const response = await axios.get(
      `https://cinema-api-test.herokuapp.com/movieShows`
    );

    commit(SET_ALL_MOVIES_SESSIONS, response.data);
  } catch (e) {
    commit(SET_ERROR, `Can't get movies sessions`);
  } finally {
    await dispatch("loadingDone");
  }
};

export const getSessionsByMovieId = async ({ dispatch, commit }, id) => {
  await dispatch("loadingStart");

  try {
    const response = await axios.get(
      `https://cinema-api-test.herokuapp.com/movieShows?movie_id=${id}`
    );

    commit(SET_ACTIVE_MOVIE_SESSIONS, response.data);
  } catch (e) {
    commit(SET_ERROR, `Can't get sessions by movie id`);
  } finally {
    await dispatch("loadingDone");
  }
};

export const findMovieByNameGenres = async (
  { commit },
  name = "",
  genres = ""
) => {
  try {
    const response = await axios.get(
      `https://cinema-api-test.herokuapp.com/movies/find?name=${name}&genres=${genres}`
    );

    commit(SET_MOVIES, response.data);
  } catch (e) {
    commit(SET_ERROR, `Can't get movies`);
  }
};

export const bookTicket = async ({ commit }, params) => {
  try {
    const response = await axios.post(
      `https://cinema-api-test.herokuapp.com/bookingPlace`,
      params
    );

    await commit(SET_RESERVATION_CODE, response.data);
  } catch (e) {
    await commit(SET_ERROR, `Can't book ticket`);
  }
};

export const bookTickets = async ({ dispatch, commit, state }) => {
  const { tickets } = state;
  await dispatch("loadingStart");

  try {
    for await (let ticket of tickets) {
      dispatch("bookTicket", ticket);
    }
  } catch (e) {
    commit(SET_ERROR, `Can't get movies`);
  } finally {
    await dispatch("loadingDone");
    await dispatch("clearTickets");
  }
};

export const clearReservationCodes = async ({ commit }) => {
  await commit(CLEAR_RESERVATION_CODE);
};

export const loadingStart = async ({ commit }) => {
  await commit(SET_IS_LOADING, true);
  await NProgress.start();
};

export const loadingDone = async ({ commit }) => {
  await commit(SET_IS_LOADING, false);
  await NProgress.done();
};

export const resetActiveMovie = async ({ commit }) => {
  await commit(RESET_ACTIVE_MOVIE);
};

export const addTicket = async ({ commit }, payload) => {
  await commit(ADD_TICKET, payload);
};

export const removeTicket = async ({ commit }, payload) => {
  await commit(REMOVE_TICKET, payload);
};

export const clearTickets = async ({ commit }) => {
  await commit(CLEAR_TICKETS);
};
