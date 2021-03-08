import dynamic from "next/dynamic";
import { Canvas } from "react-three-fiber";
import Boite from "./Boite";
import { Cone, Sphere, Torus } from "./Formes";
import { OrbitControls, Stars } from "@react-three/drei";
import { Theme } from "../../pages/_app";

export default function Scene3D({ theme } : {theme : Theme}) {
  const NUM = 100;
  const formes = new Array(NUM).fill(null);

  return (
    <Canvas
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {theme === "dark" && (
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />
      )}
    </Canvas>
  );
}
