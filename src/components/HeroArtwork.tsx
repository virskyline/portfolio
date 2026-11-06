import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function GlassCore() {
  const core = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const pointer = state.pointer;
    if (core.current) {
      core.current.rotation.y += delta * 0.12;
      core.current.rotation.x = THREE.MathUtils.damp(core.current.rotation.x, pointer.y * 0.16, 3, delta);
      core.current.position.x = THREE.MathUtils.damp(core.current.position.x, pointer.x * 0.12, 3, delta);
    }
    if (shell.current) {
      shell.current.rotation.y -= delta * 0.08;
      shell.current.rotation.z += delta * 0.035;
    }
    if (ring.current) {
      ring.current.rotation.x = 0.82 + pointer.y * 0.08;
      ring.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group>
      <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.22}>
        <mesh ref={shell} scale={1.48}>
          <icosahedronGeometry args={[1, 4]} />
          <meshPhysicalMaterial
            color="#3781fc"
            metalness={0.08}
            roughness={0.12}
            transmission={0.92}
            thickness={1.6}
            ior={1.34}
            clearcoat={1}
            clearcoatRoughness={0.08}
            attenuationColor="#1951fc"
            attenuationDistance={2.4}
            transparent
            opacity={0.92}
          />
        </mesh>
        <mesh ref={core} scale={0.9}>
          <icosahedronGeometry args={[1, 5]} />
          <MeshDistortMaterial
            color="#0b2cb1"
            roughness={0.16}
            metalness={0.24}
            distort={0.22}
            speed={1.1}
            radius={1}
            clearcoat={1}
            clearcoatRoughness={0.12}
          />
        </mesh>
        <mesh scale={0.53}>
          <icosahedronGeometry args={[1, 3]} />
          <meshPhysicalMaterial
            color="#cbe9fd"
            emissive="#1951fc"
            emissiveIntensity={0.55}
            roughness={0.18}
            metalness={0.35}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <group ref={ring} rotation={[0.82, 0, -0.28]}>
        <mesh>
          <torusGeometry args={[1.95, 0.012, 12, 180]} />
          <meshBasicMaterial color="#78c1fc" transparent opacity={0.52} />
        </mesh>
        <mesh rotation={[0.12, 0.18, 0.14]}>
          <torusGeometry args={[2.12, 0.006, 8, 180]} />
          <meshBasicMaterial color="#cbe9fd" transparent opacity={0.28} />
        </mesh>
      </group>
      <Sparkles count={46} scale={5.8} size={2.2} speed={0.22} opacity={0.62} color="#cbe9fd" />
      <pointLight color="#78c1fc" intensity={16} distance={6} position={[2.2, 1.8, 2.5]} />
      <pointLight color="#1951fc" intensity={20} distance={7} position={[-2.2, -1.4, -1.8]} />
    </group>
  );
}

export default function HeroArtwork() {
  return (
    <div className="pointer-events-none relative h-[340px] w-full sm:h-[440px] lg:h-[560px]" aria-label="Abstract blue liquid-glass 3D artwork">
      <div className="absolute inset-[15%] rounded-full bg-[#1951fc]/20 blur-[90px]" />
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6.5], fov: 38 }}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        fallback={<div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(120,193,252,.25),transparent_65%)]" />}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 5]} intensity={2.1} color="#ffffff" />
        <directionalLight position={[-4, -2, 3]} intensity={1.5} color="#78c1fc" />
        <Environment preset="city" />
        <GlassCore />
      </Canvas>
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#cbe9fd]/20 bg-[#03195b]/30 px-4 py-2 text-[10px] tracking-[.24em] text-[#cbe9fd]/80 backdrop-blur-xl">
        DESIGN · CODE · SHIP
      </div>
    </div>
  );
}
