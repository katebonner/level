import React, { useRef, useState } from "react";
import SpotifyAuth from "../../spotify/auth";
import { Circle, Circle2, Circle3, Description, Logo } from "./elements";
import { Canvas, useFrame } from "@react-three/fiber";

const Landing = () => {
  const spotifyAuth = SpotifyAuth();

  const Cube = () => {
    const meshRef = useRef();
    const [isHovered, setHovered] = useState(false);

    // Rotating animation
    useFrame(() => {
      if (meshRef.current) {
        const rotationSpeed = isHovered ? 0.0005 : 0.005;
        meshRef.current.rotation.x += rotationSpeed;
        meshRef.current.rotation.y += rotationSpeed;
      }
    });

    const handleCubeClick = () => {
      window.location.href = `${spotifyAuth.AUTH_ENDPOINT}?client_id=${spotifyAuth.CLIENT_ID}&redirect_uri=${spotifyAuth.REDIRECT_URI}&response_type=${spotifyAuth.RESPONSE_TYPE}&scope=${spotifyAuth.SCOPE}`;
    };

    return (
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleCubeClick}
        scale={1}
      >
        <torusKnotGeometry args={[3, 0.4, 300, 300]} />
        <meshStandardMaterial color="#ab577e" metalness={0.5} roughness={0} />
      </mesh>
    );
  };

  return (
    <>
      <Circle />
      <Circle2 />
      <Circle3 />
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        shadows
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={3} />
        <pointLight position={[3, 0, 5]} color="yellow" intensity={30} />
        <pointLight position={[-5, 0, -5]} color="blue" intensity={50} />
        <pointLight position={[0, 5, 0]} color="red" intensity={50} />
        <Cube />
      </Canvas>
      {/* <Logo>SYNETHESIA</Logo> */}
      <Description>TAP THE SPIRAL TO SYNC WITH SPOTIFY</Description>
    </>
  );
};

export default Landing;
