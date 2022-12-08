import Link from 'next/link';
import Navbar from '../Header/Navbar';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import Location from '../../../../public/img/Footer/location.svg';
import Image from 'next/image';

const Navlink = () => {
  const Links1 = {
    firstname: 'Perusahaan',
    menu: [
      {
        name: 'Tentang',
        link: '/',
      },
      {
        name: 'Karir',
        link: '/',
      },
      {
        name: 'Kontak Kami',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/',
      },
    ],
  };
  const Links2 = [
    {
      firstname: 'Panduan',
    },
    {
      name: 'Pusat Bantuan',
      link: '/',
    },
    {
      name: 'Syarat dan Ketentuan',
      link: '/',
    },
    {
      name: 'Kebijakan Privasi',
      link: '/',
    },
  ];
  const Links3 = [
    {
      firstname: 'Layanan',
    },
    {
      name: 'Fitur',
      link: '/',
    },
    {
      name: 'Langganan',
      link: '/',
    },
    {
      name: 'Konekios Pro',
      link: '/',
    },
    {
      name: 'Desain Website',
      link: '/',
    },
  ];

  return (
    <section className="mt-24">
      <div className="md:flex">
        <div className=" md:w-1/4">
          <div>
            <div className="inline-flex">
              <Navbar />
            </div>
            <div className="py-5 pl-3">
              <p className="font-medium">Connecting The World</p>
              <span className="inline-block pt-5">
                <FaInstagram />
              </span>
              <span className="inline-block pt-5 pl-3">
                <FaTwitter />
              </span>
              <div className="mt-5 flex">
                <Image
                  src={Location}
                  className="mr-2"
                  width="auto"
                  alt="Picture"
                />
                <p className="font-medium">White House Valley</p>
              </div>
            </div>
          </div>
        </div>
        <ul className=" md:w-1/4">
          <h5 className="font-bold">{Links1.firstname}</h5>
          {Links1.menu.map((item, idx) => {
            return (
              <li key={idx} className="w-full py-3 pl-3 ">
                <Link
                  href={`${item.link}`}
                  className="w-full font-medium hover:bg-[#8D95FE] hover:px-2 hover:py-2 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="md:w-1/4">
          {Links2.map((item, idx) => (
            <li key={idx} className="py-3 pl-3 ">
              <h5 className="font-bold">{item.firstname}</h5>
              <Link
                href={`${item.link}`}
                className="w-full font-medium hover:bg-[#8D95FE] hover:px-2 hover:py-2 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className=" md:w-1/4">
          {Links3.map((item, idx) => (
            <li key={idx} className="py-3 pl-3">
              <h5 className="font-bold">{item.firstname}</h5>
              <Link
                href={`${item.link}`}
                className="font-medium hover:bg-[#8D95FE] hover:px-2 hover:py-2 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <article className="mt-10 mb-5">
        <p className="text-center font-semibold">
          &copy; 2022. Konekios. Copyright Reserved.
        </p>
      </article>
    </section>
  );
};

export default Navlink;
