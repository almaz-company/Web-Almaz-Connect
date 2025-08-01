import React from "react";
import Logo from "../../shared/LogoComponent";
import HeadLineComponent from "../../shared/HeadLineComponent";
import CTAButton from "../../shared/CTAButton";
import Image from "next/image";

// CSS personalizado para as imagens de fundo com z-index e posicionamento
const customStyles = `
  .bg-container {
    position: relative;
    background: none; /* Remove qualquer fundo direto da div */
    min-height: 680px; /* Garante que o container tenha altura suficiente para a imagem */
  }
  .bg-container::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://ik.imagekit.io/ocwmtzwmp/Almaz%20Connect/Rectangle%2014.png?updatedAt=1754030600328');
    background-position: left top; /* Topo à esquerda */
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1; /* Primeira camada de fundo */
  }
  .bg-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://ik.imagekit.io/ocwmtzwmp/Almaz%20Connect/Rectangle%2012.png?updatedAt=1754030600233');
    background-position: right bottom; /* Canto inferior direito, sem deslocamento extra */
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2; /* Segunda camada de fundo, acima da primeira */
  }
  .bg-container > * {
    position: relative;
    z-index: 3; /* Garante que o conteúdo (incluindo <Image>) fique acima das imagens de fundo */
  }
`;

function BoxFooter() {
  return (
    <div className="flex flex-col items-center w-full">
      <aside className="bg-black w-[95%] flex items-center gap-y-5 mt-10">
        <div className="flex flex-col items-center gap-y-5">
          <HeadLineComponent
            mainText="Posicione Sua Agência em"
            subText="Veículos de Autoridade e Ganhe Mercado"
          />
          <CTAButton mainText="Quero ser visto pelo mercado" />
        </div>
        <div className="bg-container w-full">
          {/* Injetar CSS personalizado */}
          <style>{customStyles}</style>
          <Image
            style={{ position: "absolute", bottom: 0 }}
            src="https://ik.imagekit.io/ocwmtzwmp/Almaz%20Connect/shutterstock_2257820037%201.png?updatedAt=1754030591399"
            alt="shutter-stock"
            width={620}
            height={680}
            quality={100}
            priority
          />
        </div>
      </aside>
      <div className="flex flex-col  items-center m-15">
        <aside className="flex gap-x-32 w-8/10 my-10">
          <div className="flex flex-col">
            <Logo />
            <p>
              PR Estratégico para Agências que Querem Ser Referência no Mercado
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h4 className="text-[20px] font-semibold">+Almaz</h4>
            <p>AlmazMed</p>
            <p>Almaz B2B</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h4 className="text-[20px] font-semibold whitespace-nowrap">Na Prática</h4>
            <p>Quem Somos</p>
            <p>Nosso Método</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h4 className="text-[20px] font-semibold">Recursos</h4>
            <p>Insights</p>
            <p>Vamos Conversar</p>
          </div>
        </aside>
        <div>
          &copy; 2025 Almaz Connect. PR Estratégico para Agências. Todos os
          direitos reservados
        </div>
      </div>
    </div>
  );
}

export default BoxFooter;
