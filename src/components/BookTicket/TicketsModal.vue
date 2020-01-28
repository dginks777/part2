<template>
  <b-modal
    ref="result-modal"
    scrollable
    header-class="modal-custom-header"
    body-class="modal-custom-body"
    footer-class="modal-custom-footer"
    @close="handleCloseClick"
    @hide="handleCloseClick"
  >
    <template v-slot:modal-title>
      <div class="modal-title">
        Thank You! Your order has been placed.
      </div>
    </template>
    <h5>Tickets:</h5>
    <div class="modal-code" v-for="code in reservationCode">
      <span>{{ code }}</span>
    </div>
    <template v-slot:modal-footer>
      <BookButton
        variant="primary"
        size="sm"
        class="float-right"
        :on-click="handleCloseClick"
      >
        Close
      </BookButton>
    </template>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BookButton from "../../uiElements/BookButton";

export default {
  name: "TicketsModal",
  components: {
    BookButton
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    ...mapActions(["clearReservationCodes"]),
    handleCloseClick() {
      this.clearReservationCodes();
    },
    showModal() {
      this.$refs["result-modal"].show();
    },
    hideModal() {
      this.$refs["result-modal"].hide();
    }
  },
  watch: {
    reservationCode: function(nextReservationCode) {
      if (nextReservationCode.length) {
        this.showModal();
      } else {
        this.hideModal();
      }
    }
  },
  computed: {
    ...mapGetters(["reservationCode"])
  }
};
</script>
<style lang="less">
@import "../../styles/variables";
@import "../../styles/animation";

.modal {
  &-custom-header {
    background: @bgLight!important;
    color: @textSecond;
    border-bottom: none;
  }

  &-custom-body {
    color: @textSecond;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  &-code {
    width: 80%;
    margin: 1em 0;
    padding: 2em 1em;
    text-align: center;
    background-color: @bgLight;
    background-image: radial-gradient(
        circle at center,
        white 3px,
        transparent 4px
      ),
      radial-gradient(circle at center, white 3px, transparent 4px);
    background-size: 14px 12px;
    background-position: center -6px, center calc(100% + 6px);
    background-repeat: repeat-x;
  }
  &-custom-footer {
    color: @textSecond;
    border-top: none;
    justify-content: center;
  }
}
</style>
