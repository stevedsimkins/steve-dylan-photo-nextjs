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
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out"
      onClick={handleClickOutside}
    >
      <Suspense fallback={<LoadingSpinner size={56} color={"#EEEEEE"} />}>
        <div
          className="relative rounded shadow-lg transition-transform duration-700 ease-in-out transform scale-95 xl:w-1/2 md:w-2/3 w-11/12"
          onClick={stopPropagation}
        >
          <Image 
            src={photo} 
            width={800} 
            height={800} 
            alt="Modal content" 
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mMsKijoYyACMI4qpK9CAF71Esu6YYjoAAAAAElFTkSuQmCC"
            placeholder="blur"
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
