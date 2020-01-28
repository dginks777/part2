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
import * as actions from "./actions";
import { reduceMovieSession } from "./helpers";

const state = {
  error: "",
  movies: [],
  tickets: [],
  isLoading: false,
  activeMovie: {},
  reservationCode: [],
  allMoviesSessions: [],
  activeMovieSessions: []
};

const mutations = {
  [SET_ERROR]: (state, error) => (state.error = error),
  [SET_MOVIES]: (state, movies) => (state.movies = movies),
  [SET_ACTIVE_MOVIE]: (state, movie) => (state.activeMovie = movie),
  [SET_ALL_MOVIES_SESSIONS]: (state, sessions) =>
    (state.allMoviesSessions = sessions),
  [SET_ACTIVE_MOVIE_SESSIONS]: (state, sessions) =>
    (state.activeMovieSessions = sessions),
  [RESET_ACTIVE_MOVIE]: state => {
    state.activeMovie = {};
    state.activeMovieSessions = [];
  },
  [SET_IS_LOADING]: (state, payload) => (state.isLoading = payload),
  [SET_RESERVATION_CODE]: (state, payload) =>
    state.reservationCode.push(payload),
  [CLEAR_RESERVATION_CODE]: state => (state.reservationCode = []),
  [ADD_TICKET]: (state, payload) => state.tickets.push(payload),
  [REMOVE_TICKET]: (state, payload) =>
    (state.tickets = state.tickets.filter(
      ticket => ticket.place_id !== payload.place_id
    )),
  [CLEAR_TICKETS]: state => (state.tickets = [])
};

const getters = {
  tickets: state => state.tickets,
  isLoading: state => state.isLoading,
  getError: state => state.error,
  allMovies: state => state.movies,
  activeMovie: state => state.activeMovie,
  reservationCode: state => state.reservationCode,
  reducedSessions: (state, getters) =>
    reduceMovieSession(getters.allMovies, getters.allMoviesSessions),
  allMoviesSessions: state => state.allMoviesSessions,
  activeMovieSessions: state => state.activeMovieSessions
};

export default {
  state,
  getters,
  actions,
  mutations
};
