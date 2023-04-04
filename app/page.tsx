import { ResourceList } from "./utils/types"
import ImageGrid from "./components/ImageGrid"
import homePhotosJson from "./utils/home-photos.json"

const homePhotos: ResourceList = homePhotosJson

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="text-4xl text-center py-2">Steve Simkins</h1>
      <ImageGrid collection={homePhotos} />
    </main>
  )
}
