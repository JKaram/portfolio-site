/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
// @ts-nocheck
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function MeModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/me.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.06, 0.26, -0.5]} rotation={[0, -1.54, 0]} scale={1.9}>
        <mesh geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials["Inner Mouth"]} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Hair} />
      </group>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials.Eyes}
        position={[0.15, 0.5, 0.16]}
        rotation={[0, -1.54, 0]}
        scale={[-0.06, -0.07, -0.06]}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials.Tounge}
        position={[-0.1, -0.29, -0.19]}
        rotation={[0, -1.54, 0]}
        scale={[-0.13, 0.09, -0.13]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-0.08, -0.12, -0.01]}
        rotation={[0, -1.54, -0.29]}
        scale={[0.04, -0.05, -0.23]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-0.09, -0.33, 0]}
        rotation={[2.45, 1.55, 1.05]}
        scale={[0.03, -0.04, -0.17]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0.63, 0.38, -0.26]}
        rotation={[-1.47, -1.28, -3.03]}
        scale={[0.15, 0.03, 0.12]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[-0.05, 0.21, 0.18]}
        rotation={[0, -1.54, 0]}
        scale={-0.16}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={materials["Eyes.001"]}
        position={[-0.25, 0.5, 0.16]}
        rotation={[0, -1.54, 0]}
        scale={[-0.06, -0.07, -0.06]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["skin.001"]}
        position={[-0.79, 0.38, -0.26]}
        rotation={[1.48, -1.24, -0.07]}
        scale={[0.15, 0.03, 0.12]}
      />
    </group>
  );
}

useGLTF.preload("/me.glb");