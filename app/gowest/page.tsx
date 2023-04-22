import { ImageProps } from "../utils/types"
import getImages from "../utils/getImages"
import ImageGrid from "../components/ImageGrid"

export default async function GoWest() {

  const images: ImageProps[] = (await getImages("gowest")).props.images

  return (
    <main className="h-screen my-4 mx-auto">
      <ImageGrid images={images} />
    </main>
  )
}


