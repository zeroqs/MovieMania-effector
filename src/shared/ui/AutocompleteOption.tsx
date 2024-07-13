import {
  ComboboxLikeRenderOptionInput,
  ComboboxStringItem,
  Flex,
  Title,
} from '@mantine/core'
import { useUnit } from 'effector-react'

import { $searchResults } from '@/features/search/model'
import { ImageLazy } from '@/shared/ui/Image'
import { MovieRating } from '@/shared/ui/MovieRating'

export const AutoCompleteOption = ({
  option,
}: ComboboxLikeRenderOptionInput<ComboboxStringItem>) => {
  const result = useUnit($searchResults)

  const movie = result.find((movie) => String(movie.id) === option.value)

  if (!movie) return null

  return (
    <Flex gap="sm" w="100%">
      <div style={{ width: 100, height: 150 }}>
        <ImageLazy radius="md" w={100} h={150} src={movie.poster.url} />
      </div>
      <Flex w="100%" justify="space-between">
        <Title w="90%" order={3}>
          {movie.name}
        </Title>

        <MovieRating
          internalRating={movie.internalRating ?? movie.rating.imdb}
        />
      </Flex>
    </Flex>
  )
}
