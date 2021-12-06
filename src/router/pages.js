import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Interface from '../../src/Interface.vue'
import Dashboard from '../components/dashboard/index.vue'
import Grades from '../components/grades/index.vue'
import Instructors from '../components/instructors/index.vue'
import Students from '../components/students/index.vue'
import Subject from '../components/subjects/index.vue'



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
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,

    },
    {
        path: '/grades',
        name: 'grades',
        component: Grades,

    },
    {
        path: '/instructors',
        name: 'instructors',
        component: Instructors,

    },
    {
        path: '/students',
        name: 'students',
        component: Students,

    },
    {
        path: '/subjects',
        name: 'subject',
        component: Subject,

    },


]