'use client'

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(isOpen ? false : true)
  };

  return (
    <div class="fixed w-full top-0 bg-white sm:hidden">
      <nav class="flex justify-center items-center relative py-2">

        <h1 class="text-3xl font-ebGaramond">Steve Simkins</h1>
        <button
          type="button"
          className="text-black hover:text-gray-400 focus:outline-none focus:text-black absolute right-4 top-3"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7 z-20" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>
      {isOpen && (
      <>
        <div class="w-full h-screen bg-white z-10 flex flex-col gap-10 justify-center items-center fixed">
          <a class="text-xl font-bold hover:underline" href="#">Home</a>
          <a class="text-xl font-bold hover:underline" href="#">Home</a>
          <a class="text-xl font-bold hover:underline" href="#">Home</a>
        </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
