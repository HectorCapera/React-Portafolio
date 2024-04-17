import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Computer from "./canvas/Computer";
import { OrbitControls } from "@react-three/drei";

import { styles } from "../styles";
import ParticlesBg from "./ParticlesBg";
import { Suspense } from "react";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div>
        <ParticlesBg />
      </div>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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

      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [1, 30, 25], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={3} />
        <pointLight position={[40, 40, 0]} intensity={0.4} />
        <pointLight position={[-40, 40, 0]} intensity={0.4} />

        <Suspense fallback={null}>
          <Computer />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
