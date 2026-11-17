
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface DeveloperCoreProps {
  reducedMotion: boolean
}

function DeveloperCore({ reducedMotion }: DeveloperCoreProps) {
  const coreRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (reducedMotion || !coreRef.current || !ringRef.current) return

    const elapsed = state.clock.elapsedTime

    coreRef.current.rotation.x = THREE.MathUtils.lerp(
      coreRef.current.rotation.x,
      state.pointer.y * -0.25 + Math.sin(elapsed * 0.3) * 0.1,
      0.04,
    )

    coreRef.current.rotation.y = THREE.MathUtils.lerp(
      coreRef.current.rotation.y,
      state.pointer.x * 0.35 + elapsed * 0.25,
      0.04,
    )

    ringRef.current.rotation.x += delta * 0.12
    ringRef.current.rotation.y += delta * 0.18
  })

  return (
    <group>
      <Float
        speed={reducedMotion ? 0 : 1.5}
        rotationIntensity={reducedMotion ? 0 : 0.25}
        floatIntensity={reducedMotion ? 0 : 0.5}
      >
        <group ref={coreRef}>
          <mesh>
            <icosahedronGeometry args={[1.15, 1]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#0891b2"
              emissiveIntensity={0.5}
              metalness={0.7}
              roughness={0.2}
              wireframe
            />
          </mesh>

          <mesh>
            <sphereGeometry args={[0.65, 24, 24]} />
            <meshStandardMaterial
              color="#0e7490"
              emissive="#06b6d4"
              emissiveIntensity={0.8}
              metalness={0.8}
              roughness={0.25}
              transparent
              opacity={0.45}
            />
          </mesh>
        </group>
      </Float>

      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[1.65, 0.012, 8, 80]} />
          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
          />
        </mesh>

        <mesh rotation={[0.8, 0.5, 0.4]}>
          <torusGeometry args={[1.85, 0.008, 8, 80]} />
          <meshBasicMaterial
            color="#3b82f6"
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

function DeveloperScene() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <div
      className="relative h-[320px] w-full sm:h-[420px] lg:h-[500px]"
      role="img"
      aria-label="Decorative 3D visualization of a rotating geometric technology core"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.25]}
        frameloop={reducedMotion ? 'demand' : 'always'}
        performance={{ min: 0.5 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'low-power',
        }}
        fallback={
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            3D visualization is unavailable on this device.
          </div>
        }
      >
        <ambientLight intensity={0.7} />
        <pointLight
          position={[3, 3, 3]}
          intensity={2}
          color="#22d3ee"
        />
        <pointLight
          position={[-3, -2, 2]}
          intensity={1.5}
          color="#3b82f6"
        />

        <DeveloperCore reducedMotion={reducedMotion} />
      </Canvas>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-cyan-400/[0.06] blur-[90px]"
      />
    </div>
  )
}

export default DeveloperScene
