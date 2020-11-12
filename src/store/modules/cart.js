// shape: [{ id, option?, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
});

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, option, quantity }) => {
      const product = rootState.products.find(product => product.id === id);
      return {
        id: product.id,
        title: product.title,
        option: option ? option.title : '',
        imageUrl: product.imageUrl,
        price: option ? option.price : product.price,
        quantity
      };
    });
  },

  numberOfProducts: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

const mutations = {
  pushProductToCart(state, { id, option }) {
    state.items.push({
      id,
      option,
      quantity: 1
    });
  },

  incrementItemQuantity(state, cartItem) {
    // const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },

  decrementItemQuantity(state, cartItem) {
    // const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity--;
  },

  removeFromCart(state, cartItem) {
    const i = state.items.indexOf(cartItem);
    const filtered = state.items.filter((value, index) => index !== i);
    state.items = filtered;
  },

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
  addProductToCart({ state, commit }, product) {
    console.log(JSON.stringify(product));
    commit('setCheckoutStatus', null);
    const cartItem = state.items.find(item => item.id === product.id && item.option === product.option);
    if (!cartItem) {
      commit('pushProductToCart', product);
    } else {
      commit('incrementItemQuantity', cartItem);
    }
  },

  removeFromCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    let cartItem;
    if (product.option) {
      cartItem = state.items.find(item => item.id === product.id && item.option.title === product.option);
    } else {
      cartItem = state.items.find(item => item.id === product.id);
    }
    if (cartItem) {
      if (cartItem.quantity > 1) {
        console.log('decrementItemQuantity');
        commit('decrementItemQuantity', cartItem);
      } else {
        console.log('removeFromCart');
        commit('removeFromCart', cartItem);
      }
    } else {
      console.log('FAIL');
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
