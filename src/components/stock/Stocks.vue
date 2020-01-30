<template>
  <div class="container">
    <!-- <p>Stock Component</p> -->
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    appStock: Stock
  },
  data() {
    return {};
  },
  computed: {
    stocks() {
      return this.$store.getters.fetchStocks;
    }
    /**
     * an alternative to the above would have been:
     * ...mapGetters([
     *  "fetchStocks"
     * ])
     */
  }
};
</script>


