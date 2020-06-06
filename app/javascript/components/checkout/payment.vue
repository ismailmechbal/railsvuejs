<template>
  <div>
    <h1>Payment</h1>
    <a @click="showReservation">Back to reservation</a>
    <h3>Price: {{ data.price }}</h3>
    <h3>date: {{ data.startDate }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data"],
  methods: {
    showReservation() {
      this.$emit("paymentEvent");
    }
  }
};
</script>

<style scoped>
h1 {
  color: blue;
  font-size: 18px;
}
a {
  cursor: pointer;
}
</style>
