<template>
  <div class="container">
    <!-- <p>Portfolio Component</p> -->
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "../portfolio/Stock";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: "fetchUserStocks"
    })
  }
};
</script>


