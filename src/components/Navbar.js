import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <main className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold mr-4 sm:text-4xl">Cloud</h2>
          <ul className="hidden md:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign in
          </button>
          <button className="px-8 py-2">Sign up</button>
        </div>
        <div className="md:hidden mr-4 " onClick={navHandler}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </main>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className=" bg-transparent text-indigo-600 px-8 py-2 mb-4">
            Sign in
          </button>
          <button className="px-8 py-2">Sign up</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
