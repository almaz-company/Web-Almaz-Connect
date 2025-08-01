import React from "react";
import Logo from "../../shared/LogoComponent";

function BoxNavbar() {
  return (
    <header className=" flex justify-center items-center gap-x-42 mt-8">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex gap-x-5 items-center p-2">
          <li className="border-[1px] border-black hover:border-white rounded-3xl p-2 px-5 cursor-pointer">
            Home
          </li>
          <li className="border-[1px] border-black hover:border-white hover:rounded-3xl p-2 px-5 cursor-pointer">
            Por que Connect?
          </li>
          <li className="border-[1px] border-black hover:border-white hover:rounded-3xl p-2 px-5 cursor-pointer">
            Nosso Método
          </li>
          <li className="border-[1px] border-black hover:border-white hover:rounded-3xl p-2 px-5 cursor-pointer">
            Nossas Soluções
          </li>
        </ul>
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
