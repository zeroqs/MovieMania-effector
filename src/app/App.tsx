import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'atomic-router-react'
import { Suspense } from 'react'

import { Pages } from '@/pages'
import { router } from '@/shared/routing/index'
import { PageLoader } from '@/shared/ui/PageLoader'

export const App = () => {
  return (
    <RouterProvider router={router}>
      <MantineProvider forceColorScheme="dark">
        <Suspense fallback={<PageLoader />}>
          <Pages />
        </Suspense>
      </MantineProvider>
    </RouterProvider>
  )
}
