import Booster from './components/Booster.vue';
import Detail from './components/Detail.vue';
import Home from './components/Home.vue';
import List from './components/List.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Detail/:id', component: Detail },
    { path: '/Booster', component: Booster },
    { path: '/List', component: List },
    { path: '/List/:type', component: List },
];

export default routes;
