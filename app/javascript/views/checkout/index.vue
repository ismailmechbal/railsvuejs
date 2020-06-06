<template>
  <div>
    <Reservation :data="data.status" v-if="!visible" @reservationEvent="handlePayment" />
    <Payment :data="reservation" v-if="visible" @paymentEvent="handleReservation" />
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
  methods: {
    handlePayment(event) {
      this.reservation = event;
      this.visible = true;
    },
    handleReservation() {
      this.visible = false;
    }
  }
};
</script>
