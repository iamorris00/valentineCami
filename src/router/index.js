import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from "../views/Intro"
import Level01 from "../views/Level01"
import Level02 from "../views/Level02";
import Level03 from "../views/Level03";
import Level04 from "../views/Level04";
import Level05 from "../views/Level05";
import Level06 from "../views/Level06";
import Level07 from "../views/Level07";
import Level08 from "../views/Level08";
import Level09 from "../views/Level09";
import Level10 from "../views/Level10";
import Amor from "../views/Amor";
import nicetry from "../views/nicetry";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/nicetry',
    name: 'nicetry',
    component: nicetry
  },
  {
    path: '/level01',
    name: 'Level01',
    component: Level01
  },
  {
    path: '/level02',
    name: 'Level02',
    component: Level02
  },
  {
    path: '/level03',
    name: 'Level03',
    component: Level03
  },
  {
    path: '/level04',
    name: 'Level04',
    component: Level04
  },
  {
    path: '/level05',
    name: 'Level05',
    component: Level05
  },
  {
    path: '/level06',
    name: 'Level06',
    component: Level06
  },
  {
    path: '/level07',
    name: 'Level07',
    component: Level07
  },
  {
    path: '/level08',
    name: 'Level08',
    component: Level08
  },
  {
    path: '/level09',
    name: 'Level09',
    component: Level09
  },
  {
    path: '/level10',
    name: 'Level10',
    component: Level10
  },
  {
    path: '/amor',
    name: 'Amor',
    component: Amor
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
