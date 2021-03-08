import  { useRef } from "react";
import {  MeshProps, useFrame } from "react-three-fiber";


export default function Box(props) {

    const mesh = useRef<MeshProps>();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}