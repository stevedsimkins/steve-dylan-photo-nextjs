// 'use client';
// 
// import Image from "next/image"
// import Modal from "./Modal"
// import { Suspense, useState } from "react"
// import LoadingSpinner from "./LoadingSpinner";
// 
// export default function ImageGrid({ collection }: ImageGridProps) {
//   const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false)
// 
//   function openModal(index: number) {
//     setOpenModalIndex(index);
//   }
// 
//   function closeModal() {
//     setOpenModalIndex(null);
//   }
// 
//   return (
//     <div className="mx-auto w-full gap-2 px-2 columns-1 sm:columns-1 md:columns-2 lg:columns-3">
//       {collection.resources.map((photo, index) => (
//         <div className="overflow-hidden my-2 first:mt-0" key={photo.asset_id}>
//           <Suspense fallback={<LoadingSpinner />}>
//             <Image
//               priority={true}
//               src={photo.url}
//               alt={photo.public_id}
//               width={400}
//               height={400}
//               onClick={() => openModal(index)}
//               className="w-full hover:opacity-30 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
//             />
//           </Suspense>
// 
//           {openModalIndex === index && (
//             <Modal photo={photo.url} closeModal={closeModal} />
//           )}
//         </div>
//       ))}
//     </div>)
// }
