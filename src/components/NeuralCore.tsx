import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

/**
 * Neural Core — a scroll-driven particle system.
 *
 * Thousands of points morph between three shapes as you scroll the hero region:
 *   scattered data cloud  →  embedding sphere  →  agent knot  →  (dismantle back to cloud)
 *
 * Procedural (no model files). Reads window scroll directly; fades out below the hero so
 * it never fights lower sections for attention. Honors prefers-reduced-motion.
 */

const ACCENT = new THREE.Color('#00d4ff')
const VIOLET = new THREE.Color('#8b5cf6')

function buildShapes(count: number) {
  const scattered = new Float32Array(count * 3)
  const sphere = new Float32Array(count * 3)
  const knot = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const golden = Math.PI * (1 + Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const j = i * 3

    // scattered cloud
    scattered[j] = (Math.random() - 0.5) * 9
    scattered[j + 1] = (Math.random() - 0.5) * 9
    scattered[j + 2] = (Math.random() - 0.5) * 9

    // fibonacci sphere (embeddings)
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
    const theta = golden * i
    const r = 2.35
    sphere[j] = r * Math.cos(theta) * Math.sin(phi)
    sphere[j + 1] = r * Math.sin(theta) * Math.sin(phi)
    sphere[j + 2] = r * Math.cos(phi)

    // torus knot (agent graph) — p=2, q=3
    const t = (i / count) * Math.PI * 2
    const p = 2
    const q = 3
    const kr = 1.9 + Math.cos(q * t) * 0.85
    knot[j] = kr * Math.cos(p * t)
    knot[j + 1] = kr * Math.sin(p * t)
    knot[j + 2] = Math.sin(q * t) * 0.85

    // color gradient by index
    const c = ACCENT.clone().lerp(VIOLET, i / count)
    colors[j] = c.r
    colors[j + 1] = c.g
    colors[j + 2] = c.b
  }
  return { scattered, sphere, knot, colors }
}

const smooth = (t: number) => t * t * (3 - 2 * t)

function Particles({
  count,
  progress,
  pointer,
}: {
  count: number
  progress: { current: number }
  pointer: { current: { x: number; y: number } }
}) {
  const pointsRef = useRef<THREE.Points>(null)
  const geomRef = useRef<THREE.BufferGeometry>(null)
  const { scattered, sphere, knot, colors } = useMemo(() => buildShapes(count), [count])
  const positions = useMemo(() => scattered.slice(), [scattered])

  useFrame((_, delta) => {
    const geom = geomRef.current
    const pts = pointsRef.current
    if (!geom || !pts) return

    const p = progress.current
    let a: Float32Array, b: Float32Array, t: number
    if (p < 0.4) {
      a = scattered
      b = sphere
      t = p / 0.4
    } else if (p < 0.75) {
      a = sphere
      b = knot
      t = (p - 0.4) / 0.35
    } else {
      a = knot
      b = scattered
      t = (p - 0.75) / 0.25
    }
    t = smooth(Math.min(1, Math.max(0, t)))

    const arr = positions
    for (let i = 0; i < arr.length; i++) {
      arr[i] = a[i] + (b[i] - a[i]) * t
    }
    const attr = geom.getAttribute('position') as THREE.BufferAttribute
    attr.needsUpdate = true

    // idle spin + gentle pointer parallax
    pts.rotation.y += delta * 0.08
    pts.rotation.x += (pointer.current.y * 0.25 - pts.rotation.x) * 0.04
    pts.rotation.z += (pointer.current.x * 0.15 - pts.rotation.z) * 0.04
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geomRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

export default function NeuralCore() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const progress = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const count = useMemo(() => {
    if (typeof window === 'undefined') return 3200
    return window.innerWidth < 700 ? 1600 : 3600
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      progress.current = Math.min(1, Math.max(0, window.scrollY / (vh * 1.8)))
      // fade the canvas out as we leave the hero region
      if (wrapRef.current) {
        const fade = Math.max(0.12, 1 - window.scrollY / (vh * 1.25))
        wrapRef.current.style.opacity = String(fade)
      }
    }
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  if (reduced) return null

  return (
    <div
      ref={wrapRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 62 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles count={count} progress={progress} pointer={pointer} />
      </Canvas>
    </div>
  )
}
