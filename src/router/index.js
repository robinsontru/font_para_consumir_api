import { createRouter, createWebHashHistory } from 'vue-router'

import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import  QuienesSomosView from '../views/QuienesSomosView.vue'
import ConoyCuidateView from '../views/ConoyCuidateView.vue'
import InicioView from '../views/InicioView.vue'
import HomeComp from '../components/HomeComp.vue'
import ComentariosView from  '../views/ComentariosView.vue'
import AgendacitaView from  '../views/AgendacitaView.vue'
import Eventosview from '../views/EventosView.vue';
import Agregarview from '../views/agregarView.vue';
import citasView from '../views/citasView.vue';

const routes = [


  {
    path: '/',
    name: 'home',
    component: HomeComp
  },
  {
    path: '/INICIO',
    name: 'inicio',
    component: InicioView
  },


  {
    path: '/registro',
    name: 'registro',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/quienessomos',
    name: 'quienesSomos',
    component: QuienesSomosView
  },
  {
    path: '/conoceteycuidate',
    name: 'conoceteycuidate',
    component: ConoyCuidateView
  },
  {
    path: '/comentarios',
    name: 'comentarios',
    component: ComentariosView
  },
  {
    path: '/agendacita',
    name: 'agendacita',
    component: AgendacitaView
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventosview
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: Agregarview
  },
  {
    path: '/citas',
    name: 'citas',
    component:citasView
  },
  
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
