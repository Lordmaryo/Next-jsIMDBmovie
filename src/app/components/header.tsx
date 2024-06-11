"use client";
import React, { useState } from "react";
import MenuItems from "./NavMenuItems";
import { CiHome } from "react-icons/ci";
import { IoInformationCircleSharp } from "react-icons/io5";
import Link from "next/link";
import DarkModeswitch from "./DarkModeswitch";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

interface PreventDefaultProps {
  preventDefault: () => void;
}

const Header = () => {
  const [input, setInput] = useState("");
  const [toggleSearchButton, setToggleSearchButton] = useState(false);
  const router = useRouter();

  function handleSubmit(e: PreventDefaultProps) {
    e.preventDefault();
    setInput("");
    router.push(`/Search/${input}`);
  }

  return (
    <div className="dark:bg-[#101010] bg-[#d0c8c8]">
      <div className="flex dark:bg-[#101010] flex-row items-center justify-between py-5 max-w-6xl px-4 mx-auto">
        {!toggleSearchButton && (
          <Link href="/">
            <div className="flex items-center gap-1 text-base sm:text-lg">
              <span className="bg-amber-500 font-bold p-1 rounded-lg">
                IMDb
              </span>
              <span className="font-bold">Movies</span>
            </div>
          </Link>
        )}

        <form
          onSubmit={handleSubmit}
          className={
            toggleSearchButton
              ? "flex items-center mx-3 border border-[#413f3f] rounded-md p-2 w-[400px]"
              : "hidden sm:flex items-center mx-3 border border-[#413f3f] rounded-md p-2"
          }
        >
          {!toggleSearchButton && (
            <span className="h-5 w-5 text-black dark:text-gray-500">
              <CiSearch size={20} />
            </span>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className={
              toggleSearchButton
                ? "w-full outline-none bg-transparent z-10 dark:placeholder:text-gray-50 placeholder:text-zinc-800"
                : "sm:w-[250px] md:w-[300px] lg:w-[500px] pl-2 outline-none bg-transparent dark:placeholder:text-gray-50 placeholder:text-zinc-800"
            }
            placeholder="Search"
          />
        </form>

        <div className="flex flex-row gap-2 md:gap-5 items-center text-sm sm:text-base ml-2">
          <DarkModeswitch />
          <button
            onClick={() => setToggleSearchButton(!toggleSearchButton)}
            className="hover:text-amber-500 inline sm:hidden text-gray-400"
          >
            {toggleSearchButton ? (
              <span className="font-bold text-4xl">&times;</span>
            ) : (
              <CiSearch size={30} />
            )}
          </button>
          {!toggleSearchButton && (
            <MenuItems Title={"Home"} Address="/" Icon={CiHome} />
          )}
          {!toggleSearchButton && (
            <MenuItems
              Title={"About"}
              Address="/about"
              Icon={IoInformationCircleSharp}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
