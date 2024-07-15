import { Carousel } from '@mantine/carousel'
import {
  Card,
  Flex,
  NumberFormatter,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useUnit } from 'effector-react'

import { ErrorMessage } from '@/shared/ui/ErrorMessage'
import { ImageLazy } from '@/shared/ui/Image'
import { MovieGenres } from '@/shared/ui/MovieGenres'

import { $error, $loading, $movie } from './model'

const Movie = () => {
  const [movie, error, loading] = useUnit([$movie, $error, $loading])

  if (loading) return <>loading</>

  if (!movie) return <ErrorMessage message="Movie not found" />

  if (error) return <ErrorMessage message={error.explanation} />

  return (
    <>
      <Flex gap={50}>
        <ImageLazy radius="md" w={333} h={500} src={movie.poster.url} />

        <Stack style={{ flex: '0 0 70%' }}>
          <Flex direction="column" gap={5}>
            <Title order={3}>Название фильма:</Title>
            <Text size="lg" fw={500}>
              {movie.name}
            </Text>
          </Flex>

          <Flex direction="column" gap={5}>
            <Title order={3}>Описание:</Title>
            <Text size="sm">{movie.description}</Text>
          </Flex>

          <Flex direction="column" gap={5}>
            <Title order={3}>Бюджет:</Title>
            <NumberFormatter
              prefix={`${movie.budget.currency} `}
              value={movie.budget.value}
              thousandSeparator
            />
          </Flex>

          {movie.fees && (
            <Flex direction="column" gap={5}>
              <Title order={3}>Сборы:</Title>
              {movie.fees.world && (
                <Flex gap={10}>
                  <Text size="md">В мире: </Text>
                  <NumberFormatter
                    prefix={`${movie.fees.world.currency} `}
                    value={movie.fees.world.value}
                    thousandSeparator
                  />
                </Flex>
              )}

              {movie.fees.usa && (
                <Flex gap={10}>
                  <Text size="md">В США: </Text>
                  <NumberFormatter
                    prefix={`${movie.fees.usa.currency} `}
                    value={movie.fees.usa.value}
                    thousandSeparator
                  />
                </Flex>
              )}

              {movie.fees.russia && (
                <Flex gap={10}>
                  <Text size="md">В России: </Text>
                  <NumberFormatter
                    prefix={`${movie.fees.russia.currency} `}
                    value={movie.fees.russia.value}
                    thousandSeparator
                  />
                </Flex>
              )}
            </Flex>
          )}

          <Flex direction="column" gap={5}>
            <Title order={3}>Жанры:</Title>
            <Flex gap={5} wrap="wrap">
              <MovieGenres
                bgPill="#2D4B81"
                color="#fff"
                genres={movie.genres}
              />
            </Flex>
          </Flex>
        </Stack>
      </Flex>

      <Paper mt={20}>
        <Title order={3} mb={15}>
          Актеры:
        </Title>
        <Carousel
          align="start"
          height={350}
          controlsOffset="md"
          controlSize={25}
          slideSize={{ base: '20%', sm: '20%' }}
          slideGap={{ base: 'xl', sm: 'xl' }}
        >
          {movie.persons.map((person, index) => (
            <Carousel.Slide key={index}>
              <ImageLazy src={person.photo} h={300} />
              <Text mt={5}>{person.name || 'Неизвестно'}</Text>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Paper>
    </>
  )
}

export default Movie
