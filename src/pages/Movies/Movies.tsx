import { Center, Pagination } from '@mantine/core'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

import { MovieFilter } from '@/widgets/MovieFilter/MovieFilter'
import { MovieList } from '@/widgets/MovieList'

import {
  $allPages,
  $currentPage,
  $loading,
  changedPaginationValue,
} from './model'

const Movies = () => {
  const [page, pages, loading] = useUnit([$currentPage, $allPages, $loading])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <>
      <MovieFilter />
      <MovieList />
      <Center mt="lg" mb="lg">
        <Pagination
          disabled={loading}
          onChange={changedPaginationValue}
          value={page}
          total={pages}
        />
      </Center>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Movies
