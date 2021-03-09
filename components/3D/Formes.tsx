import { useEffect, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei";
import { useControls } from "leva";

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
      <Cube position={[-2.1, 4.6, -5]} />
      <Sphere position={[-7.5, 0, -3]} />
      <Torus position={[1.1, -4.3, -14.6]} />
      <Cone position={[4.8, -1.9, 0]} />
    </group>
  );
}

export function Cube(props) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  useFrame(() => {
    ref.rotation.x = ref.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <MeshWobbleMaterial
        attach="material"
        factor={0.6} // Strength, 0 disables the effect (default=1)
        speed={3} // Speed (default=1)
        color="#fcf6bd"
      />
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={"yellow"} /> */}
    </mesh>
  );
}

export function Cone(props) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  useFrame(() => {
    ref.rotation.x = ref.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <MeshDistortMaterial
        attach="material"
        distort={0.6} // Strength, 0 disables the effect (default=1)
        speed={2.5} // Speed (default=1)
        color="#a9def9"
      />
      <coneBufferGeometry args={[0.5, 1, 50]} />
      {/* <meshStandardMaterial color={"green"} /> */}
    </mesh>
  );
}

export function Torus(props) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  useFrame(() => {
    ref.rotation.x = ref.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <MeshDistortMaterial
        attach="material"
        distort={0.6} // Strength, 0 disables the effect (default=1)
        speed={2.5} // Speed (default=1)
        color="#d0f4de"
      />
      <torusBufferGeometry args={[1, 0.4, 4, 6]} />
      {/* <meshStandardMaterial color={"yellow"} /> */}
    </mesh>
  );
}

export function Sphere(props) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;
  useFrame(() => {
    ref.rotation.x = ref.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <MeshDistortMaterial
        attach="material"
        distort={0.6} // Strength, 0 disables the effect (default=1)
        speed={2.5} // Speed (default=1)
        color="#ff99c8"
      />
      <sphereBufferGeometry args={[1, 50, 50]} />
      {/* <meshStandardMaterial color="lightblue" /> */}
    </mesh>
  );
}
