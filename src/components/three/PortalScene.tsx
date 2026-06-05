import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import type { Group, Mesh } from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const CARD_LABELS = ['AI', 'Build', 'Grow', 'Create'] as const
const CARD_POSITIONS: [number, number, number][] = [
  [-2.4, 0.6, 0.4],
  [2.3, -0.4, 0.2],
  [0.3, 2.0, -0.3],
  [-1.5, -1.2, 0.6],
]

function FloatingPathCard({
  position,
  delay,
}: {
  position: [number, number, number]
  delay: number
}) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2
  })

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[1.0, 0.62, 0.05]} />
        <meshStandardMaterial
          color="#050816"
          emissive="#2F7CFF"
          emissiveIntensity={0.2}
          transparent
          opacity={0.92}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </Float>
  )
}

function Gateway() {
  const groupRef = useRef<Group>(null)
  const outerRing = useRef<Mesh>(null)
  const midRing = useRef<Mesh>(null)
  const reduced = useReducedMotion()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.35 + t * 0.05
      groupRef.current.rotation.x = mouse.y * 0.12
    }
    if (outerRing.current) outerRing.current.rotation.z = t * 0.12
    if (midRing.current) midRing.current.rotation.z = -t * 0.08
  })

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        if (reduced) return
        setMouse({ x: (e.pointer.x ?? 0) * 0.5, y: (e.pointer.y ?? 0) * 0.25 })
      }}
    >
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
        <mesh ref={outerRing}>
          <torusGeometry args={[2.0, 0.05, 32, 128]} />
          <meshStandardMaterial
            color="#2F7CFF"
            emissive="#2F7CFF"
            emissiveIntensity={1}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      <mesh ref={midRing}>
        <torusGeometry args={[1.35, 0.025, 32, 100]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.7}
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh>
        <torusGeometry args={[0.7, 0.015, 24, 64]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.45, 48, 48]} />
        <MeshDistortMaterial
          color="#2F7CFF"
          emissive="#4D8FFF"
          emissiveIntensity={0.5}
          distort={0.2}
          speed={1.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {CARD_POSITIONS.map((pos, i) => (
        <FloatingPathCard key={CARD_LABELS[i]} position={pos} delay={i * 0.8} />
      ))}
    </group>
  )
}

function SceneContent() {
  const reduced = useReducedMotion()

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color="#2F7CFF" />
      <pointLight position={[-5, -3, 3]} intensity={0.7} color="#8B5CF6" />
      <pointLight position={[0, -4, 2]} intensity={0.4} color="#22D3EE" />
      <Gateway />
      {!reduced && (
        <Stars radius={100} depth={50} count={800} factor={2.5} saturation={0} fade speed={0.3} />
      )}
    </>
  )
}

function PortalFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="glow-ring h-56 w-56 rounded-full border border-blue/30 bg-gradient-to-br from-blue/20 to-violet/10 sm:h-72 sm:w-72" />
      <div className="absolute h-32 w-32 animate-pulse-glow rounded-full border border-cyan/20 sm:h-40 sm:w-40" />
      <div className="absolute h-48 w-48 rounded-full border border-violet/15 sm:h-56 sm:w-56" />
    </div>
  )
}

export function PortalScene() {
  const reduced = useReducedMotion()

  if (reduced) return <PortalFallback />

  return (
    <div className="relative h-[380px] w-full sm:h-[460px] lg:h-[560px]">
      <Suspense fallback={<PortalFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
