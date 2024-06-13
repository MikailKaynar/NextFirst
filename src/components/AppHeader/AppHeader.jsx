import Link from "next/link";
import React from "react";

const AppHeader = () => {
  return (
    <header className="text-center">
      <h1 className=" bg-[#8CB9BD] text-2xl py-5 gap-y-5">MİKAİL KAYNAR</h1>
      <nav className=" flex text-center justify-center bg-[#7aa7ac] p-2">
        <ul className="flex gap-14 rounded-sm  ">
          <li className="hover:bg-[#ECB159] rounded-sm hover:transition ease-in-out delay-150">
            <Link className="px-5" href="/">MAIN</Link>
          </li>
          <li className="hover:bg-[#ECB159] rounded-sm hover:transition ease-in-out delay-150 ">
            <Link className="px-5" href="/create">Ekle</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
