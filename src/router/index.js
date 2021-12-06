import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './pages'
import auth from './auth'
// import errors from './errors'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Login from '../views/Login.vue'

Vue.use(VueRouter)


const routes = [
    ...pages,
    ...auth,

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// function guardRoutes(next) {

//     'login'
//     next({ name: '/' })
// }

// router.beforeEach((to, from, next) => {

//     guardRoutes(to, next)
// })

export default router