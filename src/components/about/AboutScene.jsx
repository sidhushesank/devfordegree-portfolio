import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/businessman 3d model.glb");

  return (
    <primitive
      object={scene}
      scale={3.2}              // 🔥 BIGGER model
      position={[0, -0.3, 0]}  // 🔥 lift model UP (fix cropping)
      rotation={[0, 0.15, 0]}
    />
  );
}

export default function AboutScene() {
  return (
    <Canvas
      camera={{
        position: [0, 1.4, 5.2], // 🔥 camera higher & pulled back
        fov: 38,
      }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 6, 5]} intensity={1.3} />

      <Environment preset="city" />

      <Model />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 2.4}
      />
    </Canvas>
  );
}
