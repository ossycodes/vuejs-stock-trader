<template>
  <div class="container">
    <div class="col-md-12">
      <app-header></app-header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initializeStocks");
    /**
     * an alternative to the above would have been:
     * ...mapActions([
     *   "initializeStocks"
     * ])
     */
  }
};
</script>

<style>
</style>
