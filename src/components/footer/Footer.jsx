import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-azul-100 dark:bg-cinza-200 flex flex-col items-center text-center justify-center md:justify-between md:text-start md:items-stretch text-azul-400 dark:text-laranja-100 md:px-30 lg:px-[20%]">
      <div className="flex flex-col md:flex-row justify-between items-center my-5 lg:my-10">
        <div>
          <h2 className="text-[1.5rem]">Gabriel Motta Martins</h2>
          <p className="text-gray-600 dark:text-gray-300">Desenvolvedor de Software</p>
        </div>
        <div className="flex gap-3 mt-3">
          <a
            className="dark:text-white bg-azul-300 dark:bg-cinza-100 p-2 rounded-md"
            href="https://github.com/Robizuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-azul-100 fill-current w-7 h-7 transition duration-300 cursor-pointer hover:dark:text-gray-400 hover:text-azul-200" />
          </a>
          <a
            className="dark:text-white bg-azul-300 dark:bg-cinza-100 p-2 rounded-md"
            href="https://www.linkedin.com/in/gabrielmottamartins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-azul-100 fill-current w-7 h-7 transition duration-300 cursor-pointer hover:dark:text-gray-400 hover:text-azul-200" />
          </a>
          <a
            className="dark:text-white bg-azul-300 dark:bg-cinza-100 p-2 rounded-md"
            href="mailto:gmotta344@gmail.com"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-azul-100 fill-current w-7 h-7 transition duration-300 cursor-pointer hover:dark:text-gray-400 hover:text-azul-200" />
          </a>
        </div>
      </div>
      <div className="text-gray-600 dark:text-gray-300 flex mx-5 md:mx-0 py-10 justify-center flex-wrap border-t text-[0.8rem] gap-1">
        <p>© 2025 Gabriel Motta Martins.</p>
        <div className="flex flex-row gap-1 items-center">
          <p>Feito com</p>
          <FaHeart className="text-red-500" />
          <p>utilizando React e Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
