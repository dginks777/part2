<template>
  <div class="hall-row">
    <div
      v-for="(place, index) in row"
      :key="place._id"
      v-on:click="onCheckedClick(place._id, index, place.isFree)"
    >
      <Seat :isFree="place.isFree" :isChecked="getIsChecked(place._id)" />
    </div>
  </div>
</template>

<script>
import isEmpty from "lodash/isEmpty";
import Seat from "../../uiElements/Seat";

export default {
  name: "HallRow",
  components: {
    Seat
  },
  props: [
    "row",
    "row_id",
    "tickets",
    "addTicket",
    "removeTicket",
    "movieShow_id"
  ],
  methods: {
    onCheckedClick(id, place_position, isFree) {
      if (!isFree) {
        return;
      }

      const ticket = {
        place_id: id,
        movieShow_id: this.movieShow_id,
        row_id: this.row_id,
        place_position: place_position,
        isFree: isFree
      };

      return this.getIsChecked(id)
        ? this.removeTicket(ticket)
        : this.addTicket(ticket);
    },
    getIsChecked(id) {
      return (
        !isEmpty(this.tickets) &&
        this.tickets.some(ticket => ticket.place_id === id)
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/variables";

.hall {
  &-row {
    width: 80%;
    margin: 1em auto 0 auto;
    display: flex;
    justify-content: space-between;

    @media @tablet {
      width: 100%;
    }
  }
}
</style>
