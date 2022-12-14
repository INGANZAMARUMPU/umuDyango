import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Serializers from '../views/Serializers.vue'
import ViewSets from '../views/ViewSets.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/admin', name: 'admin', component: Admin },
  { path: '/serializers', name: 'serializers', component: Serializers },
  { path: '/viewsets', name: 'viewsets', component: ViewSets },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
