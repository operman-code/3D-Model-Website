import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useSpring, a } from '@react-spring/three'

export default function PlaneViewer({ targetPosition }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <AnimatedPlane targetPosition={targetPosition} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
}

function AnimatedPlane({ targetPosition }) {
  const model = useGLTF('/basic_plane.glb')
  const planeRef = useRef()

  const { position } = useSpring({
    position: targetPosition,
    config: { mass: 1, tension: 170, friction: 26 },
  })

  return (
    <a.primitive ref={planeRef} object={model.scene} scale={0.5} position={position} />
  )
}