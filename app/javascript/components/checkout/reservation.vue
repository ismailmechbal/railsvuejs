<template>
  <div class="garage_title">
    <h1>{{ data.garage_name }}</h1>
    <div>
      <FlatPickr
        v-model="startDate"
        @on-change="setPrice"
        :config="config"
        placeholder="Select date"
        name="date"
      ></FlatPickr>
      <button @click="showPayment">Next</button>
    </div>
  </div>
</template>

<script>
import FlatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  data() {
    return {
      price: 0,
      startDate: new Date(),
      config: {
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "Y-m-d",
        minDate: new Date()
      }
    };
  },
  components: {
    FlatPickr
  },
  props: ["data", "screen"],
  methods: {
    showPayment() {
      const data = {
        price: this.price,
        startDate: this.startDate
      };
      console.log("showPayment", data);
      this.$root.$emit("reservationEvent", data);
    },
    setPrice(selectedDates) {
      this.price = 200;
      console.log("setPrice", this.price);
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
  font-size: 24px;
}
.red {
  color: red;
}
</style
