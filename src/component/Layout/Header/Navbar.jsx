import Image from 'next/image';
import React from 'react';
import Gambar from '../../../../public/img/Navbar/bg.svg';
import Gambar2 from '../../../../public/img/Navbar/k.svg';

const Navbar = () => {
  return (
    <div className="">
      <div className="ml-5 cursor-pointer md:ml-0 lg:ml-5">
        <Image src={Gambar} alt="Image" className="" />
        <Image
          src={Gambar2}
          alt="Image"
          className="z-10 -mt-7 ml-4 md:mx-auto md:-mt-7"
        />
      </div>
    </div>
  );
};

export default Navbar;
