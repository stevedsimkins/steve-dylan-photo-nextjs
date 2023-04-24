import type { ImageProps } from './types'

const cache = new Map<ImageProps, string>()

export default async function getBase64ImageUrl(
  image: ImageProps,
  folder: string
): Promise<string> {
  let url = cache.get(image)
  if (url) {
    return url
  }
  try {
    const response = await fetch(
      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
    )
    const buffer = await response.arrayBuffer()

    url = `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`
    cache.set(image, url)
    return url
  } catch(error) {
    console.log(error)
  }
}
