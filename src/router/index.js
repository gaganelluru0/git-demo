
import { createWebHistory, createRouter } from "vue-router";

import Model from '../components/Model'
import About from '../components/About'



const routes=[
    {
        path:'/model',
        name:'Model',
        component:Model
    },
    {
        path:'/about',
        name:'About',
        component:About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router;
