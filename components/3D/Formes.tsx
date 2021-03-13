import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial, MeshDistortMaterial, Html, } from "@react-three/drei";
import { a, useSpring } from "react-spring/three";
import { FaWindowClose} from 'react-icons/fa'
import type { PropsForme } from "../../lib/types";

export function Composition({ router }) {
  // gestion des états des formes
  const [texteSphere, setTexteSphere] = useState<string>("");
  const [ddcgnHover, setDdcgnHover] = useState(false);
  const [cubeHover, setCubeHover] = useState(false);
  const [modalActif, setModalActif] = useState(true);
  const [sphereHover, setSphereHover] = useState(false);
  const [etatCube, setEtatCube] = useState({
    color : "#908e00",
    speed : -0.003
  });
  const [etatSphere,setEtatSphere] = useState({
    args : [1, 50, 50],
    factor : 0.3,
    speed: 3
  });

  // animation de clic de la sphere verte
  function exploserSphere() {
    setEtatSphere({
      args: [1, 2, 3],
      factor: 1,
      speed: 5,
    });
    setTimeout(() => {
      setEtatSphere({
        args: [1, 50, 50],
        factor: 0.3,
        speed: 3,
      });
    }, 550);
  }

  // petite animation du cube jaune lors du clic
  function tournerCouleurCube() {
    setEtatCube({
      color: "#0b46b4",
      speed: -0.03
    })
    setTimeout(()=>{
      setEtatCube({
        color: "#908e00",
        speed: -0.003
      })
    },250)
  }

  // afficher un pointeur si on survole une forme interactive
  useEffect(() => {
    document.body.style.cursor = ddcgnHover || cubeHover || sphereHover ? 'pointer' : 'auto'
  }, [ddcgnHover, cubeHover, sphereHover])

  return (
    <group>
      <Forme
        typeForme="dodecagone"
        onClick={() => setTexteSphere("pouf !")}
        actif={ddcgnHover}
        hoverIn={() => setDdcgnHover(true)}
        hoverOut={() => setDdcgnHover(false)}
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
        hoverIn={()=>setCubeHover(true)}
        hoverOut={()=>setCubeHover(false)}
        onClick={()=>tournerCouleurCube()}
        actif={cubeHover}
        position={[3.1, 1.4, 1]}
        delay={650}
        args={[1, 1, 1]}
        opacity={0.3}
        factor={0.6}
        speed={3}
        color={etatCube.color}
        minRange={1.23}
        maxRange={0.5}
        inverser={true}
        valRotation={etatCube.speed}
      />

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
          <Html distanceFactor={10} transform>
            <h1 className="text-blue-600 transition-all transform hover:scale-125">
              {texteSphere}
            </h1>
          </Html>
        )}
      </Forme>
      <Forme
      onClick={()=>exploserSphere()}
        typeForme="sphere"
        hoverIn={()=> setSphereHover(true)}
        hoverOut={()=> setSphereHover(false)}
        actif={sphereHover}
        factor={etatSphere.factor}
        speed={etatSphere.speed}
        delay={100}
        opacity={0.2}
        args={etatSphere.args}
        color="#0f4d22"
        position={[-0.5, 1.6, -12.2]}
        minRange={0.4}
        maxRange={0.7}
        inverser={false}
        valRotation={0.007}
      >
        {router.pathname === "/bonus" && modalActif && (
          <Html distanceFactor={10} transform sprite>
            <div className="bg-gray-100 rounded-md shadow-lg relative flex flex-col justify-center items-center">
              <h1 className="text-blue-600 p-2 pr-4">Cet environnement est interactif !</h1>
              <FaWindowClose
              onClick={()=> setModalActif(false)}
                role="button"
                aria-label="fermer la fenetre modale"
                className="text-white cursor-pointer text-xl absolute right-4 top-2 transition-transform transform hover:scale-110"
                color="red"
              />
              <p className="w-3/4 text-blue-600 p-2">
                Déplacez-vous, interagissez, et expérimentez dans cet espace 3D
              </p>
            </div>
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
        typeForme="torus"
        color="#8faf00"
        args={[1, 0.4, 4, 6]}
        factor={0.4}
        delay={2250}
        opacity={0.5}
        speed={2.5}
        position={[-15, 2.9, -25]}
        minRange={2.2}
        maxRange={1.2}
        inverser={true}
        valRotation={0.007}
      />
      <Forme
        typeForme="torusknot"
        color="#8f0847"
        factor={0.4}
        delay={1050}
        opacity={0.4}
        speed={2.5}
        position={[-9, -2.9, -10]}
        minRange={0.8}
        maxRange={0.3}
        inverser={false}
        valRotation={0.01}
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
  color = "#438329",
  delay = 0,
  speed = 2.5,
  factor = 0.7,
  opacity = 1,
  args,
  minRange = 0.7,
  maxRange = 0.7,
  clamp = true,
  friction = 45,
  tension = 26,
  mass = 30,
  inverser = false,
  valRotation = 0.01,
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
  const animFloat = useSpring({
    from: { position: [position[0], position[1] - minRange, position[2]] },
    to: { position: [position[0], position[1] + maxRange, position[2]] },
    reverse: descend,
    onRest: () => setDescend(!descend),
    config: { friction: friction, tension: tension, mass: mass, clamp: clamp },
    delay: delay,
  });

  // animation d'échelle
  const animScale = useSpring({
    scale: actif ? [1.5,1.5,1.5] : [1,1,1]
  })

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
      case "torusknot":
        return <torusKnotBufferGeometry args={args} />;
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
      ref={mesh}
      castShadow
      receiveShadow
      position={position}
      {...animFloat}
      {...animScale}
    >
      {
        typeForme !== "cube" && typeForme !== "dodecagone" ? 
        ( //@ts-ignore
          <MeshDistortMaterial opacity={opacity} distort={factor} speed={speed} color={color} /> 
        ) 
        : 
        ( //@ts-ignore
          <MeshWobbleMaterial opacity={opacity} factor={factor} speed={speed} color={color} />
        )
      }
      {children}
      {forme}
    </a.mesh>
  );
}