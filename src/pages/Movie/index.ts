import { lazy } from 'react'

import { BaseLayout } from '@/shared/ui/BaseLayout'

import { currentRoute } from './model'

const MoviePage = lazy(() => import('./Movie'))

export const MovieRoute = {
  view: MoviePage,
  route: currentRoute,
  layout: BaseLayout,
}
