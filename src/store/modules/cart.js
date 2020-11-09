// shape: [{ id, option?, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
});

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },
  numberOfProducts: (state, getters) => {
    return getters.cartProducts.length;
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  // incrementItemQuantity(state, { id }) {
  // Add option check
  //   const cartItem = state.items.find(item => item.id === id);
  //   cartItem.quantity++;
  // },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

const actions = {
  // checkout({ commit, state }, products) {
  //   const savedCartItems = [...state.items];
  //   commit('setCheckoutStatus', null);
  //   // empty cart
  //   commit('setCartItems', { items: [] });
  //   shop.buyProducts(
  //     products,
  //     () => commit('setCheckoutStatus', 'successful'),
  //     () => {
  //       commit('setCheckoutStatus', 'failed');
  //       // rollback to the cart saved before sending the request
  //       commit('setCartItems', { items: savedCartItems });
  //     }
  //   );
  // },

  // shape: [{ id, option?, quantity }]
  addProductToCart({ commit }, item) {
    console.log(JSON.stringify(item));
    commit('setCheckoutStatus', null);
    commit('pushProductToCart', { id: item.id });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
