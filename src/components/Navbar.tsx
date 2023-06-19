import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.png';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-10">
      <div className="flex items-center justify-between p-3">
        <div className="relative w-8 h-8">
          <Image src={Logo} alt="Logo" layout="fill" objectFit="contain" />
        </div>
        <ul className="flex">
          <li className="mx-5"><a className="text-white" href="/">Home</a></li>
          <li className="mx-5"><a className="text-white" href="/about">About</a></li>
          <li className="mx-5"><a className="text-white" href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
