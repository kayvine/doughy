import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: null,
    token: localStorage.getItem('token') || undefined,
    user: {},
    popularItems: [
      {
        city: 'Toronto',
        averagePrice: 120,
        propertyCount: 76,
        imageUrl: '../img/cappucino.jpg',
        imageAlt: 'Toronto skyline'
      },
      {
        city: 'Malibu',
        averagePrice: 215,
        propertyCount: 43,
        imageUrl: '/img/latte.jpg',
        imageAlt: 'Cliff in Malibu'
      },
      {
        city: 'Chicago',
        averagePrice: 130,
        propertyCount: 115,
        imageUrl: '/img/coffee_black.jpg',
        imageAlt: 'Chicago skyline'
      },
      {
        city: 'Seattle',
        averagePrice: 135,
        propertyCount: 63,
        imageUrl: '../img/jasmine_tea.jpg',
        imageAlt: 'Seattle skyline'
      },
      {
        city: 'Colorado',
        averagePrice: 85,
        propertyCount: 47,
        imageUrl: '../img/black_tea.jpg',
        imageAlt: 'Lake in Colorado'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
