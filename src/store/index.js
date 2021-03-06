import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: null,
    ordering: false,
    token: localStorage.getItem('token') || undefined,
    user: {},
    products: [
      {
        id: '567367de-1ea4-46bf-9cbe-ba459b99b9a7',
        name: 'soep',
        title: 'Soep met brood',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
        category: 'lunch',
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
        id: '77662829-2886-4de3-80c5-b55ec92b5896',
        name: 'boterham',
        title: 'Boterham',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
        category: 'lunch',
        imageUrl: '../images/monstruo.jpg',
        options: [
          {
            title: 'kaas',
            price: 3.5
          },
          {
            title: 'kaas & ham',
            price: 4.0
          },
          {
            title: 'tzatziki & rode biet',
            price: 4.0
          },
          {
            title: 'humus & granaatappel',
            price: 4.0
          }
        ]
      },
      {
        id: '3e9fa1ad-4dbb-4108-86df-173eca0410cd',
        name: 'croque',
        title: 'Croque',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
        category: 'lunch',
        imageUrl: '../images/croque.jpg',
        options: [
          {
            title: 'met salade',
            price: 9.0
          },
          {
            title: "uit 't vuistje",
            price: 8.0
          }
        ]
      },
      {
        id: '249666a6-0f72-48dc-ab57-a510f3568361',
        name: 'quiche',
        title: 'Quiche',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
        price: 12.0,
        category: 'lunch',
        imageUrl: '../images/cookie.jpg'
      },
      {
        id: '8fd5e892-c076-4e97-81c0-ea81d784937e',
        name: 'apple-cake',
        title: 'Apple Cake',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
        price: 130,
        category: 'dessert',
        imageUrl: '/images/kristiana-pinne.jpg'
      },
      {
        id: '139f46b2-1546-4206-a57a-39b7b312ef4d',
        name: 'carrot-cake',
        title: 'Carrot Cake',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus compte quia.',
        price: 135,
        category: 'dessert',
        imageUrl: '../images/jasmine_tea.jpg'
      },
      {
        id: 'e90f72fe-8a02-4000-919a-1eec0ecfdd0e',
        name: 'cheese-cake',
        title: 'Cheese Cake',
        price: 130,
        category: 'dessert',
        imageUrl: '/images/coffee_black.jpg'
      },
      {
        id: '64de8cbf-51ff-4334-80c0-355ab7fd2dd3',
        name: 'chocolate-cake',
        title: 'Chocolate Cake',
        price: 135,
        category: 'dessert',
        imageUrl: '../images/ohtilly.jpg'
      },
      {
        id: '91c92c68-56ab-4e26-a0be-2776b03abcb8',
        name: 'scones',
        title: 'Scones',
        price: 130,
        category: 'dessert',
        imageUrl: '/images/cappucino.jpg'
      },
      {
        id: '35651d67-f5fe-4084-bd25-ecbd5f30a58b',
        name: 'afternoon-tea',
        title: 'Afternoon Tea',
        price: 25,
        category: 'specials',
        imageUrl: '../images/cappucino.jpg'
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
    productByName: state => name => {
      return state.products.find(item => item.name === name);
    }
  },
  mutations: {},
  actions: {},
  modules: {
    cart
  }
});
