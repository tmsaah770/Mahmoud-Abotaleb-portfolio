'use client';

import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useAspect, useTexture } from '@react-three/drei';
import { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { ArrowDown } from 'lucide-react';

// Using high-quality Unsplash images. 
const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

const FuturisticShaderMaterial = shaderMaterial(
  {
    uMap: null,
    uDepthMap: null,
    uPointer: new THREE.Vector2(),
    uProgress: 0,
    uAspect: 1.0,
    uVisible: 0.0,
  },
  // vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform sampler2D uMap;
    uniform sampler2D uDepthMap;
    uniform vec2 uPointer;
    uniform float uProgress;
    uniform float uAspect;
    uniform float uVisible;
    varying vec2 vUv;

    // Fast 2D random hash for cell noise replacement
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
      float depth = texture2D(uDepthMap, vUv).r;
      
      // Displace UV
      float strength = 0.01;
      vec2 displacedUv = vUv + (depth * uPointer * strength);
      vec4 baseColor = texture2D(uMap, displacedUv);

      // Grid of dots
      vec2 tUv = vec2(vUv.x * uAspect, vUv.y);
      vec2 tiling = vec2(120.0);
      vec2 gridUv = tUv * tiling;
      vec2 cellId = floor(gridUv);
      vec2 tiledUv = fract(gridUv) * 2.0 - 1.0;
      
      // Brightness based on noise per cell
      float brightness = random(cellId);
      
      // Dot shape
      float dist = length(tiledUv);
      float dotMask = smoothstep(0.5, 0.49, dist) * brightness;
      
      // Flow line based on depth and progress
      float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));
      
      // Red mask
      vec3 mask = dotMask * flow * vec3(4.0, 0.0, 0.0); // Boosted red
      
      // Screen blend
      vec3 finalColor = 1.0 - (1.0 - baseColor.rgb) * (1.0 - mask);
      
      // Scanline overlay
      float scanWidth = 0.05;
      float scanLine = smoothstep(0.0, scanWidth, abs(vUv.y - uProgress));
      vec3 redOverlay = vec3(1.0, 0.0, 0.0) * (1.0 - scanLine) * 0.4;
      finalColor = mix(finalColor, finalColor + redOverlay, 1.0 - scanLine);

      gl_FragColor = vec4(finalColor, uVisible);
    }
  `
);
extend({ FuturisticShaderMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      futuristicShaderMaterial: any;
    }
  }
}

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const materialRef = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock, pointer }) => {
    if (materialRef.current) {
      materialRef.current.uProgress = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
      materialRef.current.uPointer = pointer;
      materialRef.current.uVisible = THREE.MathUtils.lerp(
        materialRef.current.uVisible,
        visible ? 1 : 0,
        0.07
      );
    }
  });

  const scaleFactor = 0.40;
  return (
    <mesh scale={[w * scaleFactor, h * scaleFactor, 1]}>
      <planeGeometry />
      <futuristicShaderMaterial 
        ref={materialRef} 
        uMap={rawMap} 
        uDepthMap={depthMap} 
        uAspect={WIDTH/HEIGHT} 
        transparent 
      />
    </mesh>
  );
};

export const Html = () => {
  const titleWords = 'Build Your Dreams'.split(' ');

  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-svh w-full relative overflow-hidden bg-black">
      <style>
        {`
          @keyframes scanMove {
            0% { background-position: 100% 0; }
            100% { background-position: 0% 0; }
          }
          .scan-effect-container {
            position: relative;
            display: inline-block;
            color: black; 
            z-index: 1;
          }
          .scan-effect-container::before {
            content: attr(data-text);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            -webkit-text-stroke: 4px rgba(194, 0, 0, 1);
            z-index: -1;
          }
          .scan-effect-container::after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            background-image: linear-gradient(
              to right, 
              transparent 40%, 
              rgba(255, 0, 0, 1) 47%, 
              rgba(146, 0, 0, 1) 20%, 
              rgba(255, 0, 0, 1) 53%, 
              transparent 60%
            );
            background-size: 250% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-stroke: 0;
            animation: scanMove 3s ease-in-out infinite alternate;
          }
        `}
      </style>
      <div className="h-svh uppercase items-center w-full absolute z-40 pointer-events-none px-10 flex gap-5 justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${index < visibleWords ? 'opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.13 + (delays[index] || 0)}s` }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold">
          <div
            className={`transition-opacity duration-1000 ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              textShadow: ' 0 2px 5px rgba(0, 0, 0, 0.53)'
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-center w-fit mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <span className="text-xl md:text-inherit mb-1 md:mb-0 md:mr-3">WITH</span>
                <span className="scan-effect-container text-4xl md:text-5xl font-extrabold tracking-wide" data-text="M A H M O U D">M A H M O U D</span>
              </div>
              
              <span className="scan-effect-container text-5xl font-extrabold tracking-wide text-red-500 md:text-white my-3 md:my-0 md:mx-4 self-center md:self-auto" data-text="</>">{"</>"}</span>
              
              <span className="scan-effect-container text-4xl md:text-5xl font-extrabold tracking-wide self-end md:self-auto" data-text="A B O T A L E B">A B O T A L E B</span>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-white flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
        style={{ animationDelay: '2.2s' }}
      >
        <span className="text-sm font-bold tracking-wide">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>

      <Canvas
        className="absolute inset-0 z-0"
        flat
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Html;
