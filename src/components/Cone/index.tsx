import { useFrame } from "@react-three/fiber";
import type { MeshProps } from "@react-three/fiber";
import React, { useRef } from "react";
import type { BufferGeometry, Material, Mesh } from "three";

type Props = {
  color: string;
} & MeshProps;

function Cone({ color, ...rest }: Props) {
  const mesh = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
    mesh.current.rotation.z += delta;
  });

  return (
    <mesh {...rest} ref={mesh}>
      <coneGeometry args={[0.5, 0.7, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cone;
