import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpiderWebCursor() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch { return; }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 50);
    camera.position.z = 20;
    const pointer = new THREE.Vector2();
    const target = new THREE.Vector2();
    const dragStart = new THREE.Vector2();
    let active = false;
    let dragging = false;
    let raf = 0;

    const spokes = 20, radialSteps = 18, rings = 8, ringSteps = 72;
    const maxSegments = spokes * radialSteps + rings * ringSteps + 1;
    const positions = new Float32Array(maxSegments * 2 * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    const material = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: { value: 0 }, uPointer: { value: new THREE.Vector2() } },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uPointer;
        varying vec3 vPosition;
        void main() {
          float shimmer = 0.5 + 0.5 * sin(uTime * 1.4 + vPosition.x * 3.0 + vPosition.y * 2.4);
          float hue = 0.5 + 0.5 * sin(vPosition.x * 1.8 - vPosition.y + uTime * 0.3);
          vec3 color = mix(vec3(0.48, 0.78, 1.0), vec3(0.62, 0.66, 1.0), hue * 0.38);
          float glow = 1.0 - smoothstep(0.0, 0.9, distance(vPosition.xy, uPointer));
          gl_FragColor = vec4(color + glow * 0.08, 0.24 + shimmer * 0.36);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    const web = new THREE.LineSegments(geometry, material);
    scene.add(web);

    const dewGeometry = new THREE.SphereGeometry(0.016, 8, 8);
    const dewMaterial = new THREE.MeshBasicMaterial({ color: 0xcbe9fd, transparent: true, opacity: 0.8 });
    const dew = new THREE.InstancedMesh(dewGeometry, dewMaterial, spokes * 4);
    dew.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(dew);
    const dummy = new THREE.Object3D();

    const dragPositions = new Float32Array(6);
    const dragGeometry = new THREE.BufferGeometry();
    dragGeometry.setAttribute("position", new THREE.BufferAttribute(dragPositions, 3));
    const dragMaterial = new THREE.LineBasicMaterial({ color: 0xcbe9fd, transparent: true, opacity: 0.85 });
    const dragLine = new THREE.Line(dragGeometry, dragMaterial);
    dragLine.visible = false;
    scene.add(dragLine);

    const resize = () => {
      const aspect = window.innerWidth / Math.max(window.innerHeight, 1);
      camera.left = -5 * aspect; camera.right = 5 * aspect;
      camera.top = 5; camera.bottom = -5;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    };
    const move = (event: PointerEvent) => {
      const aspect = window.innerWidth / Math.max(window.innerHeight, 1);
      target.set((event.clientX / window.innerWidth - 0.5) * 10 * aspect, (0.5 - event.clientY / window.innerHeight) * 10);
      active = true;
    };
    const down = (event: PointerEvent) => { move(event); dragging = true; dragStart.copy(target); };
    const up = () => { dragging = false; dragLine.visible = false; };
    const leave = () => { active = false; dragging = false; dragLine.visible = false; };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", up);
    document.addEventListener("pointerleave", leave);

    const segment = (offset: number, x1: number, y1: number, x2: number, y2: number) => {
      positions[offset] = x1; positions[offset + 1] = y1; positions[offset + 2] = 0;
      positions[offset + 3] = x2; positions[offset + 4] = y2; positions[offset + 5] = 0;
      return offset + 6;
    };

    const animate = (time: number) => {
      raf = requestAnimationFrame(animate);
      pointer.lerp(target, 0.24);
      material.uniforms.uTime.value = time * 0.001;
      material.uniforms.uPointer.value.copy(pointer);
      web.visible = dew.visible = active;
      if (!active) { renderer.render(scene, camera); return; }

      let offset = 0;
      const radius = 0.62;
      for (let i = 0; i < spokes; i++) {
        const angle = i / spokes * Math.PI * 2;
        let px = pointer.x, py = pointer.y;
        for (let step = 1; step <= radialSteps; step++) {
          const t = step / radialSteps, r = radius * t;
          const x = pointer.x + Math.cos(angle) * r;
          const y = pointer.y + Math.sin(angle) * r - Math.sin(t * Math.PI) * 0.016;
          offset = segment(offset, px, py, x, y); px = x; py = y;
        }
      }
      for (let ring = 1; ring <= rings; ring++) {
        const r = ring / rings * radius;
        for (let step = 0; step < ringSteps; step++) {
          const a = step / ringSteps * Math.PI * 2;
          const b = (step + 1) / ringSteps * Math.PI * 2;
          const waveA = Math.sin(a * 3 + time * 0.0004 + ring) * 0.008;
          const waveB = Math.sin(b * 3 + time * 0.0004 + ring) * 0.008;
          offset = segment(offset,
            pointer.x + Math.cos(a) * (r + waveA), pointer.y + Math.sin(a) * (r + waveA),
            pointer.x + Math.cos(b) * (r + waveB), pointer.y + Math.sin(b) * (r + waveB));
        }
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.setDrawRange(0, offset / 3);

      let index = 0;
      for (let i = 0; i < spokes; i++) for (let ring = 1; ring <= 4; ring++) {
        const angle = i / spokes * Math.PI * 2, r = ring / 4 * radius;
        dummy.position.set(pointer.x + Math.cos(angle) * r, pointer.y + Math.sin(angle) * r, 0.03);
        dummy.scale.setScalar(0.6 + 0.4 * (0.5 + 0.5 * Math.sin(time * 0.0015 + i + ring)));
        dummy.updateMatrix(); dew.setMatrixAt(index++, dummy.matrix);
      }
      dew.instanceMatrix.needsUpdate = true;

      dragLine.visible = dragging;
      if (dragging) {
        dragPositions.set([dragStart.x, dragStart.y, 0.04, pointer.x, pointer.y, 0.04]);
        dragGeometry.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", up);
      document.removeEventListener("pointerleave", leave);
      geometry.dispose(); material.dispose(); dewGeometry.dispose(); dewMaterial.dispose();
      dragGeometry.dispose(); dragMaterial.dispose(); renderer.dispose(); renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="spider-web-cursor" aria-hidden="true" />;
}
