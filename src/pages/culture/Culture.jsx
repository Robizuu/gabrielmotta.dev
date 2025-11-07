const Culture = () => {
  return (
    <section className="bg-linear-to-b from-azul-100 dark:from-cinza-200 via-branco-100 dark:via-cinza-200 to-azul-100 dark:to-cinza-200 text-azul-400 dark:text-branco-100 p-10 text-center md:px-30 lg:px-[25%]">
      <h2 className="text-[2rem] lg:text-[3rem] font-bold mb-6 dark:text-laranja-100 reveal">
        ✈️ Paixão por fazer a diferença
      </h2>
      <p className="max-w-2xl mx-auto leading-relaxed text-lg dark:text-gray-300 reveal">
        Acredito que fazer a diferença está em cada detalhe, na curiosidade para
        aprender, na dedicação em criar algo melhor e no respeito pelas pessoas
        que constroem essa jornada comigo. É isso que me inspira a seguir
        evoluindo como desenvolvedor.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <div className="bg-azul-500 dark:bg-cinza-300 text-branco-100 rounded-2xl p-6 w-full shadow-lg reveal">
          <h3 className="font-bold text-xl mb-2">Celebre conquistas</h3>
          <p className="dark:text-gray-300">
            Cada projeto finalizado representa uma nova etapa superada. Gosto de
            olhar para trás, entender o quanto evoluí e usar isso como motivação
            para o próximo desafio.
          </p>
        </div>
        <div className="bg-azul-500 dark:bg-cinza-300 text-branco-100 rounded-2xl p-6 w-full shadow-lg reveal">
          <h3 className="font-bold text-xl mb-2">Lidere com o coração</h3>
          <p className="dark:text-gray-300">
            Busco sempre colaborar com empatia e respeito. Acredito que grandes
            resultados surgem quando há confiança e espaço para todas as ideias.
          </p>
        </div>
        <div className="bg-azul-500 dark:bg-cinza-300 text-branco-100 rounded-2xl p-6 w-full shadow-lg reveal">
          <h3 className="font-bold text-xl mb-2">Entregue valor</h3>
          <p className="dark:text-gray-300">
            Em cada linha de código, tento entregar algo que realmente ajude as
            pessoas. Mais do que funcionalidade, quero criar soluções que façam
            sentido e gerem impacto real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Culture;
