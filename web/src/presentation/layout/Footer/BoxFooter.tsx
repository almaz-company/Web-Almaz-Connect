import React from "react";
import Logo from "../../shared/LogoComponent";

function BoxFooter() {
  return (
    <div className="flex flex-col items-center w-full">
      <div></div>
      <div className="flex gap-x-42 w-8/10">
        <div>
          <Logo />
          <p>
            PR Estratégico para Agências que Querem Ser Referência no Mercado
          </p>
        </div>
        <div>
          <h4>+Almaz</h4>
          <p>AlmazMed</p>
          <p>Almaz B2B</p>
        </div>
        <div>
          <h4>Na Pátrica</h4>
          <p>Quem Somos</p>
          <p>Nosso Método</p>
        </div>
        <div>
          <h4>Recursos</h4>
          <p>Insights</p>
          <p>Vamos Conversar</p>
        </div>
      </div>
      <div>
        &copy; 2025 Almaz Connect. PR Estratégico para Agências. Todos os
        direitos reservados
      </div>
    </div>
  );
}

export default BoxFooter;
