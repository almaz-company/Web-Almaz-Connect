"use client";

import React, { useState } from "react";
import Image from "next/image";
import { topics, images } from "./constants";
import HeadLineComponent from "../../shared/HeadLineComponent";


const BoxHero2: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleTopicClick = (index: number) => {
    setActiveTopic(index);
    setProgress(((index + 1) / topics.length) * 100);
  };
  return (
    <div className="w-full flex flex-col items-center gap-y-20 py-8 px-4">
      <div className="flex text-center w-6/10 mt-10">
        <HeadLineComponent mainText="Transformando Resultados" subText="em Reconhecimento de Mercado"/>
      </div>
      <div className="flex mb-10">
        <aside>
          <div className="max-w-2xl mx-auto p-6 flex">
            <div className="font-bold text-[32px] flex flex-col gap-y-25 mt-2 mr-10">
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
            </div>
            <div className="w-2 bg-gray-800 rounded-full  mt-4">
              <div
                className="bg-pink-500 h-2.5 rounded-full transition-all duration-300"
                style={{ height: `${progress}%` }}
              ></div>
            </div>
            <div className="flex flex-col">
              {topics.map((topic, index) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicClick(index)}
                  className="text-left p-4 rounded-lg"
                >
                  <h3 className="font-bold text-[32px]">{topic.title}</h3>
                  <p className="text-sm">{topic.content}</p>
                </button>
              ))}
            </div>
            
          </div>
        </aside>
        <aside>
          <Image
            src={images[0]}
            width={599}
            height={874}
            alt="business-group-portrait"
            priority
            quality={100}
          ></Image>
        </aside>
        
      </div>
    </div>
  );
};

export default BoxHero2;
