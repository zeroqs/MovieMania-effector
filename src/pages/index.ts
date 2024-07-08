import { createRoutesView } from 'atomic-router-react'

import { NotFoundPage } from '@/pages/NotFound/NotFound'

import { HomeRoute } from './Home'
import { MoviesRoute } from './Movies'

export const Pages = createRoutesView({
  routes: [HomeRoute, MoviesRoute],
  otherwise: NotFoundPage,
})
