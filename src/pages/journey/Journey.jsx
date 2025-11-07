const Journey = () => {
  return (
    <section
      id="experiencia"
      className="grid grid-cols-1 bg-linear-to-b to-azul-100 from-azul-200 text-azul-400 dark:text-laranja-100 dark:to-cinza-200 dark:from-cinza-100 py-10"
    >
      <h2 className="text-[2rem] lg:text-[3.5rem] font-semibold text-center reveal">
        Experiência Profissional
      </h2>
      <p className="text-center mx-10 lg:text-[1.2rem] md:px-20 mb-10 dark:text-gray-300 reveal">
        Estou trabalhando a 3 anos atualmente e desejo minha primeira
        experiência trabalhando na área de tecnologia.
      </p>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 md:px-30 lg:px-[20%]">
        <div className="bg-azul-300 dark:bg-cinza-300 rounded-xl ring-azul-300 flex flex-col justify-center gap-1 p-5 mx-10 md:mx-0 lg:mx-0 shadow-xl ring-1 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-[1.5rem] text-branco-100 dark:text-laranja-100 font-semibold">
              Metinjo
            </h4>
            <div className="rounded-full bg-white h-15 w-15 my-4">
              <img className="p-3" src="metinjo.jpg" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-around lg:py-2">
            <h3 className="text-azul-400 dark:text-branco-100 font-medium text-center">
              Auxiliar de Linha de Produção
            </h3>
            <p className="text-gray-300 dark:text-branco-300 text-center">
              01/02/2024 - Atualmente
            </p>
          </div>
          <ul className="text-azul-100 dark:text-gray-400 list-disc ml-8 mt-4">
            <li>Atuei com transporte de peças.</li>
            <li>Trabalhei com criação e edição de planilhas.</li>
            <li>Solicitações de depósitos com SAP.</li>
          </ul>
        </div>
        <div className="bg-azul-300 dark:bg-cinza-300 rounded-xl flex flex-col justify-center gap-1 p-5 mx-10 md:mx-0 lg:mx-0 shadow-xl ring-1 ring-azul-300 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-[1.5rem] text-branco-100 dark:text-laranja-100 font-semibold">
              D'UP
            </h4>
            <img className="h-15 rounded-full my-4" src="dup.jpg" />
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap lg:justify-around lg:py-2">
            <h3 className="text-azul-400 dark:text-branco-100 font-medium text-center">
              Edição de vídeos
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-center">
              01/06/2023 - 01/01/2024
            </p>
          </div>
          <ul className="text-azul-100 dark:text-gray-400 list-disc ml-8 mt-4">
            <li>Edição de vídeos para empresas.</li>
            <li>Edição de vídeos para vereadores.</li>
            <li>Criação de thumbnails para vídeos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Journey;
