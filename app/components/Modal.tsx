export default function Modal({ photo, closeModal }) {

  function handleClickOutside() {
    closeModal();
  };

  function stopPropagation(e) {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
      onClick={handleClickOutside}
    >
      <div
        className="relative bg-white rounded shadow-lg transition-transform duration-300 ease-in-out transform scale-95"
        onClick={stopPropagation}
      >
        <img src={photo} alt="Modal content" className="w-full" />
        <button
          className="absolute top-0 right-0 p-2 m-2 text-white text-2xl rounded-full focus:outline-none"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  )
};
