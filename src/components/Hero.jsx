// import { Canvas } from "@react-three/fiber";

import Space from "./canvas/Space";

import { styles } from "../styles";
import ParticlesBg from "./ParticlesBg";

import Scroll from "./Scroll";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div>
        <ParticlesBg />
      </div>
      <div
        className={`relative inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9B111E]" />
          <div className="w-1 sm:h-80 h-40 red-pink-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hola, soy <span className="text-[#f05656]">Hector</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Soy desarrollador front end Colombiano,{" "}
            <br className="sm:block hidden" />
            además, diseñador web y Cofundador de Digital Zach.
          </p>
        </div>
      </div>
      <Space />
      <Scroll />
    </section>
  );
};

export default Hero;
