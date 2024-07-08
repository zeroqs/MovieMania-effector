import { lazy } from 'react'

import { BaseLayout } from '@/shared/ui/BaseLayout'

import { currentRoute } from './model'

export const MoviePage = lazy(() => import('./Movies'))

export const MoviesRoute = {
  view: MoviePage,
  route: currentRoute,
  layout: BaseLayout,
}
