import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('../components/Home')
const LoginPage = () =>
    import ('../components/LoginPage')
const FindPass = () =>
    import ('../components/FindPass')

const HomeIndex = () =>
    import ('../components/HomeIndex');
const ConductFinancial = () =>
    import ('../components/ConductFinancial')
const UserHome = () =>
    import ('../components/UserCenter/UserHome')
const UserDasbord = () =>
    import ('../components/UserCenter/UserDasbord')
const ChangeMsg = () =>
    import ('../components/UserCenter/ChangeMsg')
const Recharge = () =>
    import ('../components/UserCenter/Recharge')

const ConductDetail = () =>
    import ('../components/ConductDetail/ConductDetail')
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: {
            name: 'LoginPage'
        }
    }, {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
    },{
        path: '/ConductDetail',
        name: 'ConductDetail',
        component: ConductDetail
    }, {
        path: '/FindPass',
        name: 'FindPass',
        component: FindPass
    }, {
        path: '/UserHome',
        name: 'UserHome',
        component: UserHome,
        redirect: {
            name: 'UserDasbord'
        },
        children: [{
            path: '/UserDasbord',
            name: 'UserDasbord',
            component: UserDasbord,
            meta: {
                label: '个人中心',
            }

        }, {
            path: '/ChangeMsg',
            name: 'ChangeMsg',
            component: ChangeMsg,
            meta: {
                label: '基本资料',
            }

        }, {
            path: '/Recharge',
            name: 'Recharge',
            component: Recharge,
            meta: {
                label: '安全设置',
            }

        }]
    }, {
        path: '/Home',
        name: 'Home',
        component: Home,
        redirect: {
            name: 'HomeIndex'
        },
        children: [{
            path: '/HomeIndex',
            name: 'HomeIndex',
            component: HomeIndex,
            meta: {
                label: '推荐',
            },
   
        },{
            path: '/ConductFinancial',
            name: 'ConductFinancial',
            component: ConductFinancial,
            meta: {
                label: '理财',
            },
   
        }]
    }]
})