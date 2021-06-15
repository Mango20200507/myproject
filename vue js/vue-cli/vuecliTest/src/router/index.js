import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Error from '@/components/Error'

// import Mango from '@/components/Mango'

// import Mango1 from '@/components/Mango1'
// import Mango2 from '@/components/Mango2'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

// export default new Router({
//     routes: [{
//         path: '/',
//         name: 'HelloWorld',
//         component: HelloWorld
//     }, {
//         path: '/Mango',
//         name: 'Mango',
//         component: Mango,
//         children: [{ path: '/', name: 'Hello/Mango', component: Mango },
//             { path: 'Mango1', name: 'Mango1', component: Mango1 },
//             { path: 'Mango2', name: 'Mango2', component: Mango2 },
//         ]
//     }, ]
// })

export default new Router({
    mode: 'history',

    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        alias: '/sun'

        // components: {
        //     dafault: HelloWorld,
        //     left: Hi1,
        //     right: Hi2
        // }
    }, {
        path: '/params/:newsID(\\d+)/:newsTitle',
        component: Params,
        // beforeEnter: (to, from, next) => {
        //     console.log(to);
        //     console.log(from);
        //     next()
        // }

    }, {
        path: '/goHome',
        redirect: '/'

    }, {
        path: '/Hi1',
        component: Hi1,
        alias: '/mango'

    }, {
        path: '*',
        component: Error,


    }]
})