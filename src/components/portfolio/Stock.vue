<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title" v-if="stock">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            v-model.number="quantity"
            placeholder="Quantity"
            class="form-control"
            :class="{danger: insufficientQuantity}"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
            @click="sellStock()"
          >{{ insufficientQuantity ? "Low Qty" : "SELL"}}</button>
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
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters({ funds: "fetchFunds" }),
    /**
     * an alternative to the above would be:
     * funds() {
     *  return this.$store.getters.fetchFunds;
     * }
     */

    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    /**
     * an alyernative to the above would be
     * sellStockAction() {
     *  return this.$store.dispatch("sellStock")
     * }
     */

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStockAction(order);
    }
  }
};
</script>