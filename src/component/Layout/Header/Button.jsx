import Link from 'next/link';
import React from 'react';

const Button = () => {
  return (
    <div className="lg:ml-52 xl:ml-64">
      <div className="flex">
        <button className="px-5 font-semibold">Log in</button>
        <div className="mt-2 flex">
          <Link
            href={'/'}
            className="rounded-md bg-[#8D95FE] px-3 py-2 text-base font-semibold text-slate-50 hover:opacity-50"
          >
            Buat Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Button;
