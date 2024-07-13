import { cache, createJsonQuery, declareParams } from '@farfetched/core'
import { runtypeContract } from '@farfetched/runtypes'
import { combine, createEvent, createStore, sample } from 'effector'
import {
  Array as RunTypeArray,
  Number,
  Record as RunTypeRecord,
} from 'runtypes'

import { moviesContract } from '@/pages/Home/contract'
import { baseUrl } from '@/shared/api/config'
import { GenreType } from '@/shared/constants'
import { routes } from '@/shared/routing'

export const currentRoute = routes.home

export const changedPaginationValue = createEvent<number>()
export const chanedGenreType = createEvent<GenreType>()

export const $currentPage = createStore(1)
$currentPage.on(changedPaginationValue, (_, page) => page)

export const $genreType = createStore<GenreType>('')
$genreType.on(chanedGenreType, (_, genreType) => genreType)

const $perPage = createStore(20)

const movieListQuery = createJsonQuery({
  params: declareParams<{ genre?: GenreType }>(),
  name: 'movieList',

  request: {
    method: 'GET',
    url: baseUrl('/movie'),
    headers: {
      'X-API-KEY': import.meta.env.VITE_API_KEY,
    },
    query: {
      source: combine({ limit: $perPage, page: $currentPage }),
      fn: ({ genre }, { limit, page }) => {
        const params: Record<string, string | number | string[]> = {
          page,
          limit,
          selectFields: '',
          notNullFields: ['name', 'backdrop.url', 'genres.name'],
          sortType: '-1',
          sortField: 'votes.imdb',
        }

        params['rating.imdb'] = '7-10'

        if (genre) params['genres.name'] = genre.toLowerCase()

        return params
      },
    },
  },
  response: {
    contract: runtypeContract(
      RunTypeRecord({
        docs: RunTypeArray(moviesContract),
        total: Number,
        limit: Number,
        page: Number,
        pages: Number,
      }),
    ),
  },
})

export const $movieList = movieListQuery.$data.map(
  (response) => response?.docs ?? [],
)

export const $allPages = movieListQuery.$data.map(
  (response) => response?.pages ?? 2,
)

export const $loading = movieListQuery.$pending

cache(movieListQuery)

sample({
  clock: currentRoute.opened,
  filter: currentRoute.$isOpened.map((isOpened) => isOpened),
  fn: () => ({ genre: $genreType.getState() }),
  target: movieListQuery.start,
})

sample({
  clock: changedPaginationValue,
  filter: currentRoute.$isOpened.map((isOpened) => isOpened),
  fn: () => ({ genre: $genreType.getState() }),
  target: movieListQuery.start,
})

sample({
  clock: chanedGenreType,
  filter: currentRoute.$isOpened.map((isOpened) => isOpened),
  fn: (genre) => ({ genre }),
  target: movieListQuery.start,
})
