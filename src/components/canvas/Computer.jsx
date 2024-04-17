import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF("/retro_desk/computer.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/retro_desk/computer.gltf");

export default Computer;
