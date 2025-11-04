import SpotifyPlaylist from "../../components/ui/spotify-playlist/SpotifyPlaylist";
import { FaGamepad, FaMusic } from "react-icons/fa";
import { useScrollReveal } from "../../components/ui/scroll-reveal/useScrollReveal";

const About = () => {
  useScrollReveal();
  return (
    <section
      id="sobre"
      className="flex flex-col bg-linear-to-t to-azul-100 from-azul-200 dark:bg-linear-to-b dark:to-cinza-100 dark:from-cinza-200 items-center py-10 md:px-20 lg:px-[20%] transition duration-200"
    >
      <h2 className="text-[2rem] lg:text-[3.5rem] font-semibold text-azul-400 dark:text-laranja-100 reveal">
        Sobre mim
      </h2>
      <p className="text-center text-wrap mx-5 mt-3 lg:text-[1.2rem] dark:text-gray-300 text-azul-400 reveal">
        Sou estudante de Engenharia de Software pela UNISA (Universidade de
        Santo Amaro), com foco em desenvolvimento web. Tenho me dedicado a
        aprimorar minhas habilidades em front-end e back-end, unindo
        criatividade e lógica para construir soluções eficientes.
      </p>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-15 mt-10 reveal">
        <div className="lg:flex lg:flex-col lg:flex-1 text-branco-100 dark:text-laranja-100 bg-azul-300 dark:bg-cinza-300 mx-10 lg:mx-0 rounded-xl dark:border-white py-2 lg:py-2 shadow-lg ring-1 ring-azul-300 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300">
          <div className="flex flex-col lg:flex-row-reverse lg:gap-3 justify-center items-center lg:justify-end lg:mx-8 mt-3 lg:mt-6">
            <FaGamepad className="h-10 w-10" />
            <h3 className="text-[1.5rem] lg:text-[2rem] font-semibold">
              Meus hobbies
            </h3>
          </div>
          <p className="text-center lg:text-start text-wrap my-3 mx-8 dark:text-gray-300">
            Gosto de jogos eletrônicos como Cuphead, Elden Ring, Dark Souls e
            League of Legends. Tenho uma queda por RPGs e histórias de ficção
            científica, adoro explorar mundos diferentes e cheios de
            possibilidades.
          </p>
          <p className="text-center lg:text-start text-wrap mb-3 mx-8 dark:text-gray-300">
            Costumo ouvir artistas como Daft Punk, Pink Floyd, Tame Impala e
            Tyler, The Creator.
          </p>
          <div className="hidden lg:flex flex-col px-8">
            <h3 className="text-[1.4rem] font-semibold mt-10">
              Além do Código
            </h3>
            <p className="my-3 dark:text-gray-300">
              Além de estudar e programar, gosto de aproveitar meu tempo com
              alguns hobbies.
            </p>
            <div className="w-full flex-row justify-start gap-2 pr-5 flex-wrap hidden lg:flex mt-3">
              <span className="tags-skills uppercase text-azul-400 dark:text-laranja-100">
                Jogos
              </span>
              <span className="tags-skills uppercase text-azul-400 dark:text-laranja-100">
                Músicas
              </span>
              <span className="tags-skills uppercase text-azul-400 dark:text-laranja-100">
                Animes
              </span>
              <span className="tags-skills uppercase text-azul-400 dark:text-laranja-100">
                Filmes
              </span>
              <span className="tags-skills uppercase text-azul-400 dark:text-laranja-100">
                Edição de Vídeos
              </span>
              <span className="tags-skills uppercase text-azul-400 dark:text-laranja-100">
                RPG
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex-1 py-3 lg:py-2 text-branco-100 bg-azul-300 dark:bg-cinza-300 mx-10 lg:mx-0 rounded-xl ring-1 ring-azul-300 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300">
          <div className="flex flex-col lg:flex-row-reverse lg:gap-3 justify-center items-center lg:justify-end lg:mx-8 mt-3 lg:mt-6 dark:text-laranja-100">
            <FaMusic className="h-9 w-9" />
            <h3 className="text-[1.5rem] lg:text-[2rem] font-semibold">
              Minhas músicas
            </h3>
          </div>
          <p className="text-center lg:text-start text-wrap my-3 px-10 lg:px-8 dark:text-gray-300">
            Sou uma pessoa apaixonada por música, parte fundamental da minha
            rotina de desenvolvimento. Então deixo disponível a playlist com
            minhas favoritas:
          </p>
          <SpotifyPlaylist />
        </div>
      </div>
    </section>
  );
};

export default About;
