import Image from "next/image";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ModalProps {
  publicId: string;
  format: string;
  blurDataUrl: string;
  closeModal: () => void;
}
export default function Modal({ publicId, format, blurDataUrl,  closeModal }: ModalProps) {

  function handleClickOutside() {
    closeModal();
  };

  function stopPropagation(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  };

  return (
    <div
      className="hidden fixed inset-0 z-40 sm:flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out"
      onClick={handleClickOutside}
    >
      <Suspense fallback={<LoadingSpinner size={56} color={"#EEEEEE"} />}>
        <div
          className="relative rounded shadow-lg transition-transform duration-700 ease-in-out transform scale-95 xl:w-1/2 md:w-2/3 w-11/12"
          onClick={stopPropagation}
        >
          <Image 
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${publicId}.${format}`} 
            width={800} 
            height={800} 
            alt="Modal content" 
            placeholder="blur" 
            blurDataURL={blurDataUrl}
            className="w-full" />
          <button
            className="absolute top-0 right-0 p-2 m-2 text-white text-2xl rounded-full focus:outline-none"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      </Suspense>
    </div>
  )
};
