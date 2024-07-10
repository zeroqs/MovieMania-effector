import { Badge } from '@mantine/core'

interface MovieRatingProps {
  internalRating: number
}

export const MovieRating = ({ internalRating }: MovieRatingProps) => {
  let content

  switch (true) {
    case internalRating > 6:
      content = (
        <Badge color="green" radius="sm">
          {Math.floor(internalRating)}
        </Badge>
      )
      break
    case internalRating < 7 && internalRating > 5:
      content = (
        <Badge color="gray" radius="sm">
          {Math.floor(internalRating)}
        </Badge>
      )
      break
    default:
      content = (
        <Badge color="red" radius="sm">
          {Math.floor(internalRating)}
        </Badge>
      )
      break
  }

  return content
}
