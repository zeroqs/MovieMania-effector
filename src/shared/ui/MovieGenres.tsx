import { Pill } from '@mantine/core'

interface MovieGenresProps {
  genres: { name: string }[]
  withPlus?: boolean
  bgPill?: string
  color?: string
}

export const MovieGenres = ({
  genres,
  withPlus = false,
  bgPill = '#242424',
  color = '#c9c9c9',
}: MovieGenresProps) => {
  const styles = {
    root: {
      backgroundColor: bgPill,
      color,
    },
  }

  if (withPlus) {
    return (
      <>
        {genres.slice(0, 3).map((genre) => (
          <Pill key={genre.name} styles={styles}>
            {genre.name}
          </Pill>
        ))}

        {genres.length > 3 && <Pill styles={styles}>+{genres.length - 3}</Pill>}
      </>
    )
  }

  return (
    <>
      {genres.map((genre) => (
        <Pill key={genre.name} styles={styles}>
          {genre.name}
        </Pill>
      ))}
    </>
  )
}
