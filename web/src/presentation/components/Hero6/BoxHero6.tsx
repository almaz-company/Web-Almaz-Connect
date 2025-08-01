"use client";

import React, { useState } from "react";
import { text } from "./constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CTAButton from "../../shared/CTAButton";

// CSS personalizado para remover a seta
const customStyles = `
  .accordion-trigger {
    position: relative;
    text-decoration: none !important;
  }
  .accordion-trigger::-webkit-details-marker,
  .accordion-trigger::marker {
    display: none;
  }
  .accordion-trigger > svg {
    display: none !important;
  }
    .accordion-trigger::after {
    text-decoration: none !important; /* Remove pseudo-elementos que podem criar linhas */
  }
`;

function BoxHero6() {
  const cards = Array(5).fill(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="bg-[#070707] flex flex-col w-full h-[800px] justify-center items-center bg-left bg-no-repeat" style={{ backgroundImage: "url('https://ik.imagekit.io/ocwmtzwmp/Almaz%20Connect/Vector%204%20(1).png?updatedAt=1754022989037')" }}>
      {/* Injetar CSS personalizado */}
      <style>{customStyles}</style>
      <h1 className="text-5xl my-10">FAQ | Tudo o que Você Precisa Saber</h1>
      <div className=" flex flex-col gap-y-6 ">
        {cards.map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <Accordion
              type="single"
              collapsible
              className="w-5xl bg-white/10 border rounded-xl flex items-center hover:bg-white/5 "
              value={openIndex === index ? `item-${index}` : undefined}
            >
              <AccordionItem value={`item-${index}`} className="flex flex-col justify-center ml-16">
                <AccordionTrigger className="text-white font-semibold text-2xl accordion-trigger">
                  {text[index].number} - {text[index].title}
                </AccordionTrigger>
                <AccordionContent className="text-white ">
                  {text[index].description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <CTAButton mainText="Agende uma conversa estratégica"/>
    </div>
  );
}

export default BoxHero6;
