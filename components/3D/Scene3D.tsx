
import { Canvas  } from "react-three-fiber";
import Boite from './Boite';
import {Cone, Sphere, Torus} from "./Formes";

export default function Scene3D() {

  const NUM = 100;
  const formes = new Array(NUM).fill(null);

  return (
    <Canvas style={{height: '100%', width: '100%', position: "fixed", top:0, left: 0}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <Boite position={[-1.2, 0, 0]} />
      <Boite position={[1.2, 0, 0]} />
      <Cone position={[1.2, 0, 0]}/> */}
      {
        formes.map((_,i) => (
          <group key={i}>
            <Sphere scale={[0.5,0.5,0.5]} position={[5 - Math.random()*10, 5- Math.random()*10,0]} />
            {/* <Torus position={[5 - Math.random()*10, 5- Math.random()*10,0]}/> */}
            {/* <Boite position={[5 - Math.random()*10, 5- Math.random()*10,0]}/> */}
            {/* <Cone position={[5 - Math.random()*10, 5- Math.random()*10,0]}/> */}
          </group>
        ))
      }
    </Canvas>
  );
}
