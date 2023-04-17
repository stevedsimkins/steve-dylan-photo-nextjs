import { ResourceList } from "./utils/types"
import ImageGrid from "./components/ImageGrid"
import homePhotosJson from "./utils/home-photos.json"

const homePhotos: ResourceList = homePhotosJson

export default function Home() {
  return (
    <main className="h-screen my-4 mx-auto">
      <ImageGrid collection={homePhotos} />
    </main>
  )
}
