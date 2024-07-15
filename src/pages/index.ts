import { createRoutesView } from 'atomic-router-react'

import { MovieRoute } from '@/pages/Movie'
import { NotFoundPage } from '@/pages/NotFound/NotFound'

import { HomeRoute } from './Home'
import { MoviesRoute } from './Movies'

export const Pages = createRoutesView({
  routes: [HomeRoute, MoviesRoute, MovieRoute],
  otherwise: NotFoundPage,
})
