/*
 * @Author: mrk-lyz mrk_lanyouzi@yeah.net
 * @Date: 2022-06-27 13:00:32
 * @LastEditTime: 2022-06-28 19:50:44
 * @FilePath: /WebDemo/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by mrk-lyz mrk_lanyouzi@yeah.net, All Rights Reserved. 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/choice',
    name: 'Choice',
    component: () => import('@/views/Choice.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
