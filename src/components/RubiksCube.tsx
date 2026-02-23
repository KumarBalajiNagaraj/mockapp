"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

/* ═══════════════════════════════════════════════════════════════
   Rubik's Cube — 3D WebGL Hero with Layer Rotations
   Cycles through AI service keywords at regular intervals
   ═══════════════════════════════════════════════════════════════ */

/* ─── Theme ─── */
const C = {
  cream: "#fffefa",
  primary: "#ff612b",
  primaryDark: "#d44d1a",
  primaryLight: "#fff0eb",
  dark: "#181818",
  border: "#e0ddd8",
  filler: "#f0eee9",
  gap: "#3a3a3a",
}

/* ─── Cell type ─── */
interface Cell {
  letter: string
  group: number // 0 = filler, 1-6 = word group for staggered highlight
}
const _ = (letter: string, group: number): Cell => ({ letter, group })
const dot: Cell = { letter: "·", group: 0 }

/* ─── Keyword Rounds — real moring.ai service terms ─── */
interface Round { faces: Cell[][][] }

// Face index: 0=front(+z), 1=back(-z), 2=right(+x), 3=left(-x), 4=top(+y), 5=bottom(-y)
const rounds: Round[] = [
  {
    // Round 0: AI Foundation
    faces: [
      [[_("A",1),_("G",1),_("E",1)],[_("N",1),_("T",1),_("I",1)],[_("C",1),dot,dot]],       // Front: AGENTIC
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Back
      [[_("M",2),_("L",2),dot],[_("O",3),_("P",3),_("S",3)],[dot,dot,dot]],                    // Right: ML, OPS
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Left
      [[_("A",4),_("P",4),_("I",4)],[dot,dot,dot],[_("R",5),_("A",5),_("G",5)]],              // Top: API, RAG
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Bottom
    ],
  },
  {
    // Round 1: Document & Ops
    faces: [
      [[_("D",1),_("O",1),_("C",1)],[dot,_("A",2),_("I",2)],[dot,dot,dot]],                   // Front: DOC, AI
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Back
      [[_("S",3),_("R",3),_("E",3)],[dot,dot,dot],[_("O",4),_("P",4),_("S",4)]],              // Right: SRE, OPS
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Left
      [[_("N",5),_("L",5),_("P",5)],[dot,dot,dot],[_("L",6),_("L",6),_("M",6)]],              // Top: NLP, LLM
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Bottom
    ],
  },
  {
    // Round 2: Sales & Growth
    faces: [
      [[_("R",1),_("O",1),_("I",1)],[dot,dot,dot],[_("W",2),_("I",2),_("N",2)]],              // Front: ROI, WIN
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Back
      [[_("G",3),_("P",3),_("T",3)],[dot,_("R",4),_("A",4)],[dot,_("G",4),dot]],              // Right: GPT, RAG
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Left
      [[_("D",5),_("E",5),_("A",5)],[_("L",5),dot,dot],[dot,dot,dot]],                         // Top: DEAL
      [[dot,dot,dot],[dot,dot,dot],[dot,dot,dot]],                                               // Bottom
    ],
  },
]

