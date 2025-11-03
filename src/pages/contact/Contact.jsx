import {
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contato"
      className="grid grid-cols-1 bg-linear-to-t to-azul-100 from-azul-200 text-azul-400 dark:text-branco-100 dark:to-cinza-200 dark:from-cinza-100 px-5 md:px-20 lg:px-[30%] py-5 lg:text-[1.3rem]"
    >
      <h2 className="text-[2rem] lg:text-[3rem] font-semibold text-center dark:text-laranja-100 reveal">
        Entre em Contato
      </h2>
      <p className="text-center dark:text-gray-300 lg:text-[1.2rem] reveal">
        Informações para me contatar.
      </p>
      <div className="text-azul-100 flex flex-col gap-3 py-5">
        <div className="bg-azul-300 dark:bg-cinza-300 flex flex-row items-center p-3 rounded-xl gap-3 ring-1 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <div className="bg-azul-400 dark:bg-cinza-200 text-azul-200 dark:text-laranja-100 p-2 lg:p-5 rounded-sm">
            <FaEnvelope className="lg:h-10 lg:w-10" />
          </div>
          <div className="p-">
            <p className="text-azul-400 dark:text-gray-400">Email</p>
            <p>gmotta344@gmail.com</p>
          </div>
        </div>
        <div className="bg-azul-300 dark:bg-cinza-300 flex flex-row items-center p-3 rounded-xl gap-3 ring-1 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <div className="bg-azul-400 dark:bg-cinza-200 text-azul-200 dark:text-laranja-100 p-2 lg:p-5 rounded-sm ">
            <FaPhone className="lg:h-10 lg:w-10" />
          </div>
          <div className="p-">
            <p className="text-azul-400 dark:text-gray-400">Telefone</p>
            <p>+55 12 98816-0781</p>
          </div>
        </div>
        <div className="bg-azul-300 dark:bg-cinza-300 flex flex-row items-center p-3 rounded-xl gap-3 ring-1 dark:ring-cinza-100 hover:dark:ring-laranja-100 transition-all duration-300 reveal">
          <div className="bg-azul-400 dark:bg-cinza-200 text-azul-200 dark:text-laranja-100 p-2 lg:p-5 rounded-sm">
            <FaLocationArrow className="lg:h-10 lg:w-10" />
          </div>
          <div className="p-">
            <p className="text-azul-400 dark:text-gray-400">Localização</p>
            <p>São José dos Campos, SP - Brasil</p>
          </div>
        </div>
      </div>
      <p className="text-center reveal dark:text-gray-300">
        Disponibilidade para atuar de estágiario em desenvolvedor de software.
      </p>
      <div className="flex justify-center py-5">
        <a
          href="https://drive.google.com/file/d/1rTRr37SCIb9dq-fAJ9qAXIOka5M5mSbi/view?usp=sharing"
          className="bg-azul-300 text-azul-100 dark:bg-cinza-300 dark:text-laranja-100 flex flex-row items-center p-3 rounded-xl gap-3 hover:bg-azul-400 hover:text-azul-100 hover:dark:bg-laranja-100 hover:dark:text-cinza-300 transition-all duration-300 justify-center cursor-pointer reveal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-2 rounded-sm">
            <FaDownload className="lg:h-10 lg:w-10" />
          </div>
          <p>Baixar Currículo</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
