import { ReactNode, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import {
  MeshWobbleMaterial,
  MeshDistortMaterial,
  Html,
} from "@react-three/drei";
import { a, useSpring } from "react-spring/three";

export function Composition({ router }) {

  const [texteSphere, setTexteSphere] = useState<string>("");
  const [ddcgnHover, setDdcgnHover] = useState(false);

  return (
    <group>
      <Forme
        typeForme="dodecagone"
        onClick={()=>setTexteSphere('pouf !')}
        actif={ddcgnHover}
        hoverIn={()=>setDdcgnHover(true)}
        hoverOut={()=>setDdcgnHover(false)}
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

      <Forme
        typeForme="cube"
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

      <Forme
        typeForme="dodecagone"
        position={[-2.1, 2.6, -1]}
        delay={0}
        args={[1.5, 0]}
        opacity={0.2}
        factor={0.6}
        speed={3}
        color="#7e1399"
        minRange={1.5}
        maxRange={1.5}
        valRotation={0.003}
      ></Forme>

      <Forme
        typeForme="cube"
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
      ></Forme>
      <Forme
        typeForme="sphere"
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
      >
        {router.pathname === "/bonus" && (
          <Html distanceFactor={10} transform sprite>
            <h1 className="text-blue-600 transition-all animate-bounce transform hover:scale-125">
              {texteSphere}
            </h1>
          </Html>
        )}
      </Forme>
      <Forme
        typeForme="sphere"
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
      >
        {router.pathname === "/bonus" && (
          <Html distanceFactor={10} transform sprite>
            <h1 className="text-blue-600">Amusez-vous !</h1>
            <p className="w-3/4 text-blue-600">
              Déplacez-vous, interagissez, et expérimentez dans cet espace 3D
            </p>
          </Html>
        )}
      </Forme>
      <Forme
        typeForme="torus"
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
      <Forme
        typeForme="cone"
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
      <Forme
        typeForme="cone"
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

export function Forme({
  typeForme = "cube",
  children,
  position,
  color='#438329',
  delay = 0,
  speed= 2.5,
  factor= 0.7,
  opacity = 1,
  args,
  minRange= 0.7,
  maxRange= 0.7,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
  inverser = false,
  valRotation= 0.01,
  actif = false,
  hoverIn,
  hoverOut,
  onClick,
}: PropsForme) {
  
  // obtention de référence à l'élément pour le manipuler
  const mesh = useRef<MeshProps>();
  const ref = mesh.current;

  // état de la direction de l'animation
  const [descend, setDescend] = useState(inverser);

  // animation flottante haut/bas
  const spring = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  // animation constante de rotation dans tous les axes
  useFrame(() => {
    if (ref) ref.rotation.x = ref.rotation.y = ref.rotation.z += valRotation;
  });

  // retourner une forme selon le type passé en props
  const forme = useMemo(() => {
    switch (typeForme) {
      case "cube":
        return <boxBufferGeometry args={args} />;
      case "sphere":
        return <sphereBufferGeometry args={args} />;
      case "cone":
        return <coneBufferGeometry args={args} />;
      case "torus":
        return <torusBufferGeometry args={args} />;
      case "dodecagone":
        return <dodecahedronBufferGeometry args={args} />;
      default:
        return <boxBufferGeometry args={args} />;
    }
  }, []);

  return (
    <a.mesh
      onPointerUp={() => onClick && onClick()}
      onPointerOver={() => hoverIn && hoverIn()}
      onPointerOut={() => hoverOut && hoverOut()}
      scale={actif ? [1.5,1.5,1.5] : [1,1,1]}
      ref={mesh}
      castShadow
      receiveShadow
      position={position}
      {...spring}
    >
      { //@ts-ignore
        <MeshWobbleMaterial opacity={opacity} factor={factor} speed={speed} color={color} />
      }
      {children}
      {forme}
    </a.mesh>
  );
}

type PropsForme = {
  /** type possible de la forme */
  typeForme: "sphere" | "cube" | "cone" | "dodecagone" | "torus";
  /**position de la forme X Y Z */
  position: [number,number,number];
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
  /** si vrai, commencer l'animation dans l'autre sens */
  inverser?: boolean;
  /** valeur positive ou négative pour l'animation de rotation de la forme */
  valRotation: number;
  /** composants enfant de la forme */
  children?: ReactNode;
  /** fonction à exécuter au clic de la forme */
  onClick?: () => void;
  /** état actif ou non de l'élément */
  actif?: boolean;
  /** fonction a exécuter lors du survol de la forme */
  hoverIn?: () => void;
  /** fonction à exécuter quand on cesse de survoler la forme */
  hoverOut?: () => void;
};
