const state = {
    //initial funds for user hehee.
    funds: 10000,
    stocks: []
};

const getters = {

    /**
     * fetches a user stocks
     * @param {*} state 
     * @param {*} getters 
     */
    fetchUserStocks(state, getters) {
        return state.stocks.map(stock => {
            let record;
            record = getters.fetchStocks.find(element => {
                return stock.id == element.id
            });
            record = {
                id: stock.id,
                name: record.name,
                quantity: stock.quantity,
                price: record.price
            }
            return record;
        });
    },

    /**
     * fetch a user funds
     * @param {*} state 
     */
    fetchFunds(state) {
        return state.funds;
    }

};

const mutations = {

    /**
     * updates the user's stocks and funds with the newly bought stock
     * @param {*} state 
     * @param {*} param1 
     */
    'BUY_STOCK'(state, { stockId, stockPrice, quantity }) {
        const existingOrder = state.stocks.find(element => {
            return element.id == stockId;
        });
        if (existingOrder) {
            existingOrder.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },

    /**
     * sells the stocks a user as previously bought/updates the user funds.
     * @param {*} state 
     * @param {*} param1 
     */
    'SELL_STOCK'(state, { stockId, stockPrice, quantity }) {
        const stockToBeSold = state.stocks.find(element => {
            return element.id === stockId;
        });

        if (stockToBeSold.quantity > quantity) {
            stockToBeSold.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(stockToBeSold), 1);
        }
        state.funds += stockPrice * quantity;
    },

    /**
     * loads the portfolio previously saved to firebase
     * @param {*} state 
     * @param {*} param1 
     */
    'SET_PORTFOLIO'(state, { funds, stockPortfolio }) {
        state.funds = funds;
        state.stocks = stockPortfolio ? stockPortfolio : [];
    }

};

const actions = {

    /**
     * commits the SELL_STOCK mutation
     */
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order);
    },

    /**
     * commits the BUY_STOCK mutation
     */
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    }

};

export default {
    state, getters, mutations, actions
}
