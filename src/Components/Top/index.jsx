import React, { useRef, useMemo } from "react";
import { useQuery } from "react-query";
import queryTop from "../../api/queryTop";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader, DoubleSide, Vector3 } from "three";
import { Circle, Circle2, Circle3 } from "../../Controllers/Landing/elements";

const AlbumParticle = ({ url }) => {
  const texture = useMemo(() => {
    if (url) {
      return new TextureLoader().load(url);
    }
    return null;
  }, [url]);

  const mesh = useRef();
  const initialPos = new Vector3(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  );
  const velocity = new Vector3(
    (Math.random() - 0.5) * 0.005,
    (Math.random() - 0.5) * 0.005,
    (Math.random() - 0.5) * 0.005
  );

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y = 5;
      mesh.current.position.add(velocity);
      if (mesh.current.position.length() > 8) {
        velocity.negate();
      }
    }
  });

  if (!texture) return null;

  return (
    <mesh ref={mesh} position={initialPos}>
      <boxGeometry args={[0.01, 1]} />
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </mesh>
  );
};

const Top = () => {
  const { data, isLoading } = useQuery("top", async () => await queryTop());

  const albumCovers = data?.items.map((item) => item.album.images[0].url);

  return (
    <>
      <Circle />
      <Circle2 />
      <Circle3 />
      {!isLoading && (
        <Canvas style={{ width: "100vw", height: "100vh" }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[3, 0, 5]} color="yellow" intensity={3} />
          <pointLight position={[-5, 0, -5]} color="blue" intensity={5} />
          <pointLight position={[0, 5, 0]} color="red" intensity={5} />
          {albumCovers.map((url, index) => (
            <AlbumParticle key={index} url={url} />
          ))}
          {albumCovers.map((url, index) => (
            <AlbumParticle key={index} url={url} />
          ))}
          {albumCovers.map((url, index) => (
            <AlbumParticle key={index} url={url} />
          ))}
          {albumCovers.map((url, index) => (
            <AlbumParticle key={index} url={url} />
          ))}
        </Canvas>
      )}
    </>
  );
};

export default Top;
