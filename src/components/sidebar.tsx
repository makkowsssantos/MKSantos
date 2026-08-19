import { useState, useEffect } from "react";
import Makk from "../img/makk.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon, faSun, faBars, faXmark, faCubes, faLaptopCode, faBook, faGem} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

     const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>

      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-300 bg-white dark:bg-slate-900 p-4 lg:hidden">
        <a href="#hero" onClick={closeMenu}>

            <h1 className=" h-12 w-auto text-2xl font-mono tracking-widest text-slate-950 dark:text-slate-300">Makko</h1>

        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-slate-700"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}

        </button>
      </div>



      {isOpen && (
       <nav className="mobile-menu fixed inset-x-0 top-20.25 bottom-0 z-40 overflow-y-auto border-b border-slate-300 bg-white dark:bg-slate-900  p-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            <li>
              <a
                href="#stack"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950 gap-2.5  "
              >
                <FontAwesomeIcon icon={faCubes}/> Stack
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950"
              >
                <FontAwesomeIcon icon={faLaptopCode}/> Experience
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950"
              >
               <FontAwesomeIcon icon={faBook}/> Education
              </a>
            </li>

            <li>
              <a
                href="#aiWorkflow"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950"
              >
              <FontAwesomeIcon icon={faGem}/>  How I use AI 
              </a>
            </li>

            <hr className="border-slate-200" />

            <li className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-950 dark:text-slate-400 ">Socials</span>

              <a
                href="https://web.facebook.com/Makkowsss"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-950"
              >
                Facebook →
              </a>

              <a
                href="https://github.com/makkowsssantos"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-950"
              >
                GitHub →
              </a>

              <a
                href="https://www.instagram.com/itsurmanmakkowss/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-950"
              >
                Instagram →
              </a>
              <h2 className="text-sm sm:text-sm md:text-md mt-6 text-slate-700 dark:text-slate-500">Have a project in mind?</h2>
              <h3 className="text-sm sm:text-sm md:text-md text-slate-700 dark:text-slate-600">Let's talk → <strong className="text-slate-700 dark:text-slate-400">makkowsssantos@gmail.com</strong></h3>
            </li>
          </ul>

          <button
      onClick={() => setDarkMode(!darkMode)}
      className="mt-8 flex w-full items-center justify-between border-t border-slate-200 pt-5 text-left dark:border-slate-800"
    >

      <span className="text-xl">
        {darkMode ?  <FontAwesomeIcon icon={faSun} className="text-md" />: <FontAwesomeIcon icon={faMoon} className="text-md" />}
      </span>
    </button>
        </nav>
      )}

      <aside className="sticky top-0 hidden h-screen border-r border-slate-300 p-5 lg:flex lg:flex-col lg:justify-between">
        <ul className="flex flex-col p-5">
          <li>
            <a href="#hero">
              <img
                src={Makk}
                alt="Makkonochi Santos"
                className="h-40 w-auto object-contain"
              />
            </a>
          </li>

          <li className="mt-10 flex flex-col gap-2">
            <a
              href="#stack"
              className="text-slate-500 hover:text-slate-950"
            >
              Stack
            </a>

            <a
              href="#experience"
              className="text-slate-500 hover:text-slate-950"
            >
              Experience
            </a>

            <a
              href="#education"
              className="text-slate-500 hover:text-slate-950"
            >
              Education
            </a>

            <a
              href="#aiWorkflow"
              className="text-slate-500 hover:text-slate-950"
            >
              How I use AI
            </a>
          </li>
        </ul>

        <div className="p-5">
          <h2 className="mb-5 text-xl">Socials</h2>

          <div className="flex flex-col gap-2">
            <a
              href="https://web.facebook.com/Makkowsss"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-950"
            >
              Facebook
            </a>

            <a
              href="https://github.com/makkowsssantos"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-950"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/itsurmanmakkowss/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-950"
            >
              Instagram
            </a>

            <p className="mt-8 text-sm text-slate-500">
              makkowsssantos@gmail.com
            </p>


            <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 text-left dark:border-slate-800"
      >
        <span className="text-sm text-slate-600 dark:text-slate-400">
          Theme
        </span>

        <span className="text-xl">
          {darkMode ? "☀️" : "🌙"}
        </span>
      </button>
          </div>
        </div>
      </aside>
    </>
  );
}