/* ─── Cell Texture Factory ─── */
function makeCellTex(cell: Cell, solved: boolean, alpha: number): THREE.CanvasTexture {
  const S = 512
  const cv = document.createElement("canvas")
  cv.width = S; cv.height = S
  const c = cv.getContext("2d")!
  const p = 10, r = 20

  c.fillStyle = C.cream
  c.fillRect(0, 0, S, S)

  // Rounded cell
  c.beginPath(); c.roundRect(p, p, S - p * 2, S - p * 2, r); c.closePath()

  if (solved) {
    // Vibrant orange — extra saturated to stay punchy through ACES tonemapping
    const g = c.createLinearGradient(p, p, S - p, S - p)
    g.addColorStop(0, "#ff5500")
    g.addColorStop(1, "#dd3500")
    c.fillStyle = g
  } else if (cell.group > 0) {
    c.fillStyle = C.primaryLight
  } else {
    c.fillStyle = C.filler
  }
  c.fill()

  // Bevel highlight
  c.save(); c.clip()
  const hl = c.createLinearGradient(0, p, 0, p + 80)
  hl.addColorStop(0, solved ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)")
  hl.addColorStop(1, "rgba(255,255,255,0)")
  c.fillStyle = hl
  c.fillRect(p, p, S - p * 2, 80)
  c.restore()

  // Border
  c.beginPath(); c.roundRect(p, p, S - p * 2, S - p * 2, r)
  c.strokeStyle = solved ? C.primaryDark : C.border
  c.lineWidth = solved ? 3 : 2
  c.stroke()

  // Content
  if (cell.letter !== "·") {
    c.globalAlpha = Math.max(0, Math.min(1, alpha))
    c.fillStyle = solved ? "#ffffff" : C.dark
    c.font = `700 ${S * 0.44}px "Inter", system-ui, -apple-system, sans-serif`
    c.textAlign = "center"
    c.textBaseline = "middle"
    if (solved) {
      c.shadowColor = "rgba(0,0,0,0.3)"
      c.shadowBlur = 6
      c.shadowOffsetY = 3
    }
    c.fillText(cell.letter, S / 2, S / 2 + 4)
    c.shadowColor = "transparent"
    c.globalAlpha = 1
  } else {
    // Dot grid for filler
    c.save()
    c.beginPath(); c.roundRect(p, p, S - p * 2, S - p * 2, r); c.clip()
    c.fillStyle = "rgba(24,24,24,0.1)"
    for (let dx = 20; dx < S - p * 2; dx += 22)
      for (let dy = 20; dy < S - p * 2; dy += 22) {
        c.beginPath(); c.arc(p + dx, p + dy, 2, 0, Math.PI * 2); c.fill()
      }
    c.restore()
  }

  const tex = new THREE.CanvasTexture(cv)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

/* ─── Grid helpers ─── */
function getCellCoords(fi: number, ix: number, iy: number, iz: number) {
  const m = (v: number) => v + 1, inv = (v: number) => 2 - v
  switch (fi) {
    case 0: return { row: inv(m(iy)), col: m(ix) }
    case 1: return { row: inv(m(iy)), col: inv(m(ix)) }
    case 2: return { row: inv(m(iy)), col: inv(m(iz)) }
    case 3: return { row: inv(m(iy)), col: m(iz) }
    case 4: return { row: inv(m(iz)), col: m(ix) }
    case 5: return { row: m(iz), col: m(ix) }
    default: return { row: 0, col: 0 }
  }
}

function isExterior(gx: number, gy: number, gz: number, fi: number) {
  return (
    (fi === 0 && gz === 1) || (fi === 1 && gz === -1) ||
    (fi === 2 && gx === 1) || (fi === 3 && gx === -1) ||
    (fi === 4 && gy === 1) || (fi === 5 && gy === -1)
  )
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

/* ─── Pre-compute max group per round ─── */
const maxGroupPerRound = rounds.map(r =>
  Math.max(0, ...r.faces.flatMap(f => f.flat().map(c => c.group)))
)

/* ─── Main Component ─── */
export default function RubiksCube() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.0
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    el.appendChild(renderer.domElement)

    /* ── Scene & Camera ── */
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
    camera.position.set(8.5, 5.8, 8.5)
    camera.lookAt(0, 0, 0)

    /* ── Lighting ── */
    scene.add(new THREE.AmbientLight(0xfff8f0, 0.5))

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4)
    keyLight.position.set(6, 10, 6)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.set(1024, 1024)
    keyLight.shadow.camera.near = 0.5
    keyLight.shadow.camera.far = 30
    keyLight.shadow.camera.left = -5
    keyLight.shadow.camera.right = 5
    keyLight.shadow.camera.top = 5
    keyLight.shadow.camera.bottom = -5
    keyLight.shadow.bias = -0.0005
    keyLight.shadow.radius = 4
    scene.add(keyLight)

    scene.add(new THREE.DirectionalLight(0xe8e4df, 0.35).translateX(-4).translateY(3).translateZ(-5))

    const rimLight = new THREE.PointLight(new THREE.Color(C.primary).getHex(), 0.5, 20)
    rimLight.position.set(-2, -4, -3)
    scene.add(rimLight)

    scene.add(new THREE.DirectionalLight(0xffffff, 0.2).translateY(8))

    /* ── Shadow ground ── */
    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.ShadowMaterial({ opacity: 0.08 }))
    gnd.rotation.x = -Math.PI / 2
    gnd.position.y = -2.5
    gnd.receiveShadow = true
    scene.add(gnd)

    /* ── Cube group ── */
    const cubeGroup = new THREE.Group()
    scene.add(cubeGroup)

    const SZ = 1.06, GAP = 0.05, STEP = SZ + GAP

    const intMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(C.gap), roughness: 0.92, metalness: 0.08 })

    /* ── Sub-cube tracking ── */
    interface FaceMeta { slotIdx: number; faceIdx: number; row: number; col: number }
    interface SubCube {
      mesh: THREE.Mesh
      gx: number; gy: number; gz: number
      mats: THREE.Material[]
      faceMeta: FaceMeta[]
    }
    let subCubes: SubCube[] = []

    /* ── Build cubes ── */
    function buildCubes(roundIdx: number, solved: Set<number>, alpha: number) {
      // Dispose old
      subCubes.forEach(sc => {
        cubeGroup.remove(sc.mesh)
        sc.mats.forEach(m => {
          if (m !== intMat) {
            if ((m as any).map) (m as any).map.dispose()
            m.dispose()
          }
        })
        sc.mesh.geometry.dispose()
      })
      subCubes = []

      const round = rounds[roundIdx]
      const faceMap = [2, 3, 4, 5, 0, 1] // material slot → face index
      const coordPick = (slot: number, ix: number, iy: number, iz: number) =>
        [ix, ix, iy, iy, iz, iz][slot]
      const signPick = [1, -1, 1, -1, 1, -1]

      for (let ix = -1; ix <= 1; ix++) {
        for (let iy = -1; iy <= 1; iy++) {
          for (let iz = -1; iz <= 1; iz++) {
            const geo = new THREE.BoxGeometry(SZ, SZ, SZ, 2, 2, 2)
            // Subtle bevel
            const pos = geo.attributes.position
            const v = new THREE.Vector3()
            const bv = 0.05, hs = SZ / 2
            for (let i = 0; i < pos.count; i++) {
              v.fromBufferAttribute(pos, i)
              for (const axis of ["x", "y", "z"] as const) {
                const av = Math.abs(v[axis])
                if (av > hs - bv)
                  v[axis] = Math.sign(v[axis]) * (hs - bv + bv * Math.pow(Math.min(1, (av - (hs - bv)) / bv), 0.6))
              }
              pos.setXYZ(i, v.x, v.y, v.z)
            }
            geo.computeVertexNormals()

            const mats: THREE.Material[] = []
            const faceMeta: FaceMeta[] = []

            for (let slot = 0; slot < 6; slot++) {
              const fi = faceMap[slot]
              const coord = coordPick(slot, ix, iy, iz)
              if (coord === signPick[slot] && isExterior(ix, iy, iz, fi)) {
                const { row, col } = getCellCoords(fi, ix, iy, iz)
                const cell = round.faces[fi][row][col]
                const isSolved = cell.group > 0 && solved.has(cell.group)
                const tex = makeCellTex(cell, isSolved, alpha)
                const mat = new THREE.MeshPhysicalMaterial({
                  map: tex, roughness: 0.22, metalness: 0.0,
                  clearcoat: 0.4, clearcoatRoughness: 0.15, reflectivity: 0.3,
                })
                mats.push(mat)
                faceMeta.push({ slotIdx: slot, faceIdx: fi, row, col })
              } else {
                mats.push(intMat)
              }
            }

            const mesh = new THREE.Mesh(geo, mats)
            mesh.position.set(ix * STEP, iy * STEP, iz * STEP)
            mesh.castShadow = true
            mesh.receiveShadow = true
            cubeGroup.add(mesh)
            subCubes.push({ mesh, gx: ix, gy: iy, gz: iz, mats, faceMeta })
          }
        }
      }
    }

    /* ── Layer rotation ── */
    interface LayerRot {
      pivot: THREE.Group
      cubes: SubCube[]
      axis: "x" | "y" | "z"
      dir: number
      startTime: number
      duration: number
    }
    let activeRot: LayerRot | null = null

    function startLayerRotation(axis: "x" | "y" | "z", layer: number, dir: number) {
      if (activeRot) return
      const pivot = new THREE.Group()
      cubeGroup.add(pivot)
      const cubes = subCubes.filter(sc =>
        (axis === "x" ? sc.gx : axis === "y" ? sc.gy : sc.gz) === layer
      )
      cubes.forEach(sc => { cubeGroup.remove(sc.mesh); pivot.add(sc.mesh) })
      activeRot = { pivot, cubes, axis, dir, startTime: performance.now(), duration: 900 }
    }

    function finishLayerRotation() {
      if (!activeRot) return
      const { pivot, cubes, axis, dir } = activeRot
      const tmp = new THREE.Vector3()

      cubes.forEach(sc => {
        sc.mesh.updateWorldMatrix(true, false)
        sc.mesh.getWorldPosition(tmp)
        cubeGroup.worldToLocal(tmp)
        tmp.x = Math.round(tmp.x / STEP) * STEP
        tmp.y = Math.round(tmp.y / STEP) * STEP
        tmp.z = Math.round(tmp.z / STEP) * STEP
        pivot.remove(sc.mesh)
        cubeGroup.add(sc.mesh)
        sc.mesh.position.copy(tmp)
        // Update grid positions
        const ox = sc.gx, oy = sc.gy, oz = sc.gz
        if (axis === "y") { sc.gx = dir > 0 ? oz : -oz; sc.gz = dir > 0 ? -ox : ox }
        if (axis === "x") { sc.gy = dir > 0 ? -oz : oz; sc.gz = dir > 0 ? oy : -oy }
        if (axis === "z") { sc.gx = dir > 0 ? oy : -oy; sc.gy = dir > 0 ? -ox : ox }
      })

      cubeGroup.remove(pivot)
      activeRot = null
    }

    /* ── Particles ── */
    const PC = 35
    const pp = new Float32Array(PC * 3)
    const pv: { x: number; y: number; z: number }[] = []
    for (let i = 0; i < PC; i++) {
      const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), r = 3.5 + Math.random() * 3
      pp[i * 3] = r * Math.sin(ph) * Math.cos(th)
      pp[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
      pp[i * 3 + 2] = r * Math.cos(ph)
      pv.push({ x: (Math.random() - 0.5) * 0.003, y: (Math.random() - 0.5) * 0.003, z: (Math.random() - 0.5) * 0.003 })
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute("position", new THREE.BufferAttribute(pp, 3))
    const pMat = new THREE.PointsMaterial({
      color: new THREE.Color(C.primary), size: 0.035,
      transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    })
    scene.add(new THREE.Points(pGeo, pMat))

    /* ── Ring ── */
    const ringMat2 = new THREE.MeshBasicMaterial({ color: new THREE.Color(C.border), transparent: true, opacity: 0.12, side: THREE.DoubleSide })
    const ring = new THREE.Mesh(new THREE.RingGeometry(3.8, 3.84, 128), ringMat2)
    ring.rotation.x = Math.PI / 2.8; ring.rotation.z = 0.3
    scene.add(ring)

    /* ── Resize ── */
    function onResize() {
      const r = el!.getBoundingClientRect()
      renderer.setSize(r.width, r.height)
      camera.aspect = r.width / r.height
      camera.updateProjectionMatrix()
    }
    onResize()
    window.addEventListener("resize", onResize)

    /* ── Mouse ── */
    const mouse = { x: 0, y: 0 }
    function onMouse(e: MouseEvent) {
      const r = el!.getBoundingClientRect()
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1
    }
    window.addEventListener("mousemove", onMouse)

    /* ── State ── */
    let currentRound = 0
    const solved = new Set<number>()
    let roundStart = 0
    const SOLVE_GAP = 450
    const ROT_TRIGGER = 4800

    const rotSeq: { axis: "x" | "y" | "z"; layer: number; dir: number }[] = [
      { axis: "y", layer: 1, dir: 1 },
      { axis: "x", layer: 1, dir: -1 },
      { axis: "z", layer: -1, dir: 1 },
    ]
    let rotIdx = 0
    let rotTriggered = false

    // Build initial cubes — start fresh, animation will reveal & solve
    buildCubes(0, solved, 0)

    /* ── Animate ── */
    const t0 = performance.now()
    roundStart = t0
    let raf = 0
    let lastTexFrame = -1

    function animate() {
      if (disposed) return
      raf = requestAnimationFrame(animate)
      tick()
    }

    function tick() {
      if (disposed) return
      const now = performance.now()
      const t = (now - t0) * 0.001
      const re = now - roundStart // round elapsed

      // Letter reveal
      const alpha = Math.min(1, re / 1200)

      // Progressive solve
      const maxG = maxGroupPerRound[currentRound]
      let dirty = false
      for (let g = 1; g <= maxG; g++) {
        if (re > 800 + g * SOLVE_GAP && !solved.has(g)) {
          solved.add(g)
          dirty = true
        }
      }

      // Rebuild cubes on solve state change for guaranteed visual correctness
      // Also update during letter reveal phase (throttled every 150ms)
      const texFrame = Math.floor(re / 150)
      if (!activeRot && (dirty || (re < 1500 && texFrame !== lastTexFrame))) {
        buildCubes(currentRound, solved, alpha)
        lastTexFrame = texFrame
      }

      // Trigger layer rotation
      if (re > ROT_TRIGGER && !activeRot && !rotTriggered) {
        rotTriggered = true
        const r = rotSeq[rotIdx % rotSeq.length]
        startLayerRotation(r.axis, r.layer, r.dir)
        rotIdx++
      }

      // Animate rotation
      if (activeRot) {
        const prog = Math.min(1, (now - activeRot.startTime) / activeRot.duration)
        activeRot.pivot.rotation[activeRot.axis] = activeRot.dir * (Math.PI / 2) * easeInOutCubic(prog)

        if (prog >= 1) {
          finishLayerRotation()
          // Next round
          solved.clear()
          currentRound = (currentRound + 1) % rounds.length
          roundStart = now
          rotTriggered = false
          lastTexFrame = -1
          buildCubes(currentRound, solved, 0)
        }
      }

      // Rotation: auto + mouse follow
      const ty = mouse.x * 0.3, tx = mouse.y * 0.2
      cubeGroup.rotation.y += ((t * 0.08 + ty) - cubeGroup.rotation.y) * 0.012
      cubeGroup.rotation.x += ((Math.sin(t * 0.05) * 0.06 + 0.3 + tx) - cubeGroup.rotation.x) * 0.012

      // Entrance scale + subtle solve pulse
      const st = Math.min(1, (now - t0) / 1400)
      const baseScale = 1 - Math.pow(1 - st, 4)
      const solvePulse = dirty ? 0.008 : 0
      cubeGroup.scale.setScalar(baseScale + solvePulse)
      cubeGroup.position.y = Math.sin(t * 0.4) * 0.05

      // Particles
      const pa = pGeo.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < PC; i++) {
        pa.setX(i, pa.getX(i) + pv[i].x)
        pa.setY(i, pa.getY(i) + pv[i].y)
        pa.setZ(i, pa.getZ(i) + pv[i].z)
        const d = Math.sqrt(pa.getX(i) ** 2 + pa.getY(i) ** 2 + pa.getZ(i) ** 2)
        if (d > 7 || d < 2.5) { pv[i].x *= -1; pv[i].y *= -1; pv[i].z *= -1 }
      }
      pa.needsUpdate = true
      pMat.opacity = 0.12 + Math.sin(t * 0.6) * 0.05

      ring.rotation.z = 0.3 + Math.sin(t * 0.15) * 0.04
      ringMat2.opacity = 0.08 + Math.sin(t * 0.3) * 0.03

      rimLight.position.x = -2 + Math.sin(t * 0.2) * 1.5
      rimLight.position.z = -3 + Math.cos(t * 0.15) * 1.5

      renderer.render(scene, camera)
    }

    let disposed = false
    // Fallback timer ensures animation runs even when RAF is throttled (e.g. background tabs)
    const fallback = setInterval(() => { if (!disposed) tick() }, 50)
    const startTimer = setTimeout(() => {
      if (disposed) return
      setVisible(true)
      animate()
    }, 80)

    return () => {
      disposed = true
      clearTimeout(startTimer)
      clearInterval(fallback)
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouse)
      subCubes.forEach(sc => {
        sc.mats.forEach(m => { if (m !== intMat) m.dispose() })
        sc.mesh.geometry.dispose()
      })
      intMat.dispose(); pMat.dispose(); pGeo.dispose(); ringMat2.dispose()
      renderer.dispose(); scene.clear()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`w-full h-full transition-opacity duration-[1200ms] ease-out ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ minHeight: 480 }}
    />
  )
}
