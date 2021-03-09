import { useEffect, useRef } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Box, Sphere as S } from "@react-three/drei";
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
       {/* <Cube position={position} /> */}
       {/* <Boite position={position} scale={[1, 1, 1]} /> */}
      <Sphere position={position} />
    </group>
  );
}

export function Cube(props) {
  const mesh = useRef<MeshProps>();

  let refUtile = false;

  // attendre jusqu'a temps que la ref soit utile et non null
  useEffect(()=>{
    mesh != undefined && mesh != null && (refUtile = true);
  },[mesh])

  // animer quand la ref est utile
 refUtile && useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}

export function Cone(props) {
  const mesh = useRef<MeshProps>();

  let refUtile = false;

  // attendre jusqu'a temps que la ref soit utile et non null
  useEffect(()=>{
    mesh != undefined && mesh != null && (refUtile = true);
  },[mesh])

  // animer quand la ref est utile
 refUtile && useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <coneBufferGeometry args={[1, 1, 30]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}

export function Torus(props) {
  const mesh = useRef<MeshProps>();

  let refUtile = false;

  // attendre jusqu'a temps que la ref soit utile et non null
  useEffect(()=>{
    mesh != undefined && mesh != null && (refUtile = true);
  },[mesh])

  // animer quand la ref est utile
 refUtile && useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} {...props}>
      <torusBufferGeometry args={[1, 1, 10]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}

export function Sphere(props) {
  const mesh = useRef<MeshProps>();

  let refUtile = false;

  // attendre jusqu'a temps que la ref soit utile et non null
  useEffect(()=>{
    mesh != undefined && mesh != null && (refUtile = true);
  },[mesh])

  // animer quand la ref est utile
 refUtile && useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <sphereBufferGeometry args={[1, 50, 50]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
}
