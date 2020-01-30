<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>{{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity) || insufficientFunds"
          >{{ insufficientFunds ? "Low Funds" : "BUY" }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      quantity: "0"
    };
  },
  props: ["stock"],
  computed: {
    ...mapGetters({
      funds: "fetchFunds"
    }),
    /**
     * an alternative to the above would be this
     * funds() {
     *  return this.$store.getters.fetchFunds;
     * }
     */
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      let order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      /**
       * an alternative to the above would have been:
       * ...mapActions([
       *   "buyStock"
       * ])
       */

      this.quantity = 0;
      this.$router.push("/portfolio");
    }
  }
};
</script>