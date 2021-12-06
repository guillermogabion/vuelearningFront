import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Interface from '../../src/Interface.vue'


export default [{
        path: '/home',
        name: 'Home',
        component: Home,

    },
    {
        path: '/about',
        name: 'about',
        component: About,

    },
    {
        path: '/',
        name: 'login',
        component: Login,

    },
    {
        path: '/interface',
        name: 'interface',
        component: Interface,

    },
]