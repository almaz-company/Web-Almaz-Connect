import React from 'react'
import HeadLineComponent from '../../shared/HeadLineComponent'
import Link from 'next/link';
import {services} from './constants/index'


function BoxHero3() {
  return (
    <div className="relative w-full bg-black text-white py-10 px-4 overflow-hidden bg-right bg-no-repeat"  style={{ backgroundImage: "url('https://ik.imagekit.io/ocwmtzwmp/Almaz%20Connect/Vector%204.png?updatedAt=1754003093437')" }}>
      <div className="max-w-7xl mx-auto">
        <HeadLineComponent mainText="Soluções de PR Estratégico para" subText="Posicionar, Diferenciar e Fortalecer Sua Agência"/>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center h-62 bg-white/30 hover:bg-white/40 p-6 rounded-lg shadow-lg hover:bg-opacity-0 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div>
            <a className="inline-block bg-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-pink-600 transition duration-300">
              QUERO SABER COMO POSICIONAR MINHA MARCA
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxHero3
