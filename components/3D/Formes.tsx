import { useEffect, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { a, useSpring } from "react-spring/three";
import { getRandomFloat } from "../../lib/helpers";


type PropsForme = {
  /**position de la forme X Y Z */
  position? : number[];
  /** couleur de la forme , string , hex, rgb */
  color? : string;
  /** opacité de la forme entre 0 et 1 */
  opacity?: number;
  /** vitesse de l'animation */
  speed?: number;
  /** facteur de puissance de la distortion */
  factor?: number;
  /** délai de l'animation */
  delay?: number;
  /** constructeur de la forme */
  args?: number[]
}

export function Composition() {
  const { position } = useControls({
    position: {
      value: [0, 0, 0],
      min: [-20, -20, -20],
      max: [20, 20, 20],
      step: 0.1,
    },
  });

  // Avec caméra perspective
  // positions X , de -8 à 8
  // positions Y , de 4 à -4
  // positions Z, de -6 à 6

  return (
    <group>
      <Dodecagone position={[4.5,0,-2.2]}/>
      <Cube position={[-2.1, 4.6, -5]} />
      <Sphere position={[-7.5, 0, -3]} />
      <Torus position={[1.1, -4.3, -14.6]} />
      <Cone position={[4.8, -1.9, 0]} />
    </group>
  );
}

export function Cube({position, color, delay, speed, factor, opacity, args} : PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const valeurAnim = getRandomFloat(0.4, 1.7);

  useFrame((state) => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    ref.position.y = Math.sin(state.clock.getElapsedTime()) * valeurAnim;
  });

  return (
    <mesh ref={mesh} position={position}>
      <MeshWobbleMaterial
        opacity={0.4}
        attach="material"
        factor={0.6}
        speed={3}
        color="#908e00"
      />
      <boxBufferGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

export function Cone({position, color, delay, speed, factor, opacity, args} : PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  // const anim = useSpring({
  //   from: { position: [0, 0, 0] },
  //   to: async next => {
  //     await next({ position: [0, 5, 0] });
  //     await next({ position: [0, 0, 0] });
  //   },
  //   reset: true
  // });

  const valeurAnim = getRandomFloat(0.4, 5);

  useFrame((state) => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    ref.position.y = Math.sin(state.clock.getElapsedTime()) * valeurAnim;
  });

  return (
    <a.mesh ref={mesh} position={position}>
      <MeshWobbleMaterial
        opacity={0.4}
        attach="material"
        factor={0.6}
        speed={3}
        color="#0271a8"
      />
      <coneBufferGeometry args={[0.7, 1, 3]} />
    </a.mesh>
  );
}

export function Dodecagone({position, color, delay, speed, factor, opacity, args} : PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const valeurAnim = getRandomFloat(0.4, 5);

  useFrame((state) => {
    // ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    ref.position.y = Math.sin(state.clock.getElapsedTime()) * valeurAnim;
  });

  return (
    <mesh ref={mesh} position={position}>
      <MeshWobbleMaterial
        opacity={0.4}
        attach="material"
        factor={0.6}
        speed={3}
        color="#880f0f"
      />
      <dodecahedronGeometry args={[1.5, 0]} />
    </mesh>
  );
}

export function Torus({position, color, delay, speed, factor, opacity, args} : PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const valeurAnim = getRandomFloat(0.4, 5);

  useFrame((state) => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    ref.position.y = Math.sin(state.clock.getElapsedTime()) * valeurAnim;
  });

  return (
    <mesh ref={mesh} position={position}>
      <MeshDistortMaterial
        opacity={0.4}
        attach="material"
        distort={0.6}
        speed={2.5}
        color="#0d7237"
      />
      <torusBufferGeometry args={[1, 0.4, 4, 6]} />
    </mesh>
  );
}

export function Sphere({position, color, delay, speed, factor, opacity, args} : PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const valeurAnim = getRandomFloat(0.4, 5);

  useFrame((state) => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    ref.position.y = Math.sin(state.clock.getElapsedTime()) * valeurAnim;
  });

  return (
    <mesh ref={mesh} position={position}>
      <MeshDistortMaterial
        opacity={0.4}
        attach="material"
        distort={0.6}
        speed={2.5}
        color="#8E518D"
      />
      <sphereBufferGeometry args={[1, 50, 50]} />
    </mesh>
  );
}
