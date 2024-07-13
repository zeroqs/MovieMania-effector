import { Image as MantineImage, ImageProps, Skeleton } from '@mantine/core'
import { useState } from 'react'

import NotFoundPoster from '@/../public/nopic.png'

export const ImageLazy = ({ src, ...props }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)

  const imgSrc = src ?? NotFoundPoster

  const onLoadImage = () => {
    setLoading(false)
  }

  const onLoadStart = () => {
    setLoading(true)
  }

  return (
    <>
      {isLoading && (
        <Skeleton w={props.w} height={String(props.h)} radius="md" />
      )}
      <MantineImage
        onLoadStart={onLoadStart}
        onLoad={onLoadImage}
        loading="lazy"
        radius="md"
        src={imgSrc}
        styles={{
          root: {
            visibility: isLoading ? 'hidden' : 'visible',
            maxHeight: isLoading ? '0' : '100%',
          },
        }}
        {...props}
      />
    </>
  )
}
