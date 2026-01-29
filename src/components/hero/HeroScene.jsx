import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* =========================
   EARTH (UNCHANGED)
========================= */
function Earth() {
  const { scene } = useGLTF("/models/earth_hologram.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#5ad7ff",
          emissive: "#2aa9ff",
          emissiveIntensity: 0.6,
          transparent: true,
          opacity: 0.45,
          metalness: 0.1,
          roughness: 0.2,
          wireframe: true
        });
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={1.8}
      position={[2.8, -0.8, 0]}
      rotation={[0, Math.PI * 0.15, 0]}
    />
  );
}

/* =========================
   PARALLAX + TWINKLING STARS
========================= */
function Stars() {
  const ref = useRef();
  const materialRef = useRef();
  const { mouse } = useThree();

  const count = 400;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 2] = -10 - Math.random() * 25;
  }

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    ref.current.rotation.y = mouse.x * 0.15;
    ref.current.rotation.x = mouse.y * 0.1;

    materialRef.current.opacity = 0.65 + Math.sin(t * 1.5) * 0.25;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        ref={materialRef}
        size={0.28}
        color="#9fe7ff"
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

/* =========================
   SCENE (MOBILE SAFE)
========================= */
export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // 🔥 RULE 1: Disable 3D on mobile
  if (isMobile) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -3, -5]} intensity={0.6} />

      <Suspense fallback={null}>
        <Stars />
        <Earth />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/earth_hologram.glb");
