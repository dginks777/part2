<template>
  <div class="book-ticket">
    <div class="book-ticket-content">
      <div class="book-ticket-header">
        <h3 class="book-ticket-title">{{ activeMovie.name }}</h3>
        <h4 class="book-ticket-time">{{ movieDate }}</h4>
      </div>
      <div class="book-ticket-hall hall">
        <div class="hall-price">
          <Seat :isFree="true" :isChecked="true"></Seat>
          <span>GOOD - {{ activeMovieSessions.ticketPrice }} UAH</span>
        </div>
        <div class="hall-content">
          <h5 class="hall-screen">screen</h5>
          <div class="hall-seats">
            <HallRow
              v-for="(row, index) in activeMovieSessions.places"
              :key="`places${index}`"
              :row="row"
              :row_id="index"
              :tickets="tickets"
              :addTicket="addTicket"
              :removeTicket="removeTicket"
              :movieShow_id="activeMovieSessions._id"
            />
          </div>
        </div>
      </div>
    </div>
    <BookBasket />
    <TicketsModal />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";

import Seat from "../../uiElements/Seat";
import HallRow from "./HallRow";
import BookBasket from "./BookBasket";
import TicketsModal from "./TicketsModal";

export default {
  name: "BookTicket",
  components: {
    Seat,
    HallRow,
    BookBasket,
    TicketsModal
  },
  methods: {
    ...mapActions(["addTicket", "removeTicket", "clearTickets", "bookTicket"])
  },
  computed: {
    ...mapGetters(["tickets", "activeMovie", "activeMovieSessions"]),
    movieDate() {
      return moment(this.activeMovie.dateOfRelease).format("DD.MM.YYYY hh:mm");
    }
  },
  beforeDestroy() {
    this.clearTickets();
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";

.book-ticket {
  width: 100%;
  margin-top: 5em;
  padding: 2em 0 4em 0;
  background-image: url("../../assets/img/bg8.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  flex: 1;
  display: flex;
  flex-direction: row;

  @media @tablet {
    flex-direction: column;
  }

  &-content {
    padding-bottom: 2em;
    background: @orange;
    display: flex;
    flex-direction: column;
    flex: 3;
    order: 1;
  }

  &-basket {
    background: @textSecond;
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 2;
  }

  &-header {
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media @tablet {
      align-items: center;
    }
  }

  &-title {
    font-size: 2.5em;
    font-weight: 700;
    text-transform: uppercase;

    @media @tablet {
      text-align: center;
    }
  }

  &-hall {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: @textSecond;
    opacity: 0.7;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
}

.hall {
  &-price {
    display: flex;
    align-items: center;

    span {
      padding-left: 1em;
      font-weight: 700;
    }
  }

  &-content {
    width: 80%;
    max-width: 1000px;
    margin-top: 2em;

    @media @tablet {
      width: 95%;
    }
  }

  &-screen {
    border-top: 4px solid @textSecond;
    text-align: center;
  }

  &-seats {
    margin-top: 4em;
  }
}
</style>
