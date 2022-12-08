import Image from 'next/image';
import React from 'react';
import Pict from '../../../public/img/Kolaborasi/hand.svg';
import Gambar from '../../../public/img/Kolaborasi/circle.svg';
import Line from '../../../public/img/Kolaborasi/Line1.svg';
import Gambar2 from '../../../public/img/Navbar/k.svg';
import Foto1 from '../../../public/img/Kolaborasi/Image/1.svg';
import Foto2 from '../../../public/img/Kolaborasi/Image/2.svg';
import Foto3 from '../../../public/img/Kolaborasi/Image/3.svg';
import Foto4 from '../../../public/img/Kolaborasi/Image/4.svg';
import Navbar from '../Layout/Header/Navbar';

const Kolaborasi = () => {
  return (
    <section className="mt-60 overflow-x-clip bg-[#C6CAFF] pb-52">
      <div className="translate-x-1/2">
        <Image
          src={Pict}
          alt="Picture"
          className="absolute z-10 -mt-24 -translate-x-1/2"
        />
      </div>
      <h1 className="pt-40 text-center text-5xl font-semibold lg:flex-none lg:text-6xl">
        <span className=" text-[#8D95FE]">Kolab</span>orasi
      </h1>
      <div className="lg:flex">
        <div className="mt-10 flex-wrap px-3 lg:w-1/3">
          <div className="mx-auto items-end justify-end lg:flex">
            <div className="inline-flex">
              <h1 className="text-2xl font-semibold md:mr-3 ">Konekios</h1>
              <Navbar />
            </div>
          </div>
          <p className="mt-10 w-96 text-lg">
            Platform pembuat website gratis untuk UMKM, Portfolio, CV Personal
          </p>
        </div>
        <div className=" mx-auto mt-10 flex-wrap px-3 lg:mt-60 lg:w-1/3">
          <div className="absolute -mt-44 -ml-5 hidden lg:flex">
            <Image src={Line} alt="picture" />
          </div>
          <article className="">
            <p className="text-justify text-base">
              Konekios K K Konekita Platform pembuat website gratis untuk UMKM,
              Portfolio, CV Personal Kolaborasi ini akan berlangsung antara
              pengguna konekios sebagai anggota dari ekosistem digital dari
              Koneksi Group. Kolaborasi akan mewujudkan suatu sistem yang saling
              mendukung antar pengguna. Platform kolaborasi pekarya pertama di
              Indonesia
            </p>
          </article>
        </div>
        <div className="mt-10 flex-wrap px-3 lg:w-1/3">
          <div className="float-left mr-5 object-none object-left">
            <Image src={Gambar} alt="Image" width={40} />
            <Image src={Gambar2} alt="Image" className="z-10 -mt-7 ml-4" />
          </div>
          <div className="mx-auto lg:ml-10">
            <div className="inline-flex">
              <h1 className="text-2xl font-semibold md:mr-5">Konekita</h1>
            </div>
            <p className="mt-7 text-start text-lg">
              Platform kolaborasi pekarya pertama di Indonesia
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 hidden md:flex">
        <div className="md:w-1/2">
          <div className="-ml-10">
            <Image src={Foto1} alt="Picture" width={200} />
          </div>
          <div className="-mt-16 ml-20">
            <Image src={Foto2} alt="Picture" width={200} />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex justify-end">
            <Image src={Foto4} alt="Picture" width={200} />
          </div>
          <div className="-mt-16 flex justify-end pr-20">
            <Image src={Foto3} alt="Picture" width={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kolaborasi;
