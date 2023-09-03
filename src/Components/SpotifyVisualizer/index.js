import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const SpotifyChart = ({ data, size = 100 }) => {
  const meshRef = useRef();
  const Knot = () => {
    const [isHovered, setHovered] = useState(false);
    const gValue = Math.floor((data?.valence / 100) * 255);
    const bValue = 255 - gValue;
    const tempo = data?.tempo / 100;
    const danceability = data?.danceability;
    const energy = data?.energy / 100;
    const loudness = data?.loudness / 100;
    useFrame(() => {
      if (meshRef.current) {
        const rotationSpeedY = isHovered ? 0.0005 : tempo / 2500;
        const rotationSpeedX = isHovered ? 0.0005 : danceability / 2500;

        meshRef.current.rotation.x += rotationSpeedX;
        meshRef.current.rotation.y += rotationSpeedY;
      }
    });

    return (
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={1}
      >
        <torusKnotGeometry args={[loudness / 5, energy, 300, 300]} />
        <meshStandardMaterial
          color={`rgb(255, ${gValue}, ${bValue})`}
          roughness={0}
        />
      </mesh>
    );
  };

  return (
    <>
      <Canvas
        style={{ width: `${size}vw`, height: `${size}vh` }}
        shadows
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 0, 5]} color="yellow" intensity={50} />
        <pointLight position={[-5, 0, -5]} color="blue" intensity={50} />
        <pointLight position={[0, 5, 0]} color="red" intensity={50} />
        <Knot />
      </Canvas>
    </>
  );
};

export default SpotifyChart;
