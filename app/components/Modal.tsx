import Image from "next/image";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ModalProps {
  photo: string;
  closeModal: () => void;
}
export default function Modal({ photo, closeModal }: ModalProps) {

  function handleClickOutside() {
    closeModal();
  };

  function stopPropagation(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out"
      onClick={handleClickOutside}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <div
          className="relative bg-white rounded shadow-lg transition-transform duration-700 ease-in-out transform scale-95"
          onClick={stopPropagation}
        >
          <Image src={photo} width={1000} height={1000} alt="Modal content" className="w-full" />
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
