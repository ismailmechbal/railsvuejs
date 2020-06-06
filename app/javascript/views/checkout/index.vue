<template>
  <div>
    <Reservation :data="data.status" v-if="!visible" />
    <Payment :data="reservation" v-if="visible" />
  </div>
</template>

<script>
import Reservation from "../../components/checkout/reservation.vue";
import Payment from "../../components/checkout/payment.vue";
export default {
  data() {
    return {
      reservation: null,
      visible: false
    };
  },
  props: ["data"],
  components: {
    Reservation,
    Payment
  },
  created() {
    // fetch(`/api/segment/${this.data.segment_id}`).then((result) => {
    //   this.data = result;
    // });
    this.$root.$on("reservationEvent", event => {
      this.reservation = event;
      this.visible = true;
    });
    this.$root.$on("paymentEvent", () => {
      this.visible = false;
    });
  }
};
</script>
