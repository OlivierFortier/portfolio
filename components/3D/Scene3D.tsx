import { Canvas } from "react-three-fiber";
import { Composition } from "./Formes";
import { useRouter } from "next/router";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import { Theme } from "../../pages/_app";
import { softShadows, Html } from "@react-three/drei";
import { useSpring, a } from "react-spring/three";

// TODO : lazy load la 3D ?

softShadows();

export default function Scene3D({ theme }: { theme: Theme }) {
  const router = useRouter();

  const animEntree = useSpring({
    from: { scale: [0,0,0], opacity: 0 },
    to: { scale: [1,1,1], opacity: 1 },
    delay: 500,
    config: {
      mass : 5,
      friction: 40,
      tension : 20
    }
  });

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
        shadow-camera-left={-30}
        shadow-camera-right={20}
        shadow-camera-top={30}
        shadow-camera-bottom={-10}
      />
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.3} position={[-10, 0, -20]} />
      {/* <pointLight intensity={0.3} position={[0, -10, 0]} /> */}

      {router.pathname === "/bonus" && (
        //@ts-ignore
        <OrbitControls />
      )}

      {theme === "light" && (
        <a.group {...animEntree}>
          <Composition router={router} />
        </a.group>
      )}

      {router.pathname === "/bonus" && theme === "light" && (
        <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-5.7}>
          <planeBufferGeometry args={[100, 100, 10, 10]} />
          <shadowMaterial opacity={0.5} />
          {/* <meshStandardMaterial color="red"/> */}
        </mesh>
      )}

      {theme === "dark" && (
        <a.group {...animEntree}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          {router.pathname === "/bonus" && (
            <mesh position={[0, 2, 0]}>
              <Html transform distanceFactor={10}>
                <h1 className="text-blue-500">
                  Amusez-vous parmis les étoiles!
                </h1>
              </Html>
            </mesh>
          )}
        </a.group>
      )}
    </Canvas>
  );
}
