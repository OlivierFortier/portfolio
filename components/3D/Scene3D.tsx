
import { Canvas  } from "react-three-fiber";
import Box from './Boite';

export default function Scene3D() {
  return (
    <Canvas style={{height: '100%', width: '100%', position: "absolute"}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
