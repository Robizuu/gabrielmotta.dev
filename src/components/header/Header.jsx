import ToggleTheme from "../ui/toggle-theme/ToggleTheme";

const Header = () => {
  return (
    <header className="flex flex-row justify-between lg:justify-around px-10 py-4 f items-center bg-azul-200 text-azul-400 border-b border-azul-400 dark:bg-cinza-100 dark:text-laranja-100 dark:border-b dark:border-cinza-200 transition duration-200">
      <h1 className="text-[1.5rem] font-bold">Robizu.dev</h1>
      <nav className="gap-2 font-medium hidden sm:flex cursor-pointer">
        <a href="#sobre">Sobre</a>
        <a href="#competencia">Competência</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencia">Experiência</a>
        <a href="#contato">Contato</a>
      </nav>
      <ToggleTheme />
    </header>
  );
};

export default Header;
