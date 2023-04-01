import Image from "next/image"
import { Resource, ResourceList } from "../utils/types.ts"

interface ImageGridProps {
  collection: ResourceList;
}

export default function ImageGrid({ collection }: ImageGridProps) {
  return (
   <div className="grid">
      {collection.resources.map(photo => 
        <Image src={photo.url} alt={photo.public_id} width={1000} height={1000} key={photo.asset_id} />
      )}
    </div> 
  )
}
