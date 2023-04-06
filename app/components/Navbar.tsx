'use client'

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen ? false : true)
  };

  return (
    <nav className="fixed w-full top-0 bg-white sm:hidden">
      <div className="flex justify-center items-center relative py-2">

        <Link href="/" className="text-3xl font-ebGaramond">Steve Simkins</Link>
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
      </div>
      {isOpen && (
      <>
        <div className="w-full h-screen bg-white z-10 flex flex-col gap-20 justify-center items-center fixed text-2xl">
          <Link onClick={toggleMenu} href="/">Home</Link>
          <Link onClick={toggleMenu} href="/gowest">Go West</Link>
          <Link onClick={toggleMenu} href="/about">About</Link>
        </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
