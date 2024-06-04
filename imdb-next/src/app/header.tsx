import React from "react";
import MenuItems from "./menuItems";
import { CiHome } from "react-icons/ci";
import { IoInformationCircleSharp } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-between pt-3 px-10 mx-w-6xl mx-auto">
      <Link href="/">
        <div className="flex items-center gap-1 text-base sm:text-lg">
          <span className="bg-amber-500 font-bold p-1 rounded-lg">IMDb</span>
          <span className="font-bold">Movies</span>
        </div>
      </Link>
      <div className="flex flex-row gap-4 items-center text-sm sm:text-lg ml-2">
        <MenuItems Title={"HOME"} Address="/" Icon={CiHome} />
        <MenuItems
          Title={"ABOUT"}
          Address="/about"
          Icon={IoInformationCircleSharp}
        />
      </div>
    </div>
  );
};

export default Header;
