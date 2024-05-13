import "./App.css";
import hero_bg from "./assets//Main-background.png";
import Blurs_background from "./assets/Background-Blurs.png";
import snake_Game from "./assets/Snake-Game.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <header>
        <nav
          style={{ border: "1px solid #607B96" }}
          className="absolute w-[97vw] h-auto ms-[30px] mt-[30px]  opacity-30  z-50"
        >
          <ul className="flex justify-between  px-8 text-[#607B96] ">
            <div className="flex items-center gap-12">
              <li
                style={{ borderRight: "1px solid #607B96" }}
                className=" w-[15vw] h-[100%] flex items-center"
              >
                Aditto-dev-barmon
              </li>

              <li
                style={{ borderRight: "1px solid #607B96" }}
                className="w-[6vw] h-[100%] flex items-center"
              >
                _hello
              </li>
              <li
                style={{ borderRight: "1px solid #607B96" }}
                className="w-[6vw] h-[100%] flex items-center"
              >
                _about-me
              </li>
              <li
                style={{ borderRight: "1px solid #607B96" }}
                className="w-[6vw] h-[100%] flex items-center"
              >
                _projects
              </li>
            </div>
            <div>
              <li
                style={{ borderLeft: "1px solid #607B96" }}
                className="w-[6vw] h-[100%] flex ps-5 py-[12px] "
              >
                _contact-me
              </li>
            </div>
          </ul>
        </nav>

        <nav
          style={{ border: "1px solid #607B96" }}
          className="absolute bottom-[25px] w-[97vw] h-auto ms-[30px]  opacity-30  z-50"
        >
          <ul className="flex justify-between  px-8 text-[#607B96] ">
            <div className="flex items-center gap-12">
              <li
                style={{ borderRight: "1px solid #607B96" }}
                className=" w-[5.5vw] h-[100%] flex items-center"
              >
                find me in:
              </li>

              <li
                style={{ borderRight: "1px solid #607B96" }}
                className="text-[22px]  w-[3vw] h-[100%] flex items-center"
              >
                <FaTwitter />
              </li>
              <li
                style={{ borderRight: "1px solid #607B96" }}
                className="text-[22px]  w-[3vw] h-[100%] flex items-center"
              >
                <FaFacebookF />
              </li>
            </div>

            <div>
              <li
                style={{ borderLeft: "1px solid #607B96" }}
                className=" w-[8vw] h-[100%] flex ps-5 py-[12px] items-center  gap-3"
              >
                <p>@username</p> <FaGithub className="text-[22px]" />
              </li>
            </div>
          </ul>
        </nav>
        <section className="absolute  w-[100vw] flex justify-center items-center h-[100vh] z-50 ">
          <div className="flex gap-52 items-center">
            <div>
              <div>
                <p className="text-[18px] text-[#e5e9f0] font-font-family ms-2">
                  Hi all, I am
                </p>
                <h2 className="text-[58px]  pb-[0.8rem]  text-[#e5e9f0] font-font-family">
                  Aditto Dev Barmon
                </h2>
              </div>
              <h3 className="text-[32px] leading-[1px] text-[#4d5bce] font-font-family">
                Front-end developer
              </h3>

              <div className="text-[#607b96] flex flex-col gap-2 mt-[7rem] font-font-family">
                <p>// complete the game to continue</p>
                <p>// you can also see it on my Github page</p>
                <p className="mt-1">
                  <span className="text-[#4d5bce]">const</span>
                  <span className="text-[#43d9ad] mx-2 fo">githubLink</span>
                  <span>=</span>
                  <span className="text-[#e99] underline underline-offset-4 ms-2">
                    "https://github.com/username"
                  </span>
                </p>
              </div>
            </div>

            <div>
              <img src={snake_Game} alt="" />
            </div>
          </div>
        </section>

        <section className="relative z-20 overflow-hidden">
          <div>
            <div className="relative">
              <img
                className="w-[97vw] h-[94vh]  m-auto mt-[30px] "
                src={hero_bg}
                alt=""
              />
            </div>

            <div className="absolute top-0 right-0">
              <img
                className="w-[60vw] h-[120vh] object-cover bg-cover mr-12 -rotate-12 opacity-50"
                src={Blurs_background}
                alt=""
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
