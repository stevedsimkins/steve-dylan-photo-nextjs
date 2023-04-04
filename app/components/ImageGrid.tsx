'use client';

import Image from "next/image"
import Modal from "./Modal"
import { ResourceList } from "../utils/types"
import { useState } from "react"

interface ImageGridProps {
  collection: ResourceList;
}

export default function ImageGrid({ collection }: ImageGridProps) {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal(index: number) {
    setOpenModalIndex(index);
  }

  function closeModal() {
    setOpenModalIndex(null);
  }

  return (
    <div className="grid gap-4 mx-2">
      {collection.resources.map((photo, index) => (
        <div key={photo.asset_id}>
          <Image
            src={photo.url}
            alt={photo.public_id}
            width={400}
            height={400}
            onClick={() => openModal(index)}
          />

          {openModalIndex === index && (
            <Modal photo={photo.url} closeModal={closeModal} />
          )}
        </div>
      ))}
    </div>)
}
