import {
  createHistoryRouter,
  createRoute,
  createRouterControls,
} from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'

import { appStarted } from '@/shared/config/init'

export const routes = {
  home: createRoute(),
  movies: createRoute(),
  movie: createRoute<{ id: string }>(),
  auth: {
    register: createRoute(),
    login: createRoute(),
  },
}

export const controls = createRouterControls()

export const router = createHistoryRouter({
  routes: [
    {
      path: '/register',
      route: routes.auth.register,
    },
    {
      path: '/movies',
      route: routes.movies,
    },
    {
      path: '/movie/:id',
      route: routes.movie,
    },
    {
      path: '/login',
      route: routes.auth.login,
    },
    {
      path: '/',
      route: routes.home,
    },
  ],
  controls,
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
})
