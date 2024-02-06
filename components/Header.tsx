import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Link
        href="/"
        className="relative w-[160px] h-[197px] sm:w-[250px] sm:h-[308px]  mt-5"
      >
        <Image
          src="/vero-logo-yellow.png"
          alt="logo"
          layout="fill"
          objectFit="fill"
        />
      </Link>
      {/* Menu */}
      <div>
        <ul className="flex items-center justify-center mt-5 lg:mt-10 text-lg sm:text-2xl lg:text-4xl font-extralight">
          <li className="mr-2 sm:mr-4 lg:mr-8 xl:mr-12 hover:text-[#cd9c5a]">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="mr-2 sm:mr-4 lg:mr-8 xl:mr-12 hover:text-[#cd9c5a]">
            <a href="https://shop.veromarganne.com">Shop</a>
          </li>
          <div>
            <li className="peer mr-2 sm:mr-4 lg:mr-8 xl:mr-12 hover:text-[#cd9c5a]">
              Collections
            </li>
            {/* menu */}
            <div
              className="hidden peer-hover:flex hover:flex
         w-48 md:w-[240px]
         flex-col bg-white drop-shadow-lg"
            >
              <Link
                className="px-5 py-3 hover:bg-gray-200 hover:text-[#cd9c5a]"
                href="/african"
              >
                African Poem
              </Link>
              <Link
                className="px-5 py-3 hover:bg-gray-200 hover:text-[#cd9c5a]"
                href="/aya"
              >
                Aya
              </Link>
            </div>
          </div>
          <li className="mr-2 sm:mr-4 lg:mr-8 xl:mr-12 hover:text-[#cd9c5a]">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
