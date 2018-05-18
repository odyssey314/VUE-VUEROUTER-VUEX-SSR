import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: ' '
    }
  },
  {
    path: '/login',
    component: Login
  }
]
