import { Pill } from '@mantine/core'

interface MovieGenresProps {
  genres: { name: string }[]
}

export const MovieGenres = ({ genres }: MovieGenresProps) => {
  return (
    <>
      {genres.slice(0, 3).map((genre) => (
        <Pill key={genre.name} color="gray">
          {genre.name}
        </Pill>
      ))}

      {genres.length > 3 && <Pill color="gray">+{genres.length - 3}</Pill>}
    </>
  )
}
