import { Grid } from '@mantine/core'
import { useList, useUnit } from 'effector-react'

import { $loading, $movieList } from '@/pages/Movies/model'
import { MovieCard, MovieCardSkeleton } from '@/shared/ui/MovieCard'

export const MovieList = () => {
  const loading = useUnit($loading)

  const movies = useList($movieList, (movie) => (
    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
      <MovieCard {...movie} />
    </Grid.Col>
  ))

  if (loading) return <MovieListLoading />

  return <Grid>{movies}</Grid>
}

export const MovieListLoading = () => {
  return (
    <Grid>
      {new Array(20).fill(0).map((_, index) => (
        <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
          <MovieCardSkeleton />
        </Grid.Col>
      ))}
    </Grid>
  )
}
