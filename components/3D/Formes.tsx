import { useRef } from "react";
import { MeshProps, useFrame } from "react-three-fiber";

export function Cone(props) {
  const mesh = useRef<MeshProps>();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <coneBufferGeometry attach="geometry" args={[1, 1, 30]} />
      <meshStandardMaterial attach="material" color={"yellow"} />
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
        <torusBufferGeometry attach="geometry" args={[1, 1, 10]} />
        <meshStandardMaterial attach="material" color={"yellow"} />
      </mesh>
    );
  }


  export function Sphere(props) {
    const mesh = useRef<MeshProps>();

    useFrame(()=> {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    })

    return (
      <mesh ref={mesh} {...props}>
        <sphereBufferGeometry attach="geometry" args={[3, 3, 3]}/>
        <meshStandardMaterial attach="material" color="blue"/>
      </mesh>
    )

  }