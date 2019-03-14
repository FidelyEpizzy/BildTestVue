import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        navMenu: [{
            path: '/',
            name: 'HOME'
        },
        {
            path: '/about',
            name: 'ABOUT'
        },
        {
            path:'/work',
            name:'WORK'
        },
        {
            path:'/contact',
            name:'CONTACT'
        }
        ]
    },
    getters: {
        navMenuGetter: state =>{
            return state.navMenu;
        }
    }
}) 