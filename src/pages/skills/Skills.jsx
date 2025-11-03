import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaGit,
  FaLinux,
  FaAws,
  FaFigma,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section id="habilidades" className="pb-10 flex flex-col bg-linear-to-b to-azul-100 from-azul-200 items-center dark:bg-linear-to-t dark:to-cinza-100 dark:from-cinza-200 md:pt-10">
      <h2 className="text-[2rem] font-semibold dark:text-laranja-100 lg:text-[3.5rem] text-azul-400 reveal">
        Habilidades
      </h2>
      <div className="flex flex-col mt-10 px-10 gap-5 lg:gap-15 md:grid md:grid-cols-2 md:px-30 lg:px-[20%]">
        <div className="bg-azul-300 text-branco-100 p-5 lg:p-10 rounded-lg shadow-lg dark:bg-cinza-300 dark:text-branco-100 ring-1 ring-azul-300 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <h3 className="title-skills">Frontend</h3>
          <ul className="w-full flex flex-row justify-start gap-2 flex-wrap mt-3 lg:mt-5 lg:mb-5">
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              HTML5 <FaHtml5 />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              CSS3 <FaCss3 />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              JavaScript <FaJs />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              React <FaReact />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">Tailwind CSS</li>
          </ul>
        </div>
        <div className="bg-azul-300 text-branco-100 p-5 lg:p-10 rounded-lg shadow-lg dark:bg-cinza-300 dark:text-branco-100 ring-1 ring-azul-300 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <h3 className="title-skills">Backend</h3>
          <ul className="w-full flex flex-row justify-start gap-2 flex-wrap mt-3 lg:mt-5 lg:mb-5">
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              Python <FaPython />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              Java <FaJava />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              PHP <FaPhp />
            </li>
          </ul>
        </div>
        <div className="bg-azul-300 text-branco-100 p-5 lg:p-10 rounded-lg shadow-lg dark:bg-cinza-300 dark:text-branco-100 ring-1 ring-azul-300 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <h3 className="title-skills">DevOps & Tools</h3>
          <ul className="w-full flex flex-row justify-start gap-2 flex-wrap mt-3 lg:mt-5 lg:mb-5">
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              Git <FaGit />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              Linux <FaLinux />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">Vercel</li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              AWS <FaAws />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">Diagramação</li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">Markdown</li>
          </ul>
        </div>
        <div className="bg-azul-300 text-branco-100 p-5 lg:p-10 rounded-lg shadow-lg dark:bg-cinza-300 dark:text-branco-100 ring-1 ring-azul-300 hover:ring-branco-100 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <h3 className="title-skills">Outras Habilidades</h3>
          <ul className="w-full flex flex-row justify-start gap-2 flex-wrap mt-3 lg:mt-5 lg:mb-5">
            <li className="tags-skills text-azul-300 dark:text-gray-300">
              Figma <FaFigma />
            </li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">UI/UX Design</li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">Pacote Office</li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">Power BI</li>
            <li className="tags-skills text-azul-300 dark:text-gray-300">SAP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
