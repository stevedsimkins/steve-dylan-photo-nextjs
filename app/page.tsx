import { ResourceList } from "./utils/types"
import ImageGrid from "./components/ImageGrid"
import homePhotosJson from "./utils/home-photos.json"
import Navbar from "./components/Navbar"

const homePhotos: ResourceList = homePhotosJson

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <ImageGrid collection={homePhotos} />
    </main>
  )
}
