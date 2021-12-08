import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'
import axios from '@/plugins/axios'
// import DashboardMain from '@/components/dashboard/index.vue'
import Grades from '@/components/grades/index.vue'
import Instructors from '@/components/instructors/index.vue'
import Students from '@/components/students/index.vue'
import Subject from '@/components/subjects/index.vue'
import Announcements from '@/components/announcements/index.vue'
// import store from './store'
// import router from './router'

import Login from "./components/login/login.vue"

import Dashboard from "../src/Interface.vue"
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        authenticated: false
    },
    mutations: {
        setAuthentication(state, status) {
            state.authenticated = status;
        }
    }
});

const router = new VueRouter({
    routes: [{
            path: "/",
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            children: [{
                    path: '/grades',
                    name: 'grades',
                    component: Grades,
                    meta: { authOnly: true }

                },
                {
                    path: '/instructors',
                    name: 'instructors',
                    component: Instructors,
                    meta: { authOnly: true }

                },
                {
                    path: '/students',
                    name: 'students',
                    component: Students,
                    meta: { authOnly: true }

                },
                {
                    path: '/subjects',
                    name: 'subject',
                    component: Subject,
                    meta: { authOnly: true }

                },
                {
                    path: '/announcements',
                    name: 'announcements',
                    component: Announcements,
                    meta: { authOnly: true }

                },
            ],

            beforeEnter: (to, from, next) => {
                if (store.state.authenticated == false) {
                    next(false);
                } else {
                    next();
                }
            }
        },

        // {
        //     path: '/dashboard',
        //     name: 'dashboard',
        //     component: DashboardMain,


        // },
        // {
        //     path: '/grades',
        //     name: 'grades',
        //     component: Grades,
        //     meta: { authOnly: true }


        // },
        // {
        //     path: '/instructors',
        //     name: 'instructors',
        //     component: Instructors,
        //     meta: { authOnly: true }

        // },
        // {
        //     path: '/students',
        //     name: 'students',
        //     component: Students,
        //     meta: { authOnly: true }

        // },
        // {
        //     path: '/subjects',
        //     name: 'subject',
        //     component: Subject,
        //     meta: { authOnly: true }

        // },
        // {
        //     path: '/announcements',
        //     name: 'announcements',
        //     component: Subject,
        //     meta: { authOnly: true }

        // },

        // {
        //     path: "/dashboard",
        //     name: "dashboard",
        //     component: Dashboard
        // }
    ]
})

new Vue({
    vuetify,
    axios,
    store: store,
    router: router,
    render: h => h(App)
}).$mount('#app')