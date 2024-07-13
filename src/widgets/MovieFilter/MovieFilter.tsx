import { Flex, Select } from '@mantine/core'
import { useUnit } from 'effector-react'

import { $genreType, $loading, chanedGenreType } from '@/pages/Movies/model'
import { GenreType, movieFilterGenreValues } from '@/shared/constants'

export const MovieFilter = () => {
  const [genreValue, loading] = useUnit([$genreType, $loading])

  return (
    <Flex mb="lg" mt="lg" justify="space-between" wrap="wrap">
      <Select
        disabled={loading}
        value={genreValue}
        onChange={(value) => chanedGenreType(value as GenreType)}
        placeholder="Сортировать по жанру"
        data={movieFilterGenreValues}
      />
    </Flex>
  )
}
