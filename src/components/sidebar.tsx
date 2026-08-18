import { useState } from "react";
import Makk from "../img/makk.png";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>

      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-300 bg-white p-4 lg:hidden">
        <a href="#hero" onClick={closeMenu}>
          <img
            src={Makk}
            alt="Makkonochi Santos"
            className="h-12 w-auto object-contain"
          />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-slate-700"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>


      {isOpen && (
       <nav className="fixed inset-x-0 top-20.5 bottom-0 z-40 overflow-y-auto border-b border-slate-300 bg-white p-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            <li>
              <a
                href="#stack"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950"
              >
                Stack
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#aiWorkflow"
                onClick={closeMenu}
                className="text-slate-500 hover:text-slate-950"
              >
                How I use AI
              </a>
            </li>

            <hr className="border-slate-200" />

            <li className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Socials</span>

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
            </li>
          </ul>
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
          </div>
        </div>
      </aside>
    </>
  );
}