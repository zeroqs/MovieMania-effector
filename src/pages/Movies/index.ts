import { lazy } from 'react'

import { BaseLayout } from '@/shared/ui/BaseLayout'

import { currentRoute } from './model'

export const MoviesPage = lazy(() => import('./Movies'))

export const MoviesRoute = {
  view: MoviesPage,
  route: currentRoute,
  layout: BaseLayout,
}
