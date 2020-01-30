<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>
        <!-- notice the | currency ? that's a filter, defined in the main.js file -->
        <strong class="navbar-text navbar-right">Funds: {{ funds |currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay()">End Day</a>
          </li>
          <li class="dropdown" :class="{open: openDropDown}">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              @click="openDropDown = !openDropDown"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" @click="saveData()">Save Data</a>
              </li>
              <li>
                <a href="#" @click="loadData()">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      openDropDown: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.fetchFunds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStock: "randomizeStock",
      fetchData: "loadData"
    }),
    endDay() {
      return this.randomizeStock();
    },
    /**
     * an alternative to the above is this:
     */
    // endDay() {
    //   this.$store.dispatch("randomizeStock");
    // }
    //or
    /**
     * ...mapActions({
     *  endDay: "randomizeStock"
     * })
     *
     */

    saveData() {
      const data = {
        funds: this.$store.getters.fetchFunds,
        stockPortfolio: this.$store.getters.fetchUserStocks,
        stocks: this.$store.getters.fetchStocks
      };

      this.$http.put("data.json", data).then(
        response => {
          console.log(response.status);
          if (response.status) {
            //notify user yen yen
          }
        },
        response => {
          //notify user of error
          console.log(response);
        }
      );
    },

    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style>
</style>
