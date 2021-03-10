import { useEffect, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { a, useSpring } from "react-spring/three";
import { getRandomFloat } from "../../lib/helpers";

type PropsForme = {
  /**position de la forme X Y Z */
  position?: number[];
  /** couleur de la forme , string , hex, rgb */
  color?: string;
  /** opacité de la forme entre 0 et 1 */
  opacity?: number;
  /** vitesse de l'animation */
  speed?: number;
  /** facteur de puissance de la distortion */
  factor?: number;
  /** délai de l'animation */
  delay?: number;
  /** constructeur de la forme */
  args?: number[];
};

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
      <Dodecagone
        factor={0.6}
        speed={3}
        color="#880f0f"
        opacity={0.4}
        position={[4.5, 0, -2.2]}
        args={[1.5, 0]}
      />
      <Cube
        position={[-2.1, 4.6, -5]}
        delay={-5}
        args={[1, 1, 1]}
        opacity={0.4}
        factor={0.6}
        speed={3}
        color="#908e00"
      />
      <Sphere
        factor={0.6}
        speed={2.5}
        args={[1, 50, 50]}
        color="#8E518D"
        position={[-7.5, 0, -3]}
      />
      <Torus
        color="#0d7237"
        args={[1, 0.4, 4, 6]}
        factor={0.6}
        opacity={0.4}
        speed={2.5}
        position={[1.1, -4.3, -14.6]}
      />
      <Cone
        args={[0.7, 1, 3]}
        color="#0271a8"
        opacity={0.4}
        factor={0.6}
        speed={3}
        position={[4.8, -1.9, 0]}
      />
    </group>
  );
}

export function Cube({
  position,
  color,
  delay,
  speed,
  factor,
  opacity,
  args,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const valeurAnim = getRandomFloat(0.4, 1.7);

  useFrame((state) => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    ref.position.y =
      Math.sin(state.clock.getElapsedTime()) * valeurAnim * delay;
  });

  return (
    <mesh ref={mesh} position={position}>
      <MeshWobbleMaterial
        opacity={opacity}
        attach="material"
        factor={factor}
        speed={speed}
        color={color}
      />
      <boxBufferGeometry args={args} />
    </mesh>
  );
}

export function Cone({
  position,
  color,
  delay,
  speed,
  factor,
  opacity,
  args,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const valeurAnim = getRandomFloat(0.4, 5);

  useFrame((state) => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
    ref.position.y = Math.sin(state.clock.getElapsedTime()) * valeurAnim;
  });

  return (
    <a.mesh ref={mesh} position={position}>
      <MeshWobbleMaterial
        opacity={opacity}
        attach="material"
        factor={factor}
        speed={speed}
        color={color}
      />
      <coneBufferGeometry args={args} />
    </a.mesh>
  );
}

export function Dodecagone({
  position,
  color,
  delay,
  speed,
  factor,
  opacity,
  args,
}: PropsForme) {
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
        opacity={opacity}
        attach="material"
        factor={factor}
        speed={speed}
        color={color}
      />
      <dodecahedronGeometry args={args} />
    </mesh>
  );
}

export function Torus({
  position,
  color,
  delay,
  speed,
  factor,
  opacity,
  args,
}: PropsForme) {
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
        opacity={opacity}
        attach="material"
        distort={factor}
        speed={speed}
        color={color}
      />
      <torusBufferGeometry args={args} />
    </mesh>
  );
}

export function Sphere({
  position,
  color,
  delay,
  speed,
  factor,
  opacity,
  args,
}: PropsForme) {
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
        opacity={opacity}
        attach="material"
        distort={factor}
        speed={speed}
        color={color}
      />
      <sphereBufferGeometry args={args} />
    </mesh>
  );
}
