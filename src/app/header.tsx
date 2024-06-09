import React from "react";
import MenuItems from "./NavMenuItems";
import { CiHome } from "react-icons/ci";
import { IoInformationCircleSharp } from "react-icons/io5";
import Link from "next/link";
import DarkModeswitch from "./DarkModeswitch";
import { Box, TextField } from "@radix-ui/themes";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex dark:bg-[#101010] flex-row items-center justify-between py-5 px-10 mx-auto">
      <Link href="/">
        <div className="flex items-center gap-1 text-base sm:text-lg">
          <span className="bg-amber-500 font-bold p-1 rounded-lg">IMDb</span>
          <span className="font-bold">Movies</span>
        </div>
      </Link>

      <Box width="50%" style={{ margin: "0 20px" }}>
        <TextField.Root placeholder="Search">
          <TextField.Slot>
            <FaSearch size={20} />
          </TextField.Slot>
        </TextField.Root>
      </Box>

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
