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
        name: 'Toronto',
        description: 'Lorem ipsum dolor sit amet adipisicing elit. Voluptatibus quia nulla!',
        url: '#',
        imageUrl: '../images/cappucino.jpg',
        imageAlt: 'Toronto skyline'
      },
      {
        name: 'Malibu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nulla!',
        url: '#',
        imageUrl: '../images/latte.jpg',
        imageAlt: 'Cliff in Malibu'
      },
      {
        name: 'Chicago',
        description: 'Lorem ipsum dolor sit adipisicing elit. Voluptatibus quia nulla.',
        url: '#',
        imageUrl: '../images/coffee_black.jpg',
        imageAlt: 'Chicago skyline'
      },
      {
        name: 'Seattle',
        description: 'Lorem ipsum dolor sit amet consectur adipisicing elit. Voluptatibus quia nulla!',
        url: '#',
        imageUrl: '../images/jasmine_tea.jpg',
        imageAlt: 'Seattle skyline'
      },
      {
        name: 'Colorado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.',
        url: '#',
        imageUrl: '../images/black_tea.jpg',
        imageAlt: 'Lake in Colorado'
      },
      {
        name: 'Cookie',
        description: 'Lorem ipsum dolor sit amet consectur adipisicing. Voluptatibus quia nulla!',
        url: '#',
        imageUrl: '../images/cookie.jpg',
        imageAlt: 'Yummy cookies'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
