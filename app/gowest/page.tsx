import { ResourceList } from "../utils/types"
import ImageGrid from "../components/ImageGrid"
import goWestPhotosJson from "../utils/go-west-photos.json"

const goWestPhotos: ResourceList = goWestPhotosJson

export default function GoWest() {
  return (
    <main className="h-screen my-4 mx-auto">
      <ImageGrid collection={goWestPhotos} />
    </main>
  )
}

