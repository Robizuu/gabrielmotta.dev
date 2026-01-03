import { FaGithub, FaLink } from "react-icons/fa";

const Project = () => {
  return (
    <section
      id="projetos"
      className="text-center bg-linear-to-t to-azul-100 from-azul-200 dark:to-cinza-200 dark:from-cinza-100 md:pt-10"
    >
      <h2 className="text-[2rem] lg:text-[3.5rem] font-semibold text-azul-400 dark:text-laranja-100 reveal">
        Projetos em Destaque
      </h2>
      <p className=" text-azul-400 lg:text-[1.2rem] dark:text-gray-300 reveal">
        Alguns dos projetos que desenvolvi recentemente!
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-around md:px-20 lg:px-[20%] lg:gap-10 md:items-center lg:items-stretch">
        <div className="bg-azul-300 dark:bg-cinza-300 text-branco-100 dark:text-laranja-100 overflow-hidden lg:max-w-md m-10 lg:mx-0 rounded-xl text-start shadow-xl transition-transform duration-300 hover:-translate-y-2">
          <div className="overflow-hidden">
            <img
              className="w-full md:h-50 h-40 lg:h-50 object-cover object-top transition-transform duration-300 hover:scale-110"
              src="diagrama-classe.jpg"
            />
          </div>
          <div className="m-5">
            <h3 className="text-azul-100 dark:text-laranja-100 text-[1.1rem] font-semibold mt-10">
              SP Mobilidade+
            </h3>
            <p className="text-gray-300 dark:text-gray-300">
              Protótipo desenvolvido num projeto integrador da faculdade que
              visa trazer inovação na mobilidade em SP.
            </p>
            <ul className="flex flex-wrap my-5 gap-2">
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                Plant UML
              </li>
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                Java
              </li>
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                Git
              </li>
              <li className="tags-skills text-azul-400  dark:text-gray-300">
                Figma
              </li>
            </ul>
            <a
              className="flex justify-center py-2 rounded-xl text-branco-100 dark:text-laranja-100 bg-azul-400 dark:bg-cinza-100 hover:opacity-80 transition duration-200 items-center gap-2 font-medium"
              href="https://github.com/Robizuu/prototipo-sp-mobilidade-app"
            >
              Código <FaGithub />
            </a>
          </div>
        </div>
        <div className="bg-azul-300 dark:bg-cinza-300 text-azul-100 overflow-hidden lg:max-w-md m-10 rounded-xl text-start shadow-xl transition-transform duration-300 hover:-translate-y-2 lg:mx-0 dark:text-laranja-100 reveal">
          <div className="overflow-hidden">
            <img
              className="w-full md:h-50 h-40 lg:h-50 object-cover transition-transform object-top duration-300 hover:scale-110"
              src="pagina-inicial-tea.png"
            />
          </div>
          <div className="m-5">
            <h3 className="text-azul-100 dark:text-laranja-100 text-[1.1rem] font-semibold mt-10">
              TEA Website
            </h3>
            <p className="text-gray-300 dark:text-gray-300">
              Projeto desenvolvido para o projeto integrador da faculdade que
              visa aplicar práticas de design de UI/UX.
            </p>
            <ul className="flex flex-wrap my-5 gap-2">
              <li className="tags-skills text-azul-400  dark:text-gray-300">
                HTML5
              </li>
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                CSS3
              </li>
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                Git
              </li>
              <li className="tags-skills text-azul-400  dark:text-gray-300">
                JavaScript
              </li>
            </ul>
            <div className="flex flex-wrap gap- justify-around">
              <a
                className="flex w-[45%] py-2 justify-center rounded-xl text-branco-100 dark:text-laranja-100 bg-azul-400 dark:bg-cinza-100 hover:opacity-80 transition duration-200 items-center gap-2 font-medium"
                href="https://github.com/Robizuu/prototipo-sp-mobilidade-app"
              >
                Código <FaGithub />
              </a>
              <a
                className="flex w-[45%] py-2 justify-center rounded-xl text-black dark:text-gray-300 bg-azul-100 dark:bg-cinza-200 hover:opacity-80 transition duration-200 items-center gap-2 font-medium"
                href="https://tea-projeto.vercel.app/"
              >
                Demo <FaLink />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-azul-300 dark:bg-cinza-300 text-azul-100 overflow-hidden lg:max-w-md m-10 rounded-xl text-start shadow-xl transition-transform duration-300 hover:-translate-y-2 relative lg:mx-0 dark:text-laranja-100 reveal">
          <div className="overflow-hidden">
            <img
              className="w-full md:h-50 h-40 lg:h-50 object-cover transition-transform object-top duration-300 hover:scale-110"
              src="pagina-github-poo.png"
            />
          </div>
          <div className="m-5">
            <h3 className="text-azul-100 dark:text-laranja-100 text-[1.1rem] font-semibold mt-10">
              Java ScreenMatch
            </h3>
            <p className="text-gray-300 dark:text-gray-300">
              Projeto desenvolvido com a formação Java da Alura para uma
              aplicação de cinema que integra APIs.
            </p>
            <ul className="flex flex-wrap my-5 gap-2">
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                Java
              </li>
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                POO
              </li>
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                APIs
              </li>
              <li className="tags-skills text-azul-400 dark:text-gray-300">
                Git
              </li>
            </ul>
            <a
              className="flex justify-center py-2 rounded-xl text-branco-100 dark:text-laranja-100 bg-azul-400 dark:bg-cinza-100 hover:opacity-80 transition duration-200 items-center gap-2 font-medium"
              href="https://github.com/Robizuu/prototipo-sp-mobilidade-app"
            >
              Código <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
