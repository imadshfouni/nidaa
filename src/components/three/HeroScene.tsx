import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import type { Group, Mesh } from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function Portal() {
  const groupRef = useRef<Group>(null)
  const ringRef = useRef<Mesh>(null)
  const innerRef = useRef<Mesh>(null)
  const reduced = useReducedMotion()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (reduced) return
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.3 + t * 0.08
      groupRef.current.rotation.x = mouse.y * 0.15
    }
    if (ringRef.current) ringRef.current.rotation.z = t * 0.15
    if (innerRef.current) innerRef.current.rotation.z = -t * 0.1
  })

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        if (reduced) return
        setMouse({
          x: (e.pointer.x ?? 0) * 0.5,
          y: (e.pointer.y ?? 0) * 0.3,
        })
      }}
    >
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={ringRef}>
          <torusGeometry args={[1.8, 0.06, 32, 100]} />
          <meshStandardMaterial
            color="#2F7CFF"
            emissive="#2F7CFF"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      <mesh ref={innerRef}>
        <torusGeometry args={[1.2, 0.03, 32, 100]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color="#2F7CFF"
          emissive="#4D8FFF"
          emissiveIntensity={0.4}
          distort={0.25}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>

      <FloatingCard position={[-2.2, 0.8, 0.5]} label="AI" delay={0} />
      <FloatingCard position={[2.1, -0.5, 0.3]} label="Build" delay={0.5} />
      <FloatingCard position={[0.5, 1.8, -0.4]} label="Grow" delay={1} />
    </group>
  )
}

function FloatingCard({
  position,
  delay,
}: {
  position: [number, number, number]
  label: string
  delay: number
}) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime + delay) * 0.15
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[0.9, 0.55, 0.04]} />
        <meshStandardMaterial
          color="#0B1020"
          emissive="#2F7CFF"
          emissiveIntensity={0.15}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Label plane - simplified as smaller emissive box */}
      <mesh position={[position[0], position[1], position[2] + 0.03]}>
        <planeGeometry args={[0.5, 0.12]} />
        <meshBasicMaterial color="#2F7CFF" transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

function SceneContent() {
  const reduced = useReducedMotion()

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#2F7CFF" />
      <pointLight position={[-4, -2, 2]} intensity={0.6} color="#8B5CF6" />
      <Portal />
      {!reduced && (
        <Stars radius={80} depth={40} count={1200} factor={3} saturation={0} fade speed={0.5} />
      )}
    </>
  )
}

function HeroSceneFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="glow-ring h-64 w-64 rounded-full bg-gradient-to-br from-blue/30 to-violet/20 blur-sm" />
      <div className="absolute h-32 w-32 rounded-full border border-blue/40 bg-blue/10" />
      <div className="absolute h-48 w-48 animate-pulse rounded-full border border-violet/30" />
    </div>
  )
}

export function HeroScene() {
  const reduced = useReducedMotion()

  if (reduced) {
    return <HeroSceneFallback />
  }

  return (
    <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
      <Suspense fallback={<HeroSceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
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
