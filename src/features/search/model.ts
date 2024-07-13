import { createJsonQuery, declareParams } from '@farfetched/core'
import { runtypeContract } from '@farfetched/runtypes'
import { combine, createEvent, createStore, sample } from 'effector'
import { debounce, or } from 'patronum'
import { Array, Record } from 'runtypes'

import { searchContract, SearchResult } from '@/features/search/contract'
import { baseUrl } from '@/shared/api/config'
import { routes } from '@/shared/routing'

export const searchChanged = createEvent<string>()
export const clearResults = createEvent()

export const $search = createStore('')
$search.on(searchChanged, (_, search) => search)

const searchQuery = createJsonQuery({
  params: declareParams<{ query: string }>(),

  request: {
    method: 'GET',
    url: baseUrl('/movie/search'),
    headers: {
      'X-API-KEY': import.meta.env.VITE_API_KEY,
    },
    query: {
      source: combine({ query: 'test' }),
      fn: ({ query }) => ({ query }),
    },
  },
  response: {
    contract: runtypeContract(Record({ docs: Array(searchContract) })),
  },
})

export const $searchResults = createStore<SearchResult[]>([])
  .on(searchQuery.$data, (_, response) => response?.docs ?? [])
  .on(clearResults, () => [])

export const $options = $searchResults.map((movies) =>
  movies.map((movie) => ({
    value: String(movie.id),
    label: movie.name,
  })),
)

export const $loading = searchQuery.$pending

sample({
  clock: debounce({
    source: searchChanged,
    timeout: 400,
  }),
  filter: or(
    $search.map((search) => search.length > 0),
    routes.home.$isOpened.map((isOpened) => !isOpened),
  ),
  fn: (search) => ({ query: search }),
  target: searchQuery.start,
})

sample({
  source: $search,
  filter: (search) => search.length === 0,
  target: clearResults,
})
