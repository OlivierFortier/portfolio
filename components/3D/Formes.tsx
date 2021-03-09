import { useRef } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Box } from "@react-three/drei";

export function Composition() {
  return (
    <group>
      <Boite position={[0,0,0]}/>
    </group>
  );
}

export function Boite(props) {
  const mesh = useRef<MeshProps>();

  useFrame(
    () =>
      (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01)
  );

  return (
    <Box {...props} ref={mesh} args={[1, 1, 1]}>
      <meshBasicMaterial attach="material" color="hotpink" />
    </Box>
  );
}

export function Cone(props) {
  const mesh = useRef<MeshProps>();

  useFrame(() => {
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

  useFrame(() => {
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

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <sphereBufferGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}
