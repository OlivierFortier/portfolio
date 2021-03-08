import { useRef } from "react";
import { MeshProps, useFrame } from "react-three-fiber";

export default function Boite(props) {
  const mesh = useRef<MeshProps>();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"hotpink"} />
    </mesh>
  );
}
