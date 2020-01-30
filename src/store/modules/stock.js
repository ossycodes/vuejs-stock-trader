import stocks from '../../data/stocks';
const state = {
    stocks: []
};

const getters = {

    /**
     * fetches/returns all the stocks from state.
     */
    fetchStocks: state => {
        return state.stocks;
    }

};

const mutations = {

    /**
     * triggered when App Component is created, 
     * initialize the stocks state from the one stored in our data folder.
     * @param {*} state 
     * @param {*} stocks 
     */
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },

    /**
     * trigered when user clicks end day
     * simply randomize the stock prices
     * @param {*} state 
     */
    'RND_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        });
    }

};

const actions = {

    /**
     * commits the SET_STOCKS Mutation
     */
    initializeStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },

    /**
     * commits the RND_STOCKS Mutation
     */
    randomizeStock: ({ commit }) => {
        commit('RND_STOCKS');
    }
};

export default {
    state, getters, mutations, actions
}