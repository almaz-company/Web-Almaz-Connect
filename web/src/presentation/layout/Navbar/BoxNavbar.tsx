import React from "react";
import Logo from "../../shared/LogoComponent";
import Link from "next/link";
import { navLinks } from "./constants";

function BoxNavbar() {
  return (
    <header className="bg-black flex justify-center items-center gap-x-42 pt-8">
      <div>
        <Logo />
      </div>

      <div className="flex gap-x-5 items-center p-2">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-[1px] border-black hover:border-white rounded-3xl p-2 px-5 cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div>
        <button className="bg-white text-black hover:bg-zinc-100 rounded-3xl font-semibold px-5 p-2 cursor-pointer">
          Vamos conversar
        </button>
      </div>
    </header>
  );
}

export default BoxNavbar;
