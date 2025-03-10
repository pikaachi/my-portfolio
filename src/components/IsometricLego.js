import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

const LegoPiece = ({ position, color, index }) => {
  const ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "power2.inOut" });

    // Stack Animation
    tl.to(ref.current.position, {
      y: position[1],
      duration: 0.8,
      delay: index * 0.3,
    });

    // De-stack Animation (Move back down)
    tl.to(ref.current.position, {
      y: position[1] - 2, // Move down before looping
      duration: 0.8,
      delay: 0.2,
    });

  }, [position, index]);

  return (
    <mesh ref={ref} position={[position[0], position[1] - 2, position[2]]} castShadow>
      <boxGeometry args={[1.5, 0.5, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const IsometricLego = () => {
  return (
    <Canvas
      camera={{ position: [3, 3, 3], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} castShadow />
      
      {/* Stacking and De-stacking LEGO Pieces */}
      <LegoPiece position={[0, 0, 0]} color="#ff5733" index={0} />
      <LegoPiece position={[0, 0.6, 0]} color="#33ff57" index={1} />
      <LegoPiece position={[0, 1.2, 0]} color="#3357ff" index={2} />
      <LegoPiece position={[0, 1.8, 0]} color="#faff33" index={3} />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default IsometricLego;
