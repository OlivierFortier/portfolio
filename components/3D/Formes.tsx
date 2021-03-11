import { useEffect, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { a, useSpring } from "react-spring/three";
import { config } from "react-spring";
import { getRandomFloat } from "../../lib/helpers";

type PropsForme = {
  /**position de la forme X Y Z */
  position?: number[];
  /** couleur de la forme , string , hex, rgb */
  color?: string;
  /** opacité de la forme entre 0 et 1 */
  opacity?: number;
  /** vitesse de l'animation de wobble ou distortion */
  speed?: number;
  /** facteur de puissance de la distortion */
  factor?: number;
  /** délai de l'animation de position, en MS */
  delay?: number;
  /** constructeur de la forme */
  args?: number[];
  /** valeur minimale de l'animation de pos y */
  minRange?: number;
  /** valeur maximale de l'animation de pos y */
  maxRange?: number;
  /** masse de la forme */
  mass?: number;
  /** la force énergétique du spring */
  tension?: number;
  /** la résistance du spring */
  friction?: number;
  /** si vrai, l'animation ne vas pas overshoot */
  clamp?: boolean;
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
        speed={2}
        delay={1000}
        color="#880f0f"
        opacity={0.4}
        position={[4.5, 0, -2.2]}
        args={[1.5, 0]}
        minRange={1.1}
        maxRange={1.4}
      />
      <CubeTest
        position={[3.1, 1.4, 1]}
        delay={250}
        args={[1, 1, 1]}
        opacity={0.4}
        factor={0.6}
        speed={3}
        color="#908e00"
        minRange={2}
        maxRange={2.7}
      />
      <Cube
        position={[-2.1, 4.6, -5]}
        delay={0}
        args={[1, 1, 1]}
        opacity={0.4}
        factor={0.6}
        speed={3}
        color="#7e1399"
        minRange={1}
        maxRange={4.2}
      />
      <Sphere
        factor={0.6}
        speed={2}
        delay={570}
        opacity={0.6}
        args={[1, 50, 50]}
        color="#8E518D"
        position={[-7.5, 0, -3]}
        minRange={3.1}
        maxRange={3.7}
      />
      <Torus
        color="#0d7237"
        args={[1, 0.4, 4, 6]}
        factor={0.4}
        delay={750}
        opacity={0.4}
        speed={2.5}
        position={[1.1, -4.3, -14.6]}
        minRange={0.5}
        maxRange={0.8}
      />
      <Cone
        args={[0.7, 1, 3]}
        color="#0271a8"
        opacity={0.4}
        delay={1300}
        factor={0.6}
        speed={3}
        position={[4.8, -1.9, 0]}
        minRange={2}
        maxRange={2}
      />
    </group>
  );
}

export function CubeTest({
  position,
  color,
  delay,
  speed,
  factor,
  opacity,
  args,
  minRange,
  maxRange,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(false);

  // animation haut bas
  const spring = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  useFrame(() => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
  });

  return (
    <a.mesh ref={mesh} position={position} {...spring}>
      <MeshWobbleMaterial
        opacity={opacity}
        factor={factor}
        speed={speed}
        color={color}
      />
      <boxBufferGeometry args={args} />
    </a.mesh>
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
  minRange,
  maxRange,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(false);

  // animation haut bas
  const spring = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  useFrame(() => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
  });

  return (
    <a.mesh ref={mesh} position={position} {...spring}>
      <MeshWobbleMaterial
        opacity={opacity}
        factor={factor}
        speed={speed}
        color={color}
      />
      <boxBufferGeometry args={args} />
    </a.mesh>
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
  minRange,
  maxRange,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(false);

  // animation haut bas
  const spring = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  useFrame(() => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
  });

  return (
    <a.mesh ref={mesh} position={position} {...spring}>
      <MeshWobbleMaterial
        opacity={opacity}
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
  minRange,
  maxRange,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(false);

  // animation haut bas
  const spring = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  useFrame(() => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
  });

  return (
    <a.mesh ref={mesh} position={position} {...spring}>
      <MeshWobbleMaterial
        opacity={opacity}
        factor={factor}
        speed={speed}
        color={color}
      />
      <dodecahedronGeometry args={args} />
    </a.mesh>
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
  minRange,
  maxRange,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(false);

  // animation haut bas
  const spring = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  useFrame(() => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
  });

  return (
    <a.mesh ref={mesh} position={position} {...spring}>
      <MeshDistortMaterial
        opacity={opacity}
        distort={factor}
        speed={speed}
        color={color}
      />
      <torusBufferGeometry args={args} />
    </a.mesh>
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
  minRange,
  maxRange,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(false);

  // animation haut bas
  const spring = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  useFrame(() => {
    ref.rotation.x = ref.rotation.y = ref.rotation.z += 0.01;
  });

  return (
    <a.mesh ref={mesh} position={position} {...spring}>
      <MeshDistortMaterial
        opacity={opacity}
        distort={factor}
        speed={speed}
        color={color}
      />
      <sphereBufferGeometry args={args} />
    </a.mesh>
  );
}
