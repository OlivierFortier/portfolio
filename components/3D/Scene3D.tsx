import { Canvas, MeshProps } from "react-three-fiber";
import { Composition } from "./Formes";
import {
  OrbitControls,
  Stars,
  PerspectiveCamera,
} from "@react-three/drei";
import { Theme } from "../../pages/_app";
import { useControls } from "leva";

export default function Scene3D({ theme }: { theme: Theme }) {
  const NUM = 100;
  const formes = new Array(NUM).fill(null);

  const {fov} = useControls({fov : 40})

  return (
    <Canvas
      colorManagement
      // camera={{position: [0,0,10], fov: 60}}
      shadowMap
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={fov}/>

      <directionalLight
        position={[0, 10, 0]}
        intensity={0.2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <ambientLight intensity={0.3} />
      {/* <pointLight intensity={0.3} position={[-10, 0, -20]} />
      <pointLight intensity={0.3} position={[0, -10, 0]} /> */}


     {theme === 'light' && <Composition />}

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
