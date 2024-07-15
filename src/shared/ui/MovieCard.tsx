import { Card, Group, Skeleton, Text } from '@mantine/core'
import { RouteInstance } from 'atomic-router'
import { Link } from 'atomic-router-react'

import { MoviesListResult } from '@/pages/Movies/contract'
import { routes } from '@/shared/routing'
import { ImageLazy } from '@/shared/ui/Image'
import { MovieGenres } from '@/shared/ui/MovieGenres'
import { MovieRating } from '@/shared/ui/MovieRating'

export const MovieCard = ({ ...props }: MoviesListResult) => {
  const description =
    props.shortDescription ||
    props.description?.slice(0, 120) + '...' ||
    'Описание отсутствует'
  return (
    <Card
      shadow="sm"
      padding="md"
      component={Link}
      to={routes.movie as RouteInstance<any>}
      params={{ id: props.id }}
    >
      <Card.Section>
        <ImageLazy src={props.backdrop.url} h={180} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs" wrap="nowrap">
        <Text fw={500}>{props.name}</Text>
        <MovieRating
          internalRating={props.internalRating || props.rating.imdb}
        />
      </Group>

      <Text mt="xs" c="dimmed" size="sm">
        {description}
      </Text>

      <Group mt="xs" mb="xs" gap={5}>
        <MovieGenres withPlus genres={props.genres} />
      </Group>
    </Card>
  )
}

export const MovieCardSkeleton = () => {
  return (
    <Card
      shadow="sm"
      padding="md"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Skeleton h={180} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Skeleton w={200} h={30} />
        <Skeleton w={50} h={30} />
      </Group>

      <Skeleton mt="xs" mb="xs" h={50} />

      <Group mt="xs" mb="xs" gap={5}>
        <Skeleton w={80} h={20} />
        <Skeleton w={80} h={20} />
        <Skeleton w={80} h={20} />
      </Group>
    </Card>
  )
}
