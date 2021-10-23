import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import MeModal from "./Me";
import { OrbitControls } from "@react-three/drei";
import React from "react";
// Geometry
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -4, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />{" "}
      <meshStandardMaterial attach="material" color="#83f7ff" />{" "}
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />{" "}
      <meshStandardMaterial attach="material" color="#83f7ff" />{" "}
    </mesh>
  );
}

// Lights
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={7}
      height={7}
      color={color}
      intensity={brightness}
      position={[-6, 5, 8]}
      lookAt={[0, 0, 0]}
      rotation={[-0.5, -0.2, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      rotation={[0, 0.2, 0]}
      penumbra={2}
      castShadow
    />
  );
}
function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[0, 0, -2]}
      rotation={[180, 0, 0]}
      castShadow
    />
  );
}

export default function MeCanvas() {
  return (
    <Canvas>
      <BackDrop />
      <KeyLight brightness={8} color="#fdfdfd" />
      <FillLight brightness={1.5} color="#ffffff" />
      {/* <ambientLight /> */}
      <RimLight brightness={10} color="#bef0ff" />
      <OrbitControls />
      <Suspense fallback={<p>loading...</p>}>
        <MeModal />
      </Suspense>
      <GroundPlane />
    </Canvas>
  );
}
