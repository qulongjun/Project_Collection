import List from '../components/list.vue'
import Detail from '../components/details.vue'
//路由映射
var routes = [
    {
        path: "/list",
        name: "/list",
        component: List
    }, {
        path: "/detail",
        name: "/detail",
        component: Detail
    }
];

module.exports = routes;