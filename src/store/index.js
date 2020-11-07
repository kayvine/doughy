import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: null,
    token: localStorage.getItem('token') || undefined,
    user: {},
    menu: [
      {
        name: 'lunch',
        title: 'Lunch',
        items: [
          {
            name: 'soep',
            title: 'Soep met brood & boter',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
            imageUrl: '../images/soep.jpg',
            options: [
              {
                title: '1/2 liter',
                price: 4.0
              },
              {
                title: '1 liter',
                price: 5.5
              }
            ]
          },
          {
            name: 'boterham',
            title: 'Boterham',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
            imageUrl: '../images/monstruo.jpg',
            options: [
              {
                title: 'Boterham kaas',
                price: 3.5
              },
              {
                title: 'Boterham kaas & ham',
                price: 4.0
              },
              {
                title: 'Boterham tzatziki & rode biet',
                price: 4.0
              },
              {
                title: 'Boterham humus & granaatappel',
                price: 4.0
              }
            ]
          },
          {
            name: 'croque',
            title: 'Croque',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
            imageUrl: '../images/croque.jpg',
            options: [
              {
                title: 'Croque met salade',
                price: 9.0
              },
              {
                title: 'Croque uit het vuistje',
                price: 8.0
              }
            ]
          },
          {
            name: 'quiche',
            title: 'Quiche',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
            imageUrl: '../images/cookie.jpg',
            options: [
              {
                title: 'Croque met salade',
                price: 9.0
              },
              {
                title: 'Croque uit het vuistje',
                price: 8.0
              }
            ]
          }
        ]
      },
      {
        name: 'dessert',
        title: 'Dessert',
        items: [
          {
            name: 'apple-cake',
            title: 'Apple Cake',
            averagePrice: 130,
            imageUrl: '/images/kristiana-pinne.jpg'
          },
          {
            name: 'carrot-cake',
            title: 'Carrot Cake',
            averagePrice: 135,
            imageUrl: '../images/jasmine_tea.jpg'
          },
          {
            name: 'cheese-cake',
            title: 'Cheese Cake',
            averagePrice: 130,
            imageUrl: '/images/coffee_black.jpg'
          },
          {
            name: 'chocolate-cake',
            title: 'Chocolate Cake',
            averagePrice: 135,
            imageUrl: '../images/ohtilly.jpg'
          },
          {
            name: 'scones',
            title: 'Scones',
            averagePrice: 130,
            imageUrl: '/images/cappucino.jpg'
          }
        ]
      },
      {
        name: 'specials',
        title: 'Specials',
        items: [
          {
            name: 'afternoon-tea',
            title: 'Afternoon Tea',
            price: 25,
            imageUrl: '../images/cappucino.jpg'
          }
        ]
      }
    ],
    popularItems: [
      {
        name: 'Cappucino',
        description: 'Lorem ipsum dolor sit amet adipisicing elit. Voluptatibus quia nulla!',
        url: '#',
        imageUrl: '../images/cappucino.jpg',
        imageAlt: 'Toronto skyline'
      },
      {
        name: 'Latte Macchiato',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nulla!',
        url: '#',
        imageUrl: '../images/latte.jpg',
        imageAlt: 'Cliff in Malibu'
      },
      {
        name: 'Americano',
        description: 'Lorem ipsum dolor sit adipisicing elit. Voluptatibus quia nulla.',
        url: '#',
        imageUrl: '../images/coffee_black.jpg',
        imageAlt: 'Chicago skyline'
      },
      {
        name: 'Herbal Tea',
        description: 'Lorem ipsum dolor sit amet consectur adipisicing elit. Voluptatibus quia nulla!',
        url: '#',
        imageUrl: '../images/jasmine_tea.jpg',
        imageAlt: 'Herbal Tea'
      },
      {
        name: 'Breakfast Tea',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.',
        url: '#',
        imageUrl: '../images/black_tea.jpg',
        imageAlt: 'Breakfast Tea'
      },
      {
        name: 'Chocolate Cookie',
        description: 'Lorem ipsum dolor sit amet consectur adipisicing. Voluptatibus quia nulla!',
        url: '#',
        imageUrl: '../images/cookie.jpg',
        imageAlt: 'Yummy cookies'
      }
    ]
  },
  getters: {
    productByName: state => (category, name) => {
      const _category = state.menu.find(cat => cat.name === category);
      return _category.items.find(item => item.name === name);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
