import { navigationLinks } from "../../utils/content";
import Logo from "../icons/Logo";

const Navigation = () => {
  return (
    <nav className="text-primary-50 m-auto flex max-w-[90rem] justify-between px-24 text-lg/8 font-light">
      <a href="#" className="flex items-center gap-x-3">
        <Logo className="h-6" width={5} />
        <p className="text-xl font-bold tracking-tight">NoteFlow</p>
      </a>

      <ul className=" flex items-center gap-x-8">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className=" hover:text-primary-500 transition-property">{link.link}</a>
          </li>
        ))}
      </ul>

      <div className=" flex items-center gap-x-3">
        <button className=" border-2 border-primary-50 transition-property hover:bg-primary-50 hover:text-primary-1300 cursor-pointer rounded-full px-8 py-3.5 font-normal text-lg/8">Login</button>
        <button className=" border-2 bg-primary-500 border-primary-500 text-primary-1300 hover:border-primary-50 hover:bg-primary-50 rounded-full transition-property cursor-pointer px-8 py-3.5 font-normal text-lg/8 primary-glow">Get Started</button>
      </div>
    </nav>
  );
};

export default Navigation;
