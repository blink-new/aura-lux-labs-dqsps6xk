import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { Mesh, Color } from 'three'

interface AuroraParticlesProps {
  count?: number
  timerPhase?: 'work' | 'break' | 'chill'
}

function AuroraParticles({ count = 3000, timerPhase = 'work' }: AuroraParticlesProps) {
  const meshRef = useRef<Mesh>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Positions
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 20
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Colors - Aurora gradient from mint to lime with glow
      const t = Math.random()
      const mintColor = new Color('#00FFD1')
      const limeColor = new Color('#ADFF2F')
      const color = mintColor.clone().lerp(limeColor, t)

      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.03
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.04

      const positions = meshRef.current.geometry.attributes.position.array as Float32Array
      const colors = meshRef.current.geometry.attributes.color.array as Float32Array

      for (let i = 0; i < count; i++) {
        const i3 = i * 3

        // Wave motion
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.0015

        // Phase-based intensity
        let intensity = 1
        switch (timerPhase) {
          case 'work':
            intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2
            break
          case 'break':
            intensity = 0.6 + Math.sin(state.clock.elapsedTime * 1.5) * 0.4
            break
          case 'chill':
            intensity = 0.4 + Math.sin(state.clock.elapsedTime * 0.8) * 0.6
            break
        }

        colors[i3] = Math.min(colors[i3] * intensity * 1.2, 1)
        colors[i3 + 1] = Math.min(colors[i3 + 1] * intensity * 1.2, 1)
        colors[i3 + 2] = Math.min(colors[i3 + 2] * intensity * 1.2, 1)
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true
      meshRef.current.geometry.attributes.color.needsUpdate = true
    }
  })

  return (
    <Points ref={meshRef} limit={count}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particles.colors}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation={true}
        depthWrite={false}
        blending={undefined} // default additive blending
      />
    </Points>
  )
}

interface AuroraBackgroundProps {
  timerPhase?: 'work' | 'break' | 'chill'
  className?: string
}

export default function AuroraBackground({ timerPhase = 'work', className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-20 ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-aurora-dark via-slate-900 to-aurora-dark" />

      {/* Three.js Aurora particles */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <AuroraParticles timerPhase={timerPhase} />
      </Canvas>

      {/* CSS Aurora overlay with volumetric light scattering */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-aurora-mint/20 via-transparent to-aurora-lime/20 animate-aurora-flow mix-blend-screen opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-mint/10 to-transparent animate-aurora-pulse mix-blend-screen opacity-30" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="aurora-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
              filter: 'drop-shadow(0 0 6px rgba(0, 255, 209, 0.6))'
            }}
          />
        ))}
      </div>
    </div>
  )
}