import React from "react";
import HeadLineComponent from "../../shared/HeadLineComponent";
import CTAButton from "../../shared/CTAButton";

function BoxHero() {
  return (
    <div className="bg-black w-full flex flex-col items-center gap-y-5 py-16">
      <div className="w-6/8 flex items-center">
       <HeadLineComponent
        mainText="PR Estratégico"
        subText="para Agências que Querem ser Vistas pelo Mercado"
      
      />
      </div>
      <div className="w-8/10">
        <h4 className="text-[24px] text-center">Transformamos resultados em narrativas de valor. Nós atuamos como extensão do seu time, estruturando estratégias de imprensa que consolidam reputação e ampliam sua presença em veículos de relevância.</h4>
      </div>
      <div className="w-full flex justify-center">
        <CTAButton mainText="Quero posicionar minha agência"/>
      </div>
    </div>
  );
}

export default BoxHero;
