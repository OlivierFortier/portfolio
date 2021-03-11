import { Canvas, MeshProps } from "react-three-fiber";
import { Composition } from "./Formes";
import { useRouter } from "next/router";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import { Theme } from "../../pages/_app";
// import { useControls } from "leva";
import {softShadows} from '@react-three/drei'

//TODO : gestion de leva pour bonus
// TODO : afficher instruction HTML avec drei pour formes fun
//TODO ? : importation de modèles 3D
// TODO : animation d'intro et lazy load la 3D ?

softShadows();

export default function Scene3D({ theme }: { theme: Theme }) {
  const router = useRouter();

  return (
    <Canvas
      colorManagement
      shadowMap
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {
        //@ts-ignore
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
      }
      <directionalLight
        position={[0, 10, 0]}
        intensity={0.2}
        castShadow
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

      {router.pathname === "/bonus" && 
      //@ts-ignore
      <OrbitControls />}

      {theme === "light" && <Composition />}

      {
        router.pathname ==="/bonus" &&
        <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-5.7}>
          <planeBufferGeometry args={[100,100, 4 ,4 ]} />
          {/* <meshStandardMaterial color="#5ad3e9"/> */}
          <shadowMaterial attach="material" opacity={0.5} />
        </mesh>
      }

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
