import { startChain } from '@farfetched/atomic-router'
import { createJsonQuery, declareParams } from '@farfetched/core'
import { runtypeContract } from '@farfetched/runtypes'
import { chainRoute } from 'atomic-router'

import { movieContract } from '@/pages/Movie/contract'
import { baseUrl } from '@/shared/api/config'
import { routes } from '@/shared/routing'

export const currentRoute = routes.movie

const movieQuery = createJsonQuery({
  params: declareParams<{ id: string }>(),
  name: 'movie',

  request: {
    method: 'GET',
    url: ({ id }) => baseUrl(`/movie/${id}`),
    headers: {
      'X-API-KEY': import.meta.env.VITE_API_KEY,
    },
  },
  response: {
    contract: runtypeContract(movieContract),
  },
})

export const $movie = movieQuery.$data.map((response) => response ?? null)

export const $loading = movieQuery.$pending

export const $error = movieQuery.$error

chainRoute({
  route: currentRoute,
  ...startChain(movieQuery),
})
