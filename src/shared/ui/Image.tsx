import { Image as MantineImage, ImageProps, Skeleton } from '@mantine/core'
import { useEffect, useState } from 'react'

export const ImageLazy = ({ src, ...props }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)

  const onLoadImage = () => {
    setLoading(false)
  }

  const onLoadStart = () => {
    setLoading(true)
  }

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.addEventListener('loadeddata', () => {
      setLoading(false)
    })
  }, [src])

  return (
    <>
      {isLoading && <Skeleton w={100} height={150} radius="md" />}
      <MantineImage
        onLoadStart={onLoadStart}
        onLoad={onLoadImage}
        loading="lazy"
        radius="md"
        src={src}
        {...props}
      />
    </>
  )
}
