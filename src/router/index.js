import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'
import PrintView from '../views/PrintView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoList
    },
    {
      path: '/print',
      name: 'print',
      component: PrintView
    }
  ]
})

export default router 