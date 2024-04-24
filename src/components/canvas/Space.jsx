import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spaceboy from "./Spaceboy";

function Space() {
  return (
    <section className="w-100% h-screen">
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas camera={{ zoom: 2.5, position: [15, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <Spaceboy />
          </Suspense>
          <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}

export default Space;
