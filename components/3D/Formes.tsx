import { useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial, MeshDistortMaterial, TransformControls } from "@react-three/drei";
import { useControls } from "leva";
import { a, useSpring } from "react-spring/three";

export function Composition() {
  // const { position } = useControls({
  //   position: {
  //     value: [0, 0, 0],
  //     min: [-20, -20, -20],
  //     max: [20, 20, 20],
  //     step: 0.1,
  //   },
  // });

  // Avec caméra perspective
  // positions X , de -8 à 8
  // positions Y , de 4 à -4
  // positions Z, de -6 à 6

  return (
    <group>
      <TransformControls>
        <Dodecagone
          factor={0.6}
          speed={2}
          delay={1000}
          color="#880f0f"
          opacity={0.2}
          position={[-7.5, 1.3, -3]}
          args={[1.5, 0]}
          minRange={1.1}
          maxRange={1.1}
          inverser={true}
          valRotation={0.001}
        />
      </TransformControls>
      <Cube
        position={[3.1, 1.4, 1]}
        delay={650}
        args={[1, 1, 1]}
        opacity={0.3}
        factor={0.6}
        speed={3}
        color="#908e00"
        minRange={1.23}
        maxRange={0.5}
        inverser={true}
        valRotation={-0.003}
      />
      <Cube
        position={[-2.1, 2.6, -1]}
        delay={0}
        args={[1, 1, 1]}
        opacity={0.2}
        factor={0.6}
        speed={3}
        color="#7e1399"
        minRange={1.5}
        maxRange={1.5}
        valRotation={0.003}
      />
      <Sphere
        factor={0.6}
        speed={2}
        delay={2000}
        opacity={0.4}
        args={[1, 50, 50]}
        color="#8E518D"
        position={[6, -1.6, -2.2]}
        minRange={0.7}
        maxRange={0.7}
        inverser={true}
        valRotation={-0.01}
      />
      <Sphere
        factor={0.3}
        speed={3}
        delay={100}
        opacity={0.2}
        args={[1, 50, 50]}
        color="#0f4d22"
        position={[-0.5, 1.6, -12.2]}
        minRange={0.4}
        maxRange={0.7}
        inverser={false}
        valRotation={0.007}
      />
      <Torus
        color="#0d7237"
        args={[1, 0.4, 4, 6]}
        factor={0.4}
        delay={750}
        opacity={0.2}
        speed={2.5}
        position={[-2, -1.9, -5]}
        minRange={1.2}
        maxRange={1.2}
        valRotation={-0.007}
      />
      <Cone
        args={[0.7, 1, 3]}
        color="#0271a8"
        opacity={0.4}
        delay={480}
        factor={0.3}
        speed={3}
        position={[1.1, -3.3, 0]}
        minRange={0.9}
        maxRange={0.9}
        inverser={false}
        valRotation={-0.005}
      />
       <Cone
        args={[1, 1, 3]}
        color="#772828"
        opacity={0.4}
        delay={1780}
        factor={0.3}
        speed={3}
        position={[9.2, 5.3, -7]}
        minRange={0.4}
        maxRange={0.6}
        inverser={true}
        valRotation={-0.01}
      />
    </group>
  );
}

export function Cube({
  position,
  color,
  delay = 0,
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
  inverser = false,
  valRotation,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(inverser);

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
   if(ref) ref.rotation.x = ref.rotation.y = ref.rotation.z += valRotation;
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
  delay = 0,
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
  inverser = false,
  valRotation,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(inverser);

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
    if(ref) ref.rotation.x = ref.rotation.y = ref.rotation.z += valRotation;
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
  delay = 0,
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
  inverser = false,
  valRotation,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(inverser);

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
    if(ref) ref.rotation.x = ref.rotation.y = ref.rotation.z += valRotation;
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
  delay = 0,
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
  valRotation,
  inverser = false,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(inverser);

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
    if(ref) ref.rotation.x = ref.rotation.y = ref.rotation.z += valRotation;
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
  delay = 0,
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
  valRotation,
  inverser = false,
}: PropsForme) {
  const mesh = useRef<MeshProps>();

  const ref = mesh.current;

  const [descend, setDescend] = useState(inverser);

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
    if(ref) ref.rotation.x = ref.rotation.y = ref.rotation.z += valRotation;
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

type PropsForme = {
  /**position de la forme X Y Z */
  position: number[];
  /** couleur de la forme , string , hex, rgb */
  color: string;
  /** opacité de la forme entre 0 et 1 */
  opacity: number;
  /** vitesse de l'animation de wobble ou distortion */
  speed: number;
  /** facteur de puissance de la distortion */
  factor: number;
  /** délai de l'animation de position, en MS */
  delay: number;
  /** constructeur de la forme */
  args: number[];
  /** valeur minimale de l'animation de pos y */
  minRange: number;
  /** valeur maximale de l'animation de pos y */
  maxRange: number;
  /** masse de la forme */
  mass?: number;
  /** la force énergétique du spring */
  tension?: number;
  /** la résistance du spring */
  friction?: number;
  /** si vrai, l'animation ne vas pas overshoot */
  clamp?: boolean;
  /** si vrai, commencer l'animation dans l'autre sens */
  inverser?: boolean;
  /** valeur positive ou négative pour l'animation de rotation de la forme */
  valRotation: number;
};
