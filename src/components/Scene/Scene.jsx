import { Canvas } from 'react-three-fiber'
import { OrbitControls, Plane, softShadows, Sphere } from '@react-three/drei'

softShadows()

const Scene = () => {
  return (
    <Canvas shadowMap>
      <OrbitControls />

      <fog attach="fog" args={['black', 4, 8]} />

      <ambientLight intensity={0.25} />
      <directionalLight
        castShadow
        position={[0, 8, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <Sphere castShadow args={[1, 20, 20]} position={[0, 2, 0]}>
        <meshPhongMaterial color="white" attach="material" />
      </Sphere>

      <Plane receiveShadow rotation-x={Math.PI * -0.5} position={[0, -2, 0]} args={[8, 8, 1, 1]}>
        <shadowMaterial opacity={0.5} />
      </Plane>

      <Plane receiveShadow rotation-x={Math.PI * -0.5} position={[0, -2, 0]} args={[8, 8, 1, 1]}>
        <meshBasicMaterial opacity={0.5} />
      </Plane>
    </Canvas>
  )
}

export default Scene
