import { Badge, Title } from '@mantine/core'

interface MovieRatingProps {
  internalRating: number
}

export const MovieRating = ({ internalRating }: MovieRatingProps) => {
  let content

  switch (true) {
    case internalRating > 6:
      content = (
        <Badge color="green" radius="sm">
          <Title order={6}>{Math.floor(internalRating)}</Title>
        </Badge>
      )
      break
    case internalRating < 7 && internalRating > 5:
      content = (
        <Badge color="gray" radius="sm">
          <Title order={6}>{Math.floor(internalRating)}</Title>
        </Badge>
      )
      break
    default:
      content = (
        <Badge color="red" radius="sm">
          <Title order={6}>{Math.floor(internalRating)}</Title>
        </Badge>
      )
      break
  }

  return content
}
