import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import type { Group, Mesh } from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function FloatingCard({
  position,
  color,
  delay,
}: {
  position: [number, number, number]
  color: string
  delay: number
}) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.15
  })

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[0.85, 0.5, 0.04]} />
        <meshStandardMaterial
          color="#111827"
          emissive={color}
          emissiveIntensity={0.45}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
    </Float>
  )
}

function Universe() {
  const groupRef = useRef<Group>(null)
  const reduced = useReducedMotion()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (reduced || !groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = mouse.x * 0.25 + t * 0.04
    groupRef.current.rotation.x = mouse.y * 0.1
  })

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        if (reduced) return
        setMouse({ x: (e.pointer.x ?? 0) * 0.4, y: (e.pointer.y ?? 0) * 0.2 })
      }}
    >
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[0.55, 48, 48]} />
          <MeshDistortMaterial
            color="#3B82F6"
            emissive="#60A5FA"
            emissiveIntensity={0.35}
            distort={0.2}
            speed={1.2}
            roughness={0.15}
            metalness={0.2}
          />
        </mesh>
      </Float>

      <mesh position={[0, 0, -0.3]}>
        <torusGeometry args={[0.9, 0.025, 16, 80]} />
        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.5} transparent opacity={0.75} />
      </mesh>

      <mesh position={[0.6, 0.4, 0.2]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color="#C084FC" emissive="#C084FC" emissiveIntensity={0.55} />
      </mesh>

      <mesh position={[-0.5, -0.3, 0.3]}>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshStandardMaterial color="#F472B6" emissive="#F472B6" emissiveIntensity={0.45} />
      </mesh>

      <FloatingCard position={[-1.8, 0.5, 0.3]} color="#3B82F6" delay={0} />
      <FloatingCard position={[1.7, -0.3, 0.2]} color="#C084FC" delay={0.8} />
      <FloatingCard position={[0.2, 1.5, -0.2]} color="#22D3EE" delay={1.6} />
    </group>
  )
}

function UniverseFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary/30 via-cyan/20 to-violet/25 blur-sm" />
      <div className="absolute h-32 w-32 rounded-full border border-primary/30 bg-surface-raised/80 shadow-[0_0_40px_rgba(59,130,246,0.4)]" />
      <div className="absolute h-40 w-40 animate-pulse rounded-full border border-cyan/25" />
    </div>
  )
}

export function LearningUniverse() {
  const reduced = useReducedMotion()

  if (reduced) return <UniverseFallback />

  return (
    <div className="relative h-[340px] w-full sm:h-[400px] lg:h-[480px]">
      <Suspense fallback={<UniverseFallback />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
          <pointLight position={[-3, 2, 4]} intensity={0.8} color="#22D3EE" />
          <pointLight position={[3, -2, 4]} intensity={0.6} color="#C084FC" />
          <pointLight position={[0, 3, 2]} intensity={0.5} color="#3B82F6" />
          <Universe />
        </Canvas>
      </Suspense>
    </div>
  )
}
