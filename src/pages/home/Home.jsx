import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <section
      id="inicio"
      className="flex text-azul-400 bg-linear-to-t to-azul-200 from-azul-100 dark:to-cinza-100 dark:from-cinza-200 dark:text-branco-100 flex-col items-center h-[calc(100vh-4rem)] justify-center cursor-default sm:pt-20 transition duration-200"
    >
      <img className="rounded-full w-50 reveal" src="/robizu.png" />
      <h1 className="text-azul-400 dark:text-laranja-100 text-[2rem] sm:text-[4rem] text-center transition reveal">
        Olá, me chamo{" "}
        <span className="text-azul-200 animate-rainbow-light dark:animate-rainbow-dark">
          Gabriel
        </span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-5 transition reveal">
        Desenvolvedor Full Stack apaixonado por tecnologia
      </p>
      <div className="flex gap-4 font-medium reveal">
        <a
          href="#projetos"
          className="px-4 py-2 dark:bg-cinza-200 bg-azul-300 text-branco-100 rounded-md sm:shadow-lg transition duration-300 hover:dark:bg-cinza-300 hover:dark:text-branco-100 hover:bg-azul-400"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="px-3 py-2 bg-azul-100 dark:bg-white text-black rounded-md sm:shadow-lg transition duration-300 dark:hover:bg-gray-300 hover:bg-azul-200"
        >
          Entre em Contato
        </a>
      </div>
      <div className="flex gap-2 mt-5 reveal">
        <a
          className="text-gray-700 dark:text-white"
          href="https://github.com/Robizuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className=" fill-current w-8 h-8 transition duration-300 cursor-pointer hover:dark:text-gray-400 hover:text-azul-400" />
        </a>
        <a
          className="text-gray-700 dark:text-white"
          href="https://www.linkedin.com/in/gabrielmottamartins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className=" fill-current w-8 h-8 transition duration-300 cursor-pointer hover:dark:text-gray-400 hover:text-azul-400" />
        </a>
        <a
          className="text-gray-700 dark:text-white"
          href="mailto:gmotta344@gmail.com"
          rel="noopener noreferrer"
        >
          <FaEnvelope className=" fill-current w-8 h-8 transition duration-300 cursor-pointer hover:dark:text-gray-400 hover:text-azul-400" />
        </a>
      </div>
      <ChevronDownIcon className="animate-bounce h-10 sm:mt-70 mt-30" />
    </section>
  );
};

export default Home;
