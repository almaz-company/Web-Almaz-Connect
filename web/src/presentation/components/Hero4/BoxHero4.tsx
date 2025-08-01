import React from "react";
import HeadLineComponent from "../../shared/HeadLineComponent";
import Image from "next/image";
import { image, image2 } from "./constants";

function BoxHero4() {
    const cards = Array(4).fill(null);
  return (
    <div className="w-full flex flex-col gap-x-8 items-center bg-[#070707] pt-10">
      <div className="mx-10 mb-10">
        <HeadLineComponent
          mainText="Insights de PR e Brandig,"
          subText="para Agências que Querem ser Vistas."
        />
      </div>
      <div className="flex w-10/12 gap-5 mt-5">
        <aside className="w-1/2 flex flex-col gap-y-5">
          <div>
            <Image
              src={image.src}
              alt={image.alt}
              width={628}
              height={618}
              quality={100}
              priority
            />
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex">
              <div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="rounded-full"
                  width={60}
                  height={60}
                  quality={100}
                  priority
                />
              </div>
              <div className="ml-2">
                <p className="font-semibold">Mayara Torres</p>
                <p>Author</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <h1 className="text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                faucibus, tellus id euismod tincidunt, odio diam ultrices odio,
                id faucibus velit purus sed magna.
              </p>
            </div>
            <div className="flex gap-x-4">
              <p className="border-[1px] bg-white/10 border-gray-500 rounded-full px-3 py-1">
                Categoria
              </p>
              <p className="border-[1px] bg-white/10 border-gray-500 rounded-full px-3 py-1">
                6 Minutos de Leitura
              </p>
            </div>
          </div>
        </aside>
        <aside className="w-1/2">
        <div className="space-y-4">
            {cards.map((_, index)=> (
            <div key={index} className="w-full p-4 flex bg-white/10 rounded-2xl border-gray-400 border-[1px] backdrop-filterbackdrop-blur-sm">
            <div>
              <Image
                src={image2.src}
                alt={image2.alt}
                width={246}
                height={182}
                quality={100}
                priority
              />
            </div>
            <div className="flex flex-col gap-y-4 ml-3.5 justify-center">
              <p className="font-semibold text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex gap-x-4">
                <p className="border-[1px] bg-white/10 border-gray-500 rounded-full px-3 py-1">
                  Categoria
                </p>
                <p className="border-[1px] bg-white/10 border-gray-500 rounded-full px-3 py-1">
                  6 Minutos de Leitura
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
        
          
        </aside>
      </div>
    </div>
  );
}

export default BoxHero4;
