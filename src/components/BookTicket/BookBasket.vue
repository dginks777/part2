<template>
  <div class="basket">
    <div class="basket-header">
      <span class="basket-title">Tickets</span>
      <span>{{ number }} tickets, {{ subtotal }} uah</span>
    </div>
    <div class="basket-content">
      <transition-group name="fade-out" tag="div" leave-active-class="fade-out">
        <div
          class="basket-ticket"
          v-for="ticket in tickets"
          :key="`${ticket.row_id}row${ticket.place_position}place`"
        >
          {{ ticket.row_id + 1 }} row {{ ticket.place_position + 1 }} place GOOD
          {{ activeMovieSessions.ticketPrice }} UAH
          <b-icon
            class="basket-remove"
            icon="x-square-fill"
            variant="danger"
            font-scale="2"
            v-on:click="removeTicket(ticket)"
          />
        </div>
      </transition-group>
    </div>
    <div class="basket-footer">
      <div class="basket-total">
        <div>Subtotal:</div>
        <div>{{ subtotal }} uah</div>
      </div>
      <BookButton :onClick="bookTickets">
        <b-spinner v-if="isLoading" class="basket-spinner" small />
        Proceed
      </BookButton>
    </div>
  </div>
</template>

<script>
import BookButton from "../../uiElements/BookButton";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BookBasket",
  components: {
    BookButton
  },
  methods: {
    ...mapActions(["removeTicket", "bookTickets"])
  },
  computed: {
    ...mapGetters(["tickets", "isLoading", "activeMovieSessions"]),
    number() {
      return this.tickets.length;
    },
    subtotal() {
      return this.tickets.length * this.activeMovieSessions.ticketPrice;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";
@import "../../styles/animation";

.basket {
  flex: 1;
  order: 2;
  display: flex;
  flex-direction: column;
  background: @textSecond;

  &-header {
    padding: 1em;
    height: 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &-title {
    font-size: 1.6em;
    font-weight: 700;
  }

  &-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &-ticket {
    margin: 1em;
    padding: 1em 1em;
    background: @bgLight;
    color: @textSecond;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: fadeInLeftBig 0.3s ease;
  }

  &-footer {
    height: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-total {
    padding: 0.2em 1em;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &-spinner {
    margin-right: 0.5em;
  }

  &-remove {
    cursor: pointer;
  }
}

.fade-out {
  animation: fadeOutLeft 0.3s ease;
}
</style>
