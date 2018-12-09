
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'groupname', component: () => import('pages/groupname.vue') },
      { path: 'invitefriends', component: () => import('pages/invitefriends.vue') },
      { path: 'signup', component: () => import('pages/signup.vue') },
      { path: 'groupsplash', component: () => import('pages/groupsplash.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
