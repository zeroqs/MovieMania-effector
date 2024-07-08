import { lazy } from 'react'

import { BaseLayout } from '@/shared/ui/BaseLayout'

import { currentRoute } from './model'

export const HomePage = lazy(() => import('./Home'))

export const HomeRoute = {
  view: HomePage,
  route: currentRoute,
  layout: BaseLayout,
}
