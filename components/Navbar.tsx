import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/LOGO_CENTER.png" alt="logo" height={70} width={100} />
        </Link>
        <Image src="/hamburger-menu.svg" alt="hamburger" height={30} width={30} className="block md:hidden" />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="https://syntechsia.com" target="_blank">
              Syntechsia Course
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="https://syntechsia.com/masterclass" target="_blank">
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
