import Image from 'next/image';
import React from 'react';
import Icon from '../../../public/img/Hero/kotak.svg';
import Icon2 from '../../../public/img/Hero/icon.svg';

const Hero = () => {
  return (
    <section className="overflow-x-hidden md:mt-28">
      <div className="container mx-auto mt-40 px-5 sm:px-20 md:flex">
        <div className="mr-10 md:w-1/2">
          <h1 className="text-center text-2xl font-semibold md:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
            Membantumu Membuat Website
          </h1>
          <article className="my-5">
            <p className="text-center sm:text-lg md:text-justify md:text-xl lg:text-2xl xl:text-3xl">
              Memudahkan dalam membuat website secara gratis dan membantu
              meluaskan jaringan anda.
            </p>
          </article>
          <button className="mx-auto flex rounded-md bg-[#8D95FE] px-3 py-2 font-semibold text-white lg:mx-0 lg:mt-14">
            Daftar Gratis
          </button>
        </div>
        <div className="mt-5 md:w-1/2 ">
          <div>
            <Image src={Icon} alt="Picture" />
          </div>
          <div className="z-10 -mt-60 sm:-mt-80">
            <Image src={Icon2} alt="Picture" width={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
