import React from "react";
import MenuItems from "./menuItems";
import { CiHome } from "react-icons/ci";
import { IoInformationCircleSharp } from "react-icons/io5";
import Link from "next/link";
import DarkModeswitch from "./DarkModeswitch";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between py-5 max-w-6xl px-4 mx-auto">
      <Link href="/">
        <div className="flex items-center gap-1 text-base sm:text-lg">
          <span className="bg-amber-500 font-bold p-1 rounded-lg">IMDb</span>
          <span className="font-bold">Movies</span>
        </div>
      </Link>
      <div className="flex flex-row gap-2 md:gap-5 items-center text-sm sm:text-base ml-2">
        <DarkModeswitch />
        <MenuItems Title={"Home"} Address="/" Icon={CiHome} />
        <MenuItems
          Title={"About"}
          Address="/about"
          Icon={IoInformationCircleSharp}
        />
      </div>
    </div>
  );
};

export default Header;
