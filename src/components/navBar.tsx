import Image from "next/image";
import React from "react";
import logoWhite from "../../public/image/logoWhite.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 container mx-auto z-50">
      <div className="logo w-16 h-auto">
        <Image src={logoWhite} alt="NTH Logo" />
      </div>

      <ul className="flex items-center flex-1 justify-end gap-6">
        <Link href={"/"}>
          <li>Home</li>
        </Link>

        <Link href={"/menu"}>
          <li>Menu</li>
        </Link>

        <Link href={"/news"}>
          <li>News</li>
        </Link>

        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
