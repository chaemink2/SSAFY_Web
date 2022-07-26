import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "../views/Main.vue"
import List from "../views/todos/List.vue"
import Detail from "../views/todos/Detail.vue"

Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
