'use client';

import Image from "next/image"
import Modal from "./Modal"
import { Suspense, useState } from "react"
import LoadingSpinner from "./LoadingSpinner";

export default function ImageGrid({ images }) {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal(index: number) {
    setOpenModalIndex(index);
  }

  function closeModal() {
    setOpenModalIndex(null);
  }

  return (
      <div className="mx-auto w-full gap-2 px-2 my-8 sm:my-0 columns-1 sm:columns-1 md:columns-2 lg:columns-3">

        {images.map(({ id, public_id, format, blurDataUrl }, index) => (
          <div className="overflow-hidden my-2 first:mt-0" key={id}>
            <Image
              alt="Steve Dylan photo"
              className="w-full sm:hover:opacity-30 sm:hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
              width={720}
              height={480}
              onClick={()=> openModal(index)}
            />
            {openModalIndex === index && (
              <Modal publicId={images[openModalIndex].public_id} blurDataUrl={images[openModalIndex].blurDataUrl} format={images[openModalIndex].format} closeModal={closeModal} />
            )}
          </div>
        ))}
      </div>
  )
}
