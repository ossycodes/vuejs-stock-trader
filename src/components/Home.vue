<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr />
     <!-- notice the | currency ? that's a filter, defined in the main.js file -->
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.fetchFunds;
      /**
       *an alternative to the above would have been:
       * ...mapGetters();
       * or mapGetters({
       *  fetchFunds: 'fetchFunds'
       * })
       */
    }
  }
};
</script>


