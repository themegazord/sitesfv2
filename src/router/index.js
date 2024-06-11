import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import QuemSomosView from '@/views/QuemSomosView.vue'
import ModulosView from '@/views/ModulosView.vue'
import SolucoesView from '@/views/SolucoesView.vue'
import BarRestauranteView from '@/views/Solucoes/BarRestauranteView.vue'
import SuperMercView from '@/views/Solucoes/SuperMercView.vue'
import RoupaCalcadoView from '@/views/Solucoes/RoupaCalcadoView.vue'
import AutoElecOficinaView from '@/views/Solucoes/AutoElecOficinaView.vue'
import DistConvView from '@/views/Solucoes/DistConvView.vue'
import FabPeqPorteView from '@/views/Solucoes/FabPeqPorteView.vue'
import ConfeccoesView from '@/views/Solucoes/ConfeccoesView.vue'
import EventosView from '@/views/Solucoes/EventosView.vue'
import LicitacoesView from '@/views/Solucoes/LicitacoesView.vue'
import ParceirosView from '@/views/Parceiros/ParceirosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'linkativo',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quemsomos',
      name: 'quemsomos',
      component: QuemSomosView
    },
    {
      path: '/modulos',
      name: 'modulos',
      component: ModulosView
    },
    {
      path: '/solucoes',
      name: 'solucoes',
      component: SolucoesView
    },
    {
      path: '/solucao/barrestaurante',
      name: 'barrestaurante',
      component: BarRestauranteView
    },
    {
      path: '/solucao/supermerc',
      name: 'supermerc',
      component: SuperMercView
    },
    {
      path: '/solucao/roupacalcado',
      name: 'roupacalcado',
      component: RoupaCalcadoView
    },
    {
      path: '/solucao/autoelecoficina',
      name: 'autoelecoficina',
      component: AutoElecOficinaView
    },
    {
      path: '/solucao/discconv',
      name: 'discconv',
      component: DistConvView
    },
    {
      path: '/solucao/fabpeqporte',
      name: 'fabpeqporte',
      component: FabPeqPorteView
    },
    {
      path: '/solucao/confeccoes',
      name: 'confeccoes',
      component: ConfeccoesView
    },
    {
      path: '/solucao/eventos',
      name: 'eventos',
      component: EventosView
    },
    {
      path: '/solucao/licitacoes',
      name: 'licitacoes',
      component: LicitacoesView
    },
    {
      path: '/parceiros',
      name: 'parceiros',
      component: ParceirosView
    }
  ]
})

export default router
