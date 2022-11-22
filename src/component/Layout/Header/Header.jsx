import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Button from './Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const Links = [
    {
      name: 'Tentang',
      link: '/',
    },
    {
      name: 'Harga',
      link: '/',
    },
    {
      name: 'Template',
      link: '/',
    },
    {
      name: 'Kategori',
      link: '/',
    },
    {
      name: 'Kontak Kami',
      link: '/',
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 z-20 w-full bg-white">
        <div className="relative items-center justify-start py-4 pb-12 md:flex md:px-1 lg:flex lg:px-3">
          <div className="">
            <Navbar />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul
            className={`absolute left-0 z-[-1] mt-5 w-full bg-white pl-5 pb-12 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pl-0 md:pb-0 lg:pl-0 ${
              open ? 'top-[12] opacity-100' : '-left-[700px] '
            } lg:pl-0 lg:pb-0 lg:font-semibold `}
          >
            {Links.map((item) => (
              <li
                key={item.name}
                className="my-3 ml-5 text-base hover:rounded-md hover:bg-[#8D95FE] hover:text-white md:ml-8 md:text-lg lg:ml-8 lg:text-lg"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <Button />
          </ul>
        </div>
      </nav>
    </header>
  );
}
