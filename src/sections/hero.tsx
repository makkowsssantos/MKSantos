import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Myprofile from "../img/myprofile.png";


export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 py-16 md:flex-row md:gap-10 md:px-10"
    >
      <div className="h-56 w-56 shrink-0 overflow-hidden rounded-xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
        <img
          src={Myprofile}
          alt="Makko profile"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="max-w-3xl text-center md:text-left">
        <header className="mb-4 text-3xl font-medium sm:text-4xl md:text-5xl">
          Hi! I'm Makkonochi Santos
        </header>

        <h1 className="text-base leading-relaxed sm:text-lg md:text-xl">
          A 23 y/o junior web developer who enjoys building practical web
          applications and learning through hands-on projects.
          <br />
          <br />
          I've built{" "}
          <strong>
            <a
              href="#projects"
              className="text-slate-500 transition-colors hover:text-slate-950"
            >
              projects <FontAwesomeIcon icon={faUpRightFromSquare}/>
            </a>
          </strong>{" "}
          including a Church Prayer Request System, Research Website UI, and
          web/mobile applications, while continuously improving my skills in
          full-stack development.
        </h1>
      </div>
    </section>
  );
}