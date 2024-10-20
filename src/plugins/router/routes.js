export const routes = [
  {
    path: '',
    name: 'login',
    meta: { requiresAuth: false },
    component: () => import('@/layouts/blank.vue'),
    redirect: 'login',
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: 'login',
        component: () => import('@/pages/[...error].vue'), // Para rutas no encontradas
      },
    ],
  },
  {
    path: '/sugas',
    component: () => import('@/layouts/default.vue'),
    meta: { requiresAuth: true },
    redirect: 'sugas/programa',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      
      {
        path: 'programa',
        meta: { requiresAdmin: true },
        component: () => import('@/pages/programa/programa.vue'),
      },
      {
        path: 'competencia',
        meta: { requiresAdmin: true },
        component: () => import('@/pages/competencia/competencia.vue'),
      },
      {
        path: 'programacompetencia',
        meta: { requiresAdmin: true },
        component: () => import('@/pages/programacompetencia/programacompetencia.vue'),
      },
      {
        path: 'resultado_aprendizaje',
        meta: { requiresAdmin: true },
        component: () => import('@/pages/ResultadoAprendizaje/resultadoaprendizaje.vue'),
      },
      {
        path: 'cargar_archivo',
        meta: { requiresAdmin: true },
        component: () => import('@/pages/archivo/archivocarga.vue'),
      },
     
    ],
  },
  
]
