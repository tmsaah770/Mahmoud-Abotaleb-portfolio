'use client';

import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useAspect, useTexture } from '@react-three/drei';
import React, { useRef, useState, useEffect, Suspense, Component } from 'react';
import * as THREE from 'three';
import { ArrowDown } from 'lucide-react';

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("WebGL Canvas Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Return a graceful fallback (empty so the background stays black and text is visible)
      return <div className="absolute inset-0 bg-black z-0"></div>;
    }
    return this.props.children;
  }
}

// Using reliable Unsplash images as textures to prevent CORS or loading issues
const TEXTUREMAP = { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' }; // abstract fluid
const DEPTHMAP = { src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop' }; // abstract gradient

const FuturisticShaderMaterial = shaderMaterial(
  {
    uMap: null,
    uDepthMap: null,
    uPointer: new THREE.Vector2(),
    uProgress: 0,
    uAspect: 1.0,
    uVisible: 0.0
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
      // We still sample the depth map, but we don't need the base image color anymore
      // vec4 baseColor = texture2D(uMap, displacedUv);

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
      
      // Red mask (the animation)
      vec3 mask = dotMask * flow * vec3(4.0, 0.0, 0.0); // Boosted red
      
      // Final color is just the animation, no image background
      vec3 finalColor = mask;
      
      // Scanline overlay
      float scanWidth = 0.05;
      float scanLine = smoothstep(0.0, scanWidth, abs(vUv.y - uProgress));
      vec3 redOverlay = vec3(1.0, 0.0, 0.0) * (1.0 - scanLine) * 0.4;
      finalColor = mix(finalColor, finalColor + redOverlay, 1.0 - scanLine);

      // Use the max of the color channels to determine alpha so it's transparent where there is no animation
      float alpha = max(finalColor.r, max(finalColor.g, finalColor.b));
      gl_FragColor = vec4(finalColor, alpha * uVisible);
    }
  `
);
extend({ FuturisticShaderMaterial });

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const materialRef = useRef(null);
  const visible = !!rawMap && !!depthMap;

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock, pointer }) => {
    if (materialRef.current) {
      materialRef.current.uProgress = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
      materialRef.current.uPointer = pointer;
      materialRef.current.uVisible = THREE.MathUtils.lerp(
        materialRef.current.uVisible,
        visible ? 1 : 0,
        0.07
      );
    }
  });

  // Removed scaleFactor = 0.40 so the animation fills the screen
  return (
    <mesh scale={[w, h, 1]}>
      <planeGeometry />
      <futuristicShaderMaterial
        ref={materialRef}
        uMap={rawMap}
        uDepthMap={depthMap}
        uAspect={WIDTH / HEIGHT}
        transparent />
      
    </mesh>);

};

export const Html = ({ startAnimation = true }) => {
  const titleWords = 'Full-Stack Web Developer'.split(' ');

  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays] = useState(() => titleWords.map(() => Math.random() * 0.07));
  const [subtitleDelay] = useState(() => Math.random() * 0.1);

  useEffect(() => {
    if (!startAnimation) return;

    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 250);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length, startAnimation]);

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
            -webkit-text-stroke: 2px rgba(194, 0, 0, 1);
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
      <div className="h-svh uppercase items-center w-full absolute z-40 pointer-events-none px-4 sm:px-10 pb-16 sm:pb-20 md:pb-0 flex gap-3 sm:gap-5 justify-center flex-col">
        <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-center">
          <div className="flex flex-wrap justify-center gap-x-3 lg:gap-x-6 text-white">
            {titleWords.map((word, index) =>
            <div
              key={index}
              className={`transition-opacity duration-1000 ${index < visibleWords ? 'opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.13 + (delays[index] || 0)}s` }}>
              
                {word}
              </div>
            )}
          </div>
        </h1>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-0 sm:mt-2 overflow-hidden text-white font-bold">
          <div
            className={`transition-opacity duration-1000 ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              textShadow: ' 0 2px 5px rgba(0, 0, 0, 0.53)'
            }}>
            
            <div className="flex flex-col md:flex-row md:items-center justify-center w-fit mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <span className="text-lg sm:text-xl md:text-inherit mb-0.5 md:mb-0 md:mr-3">I'M</span>
                <span className="scan-effect-container text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.12em]" data-text="MAHMOUD">MAHMOUD</span>
              </div>
              
              <span className="scan-effect-container text-4xl sm:text-5xl font-extrabold tracking-wide text-red-500 md:text-white my-1.5 sm:my-3 md:my-0 md:mx-4 self-center md:self-auto" data-text="</>">{"</>"}</span>
              
              <span className="scan-effect-container text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.12em] self-end md:self-auto" data-text="ABOTALEB">ABOTALEB</span>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center gap-3 sm:gap-4 mt-2 sm:mt-4 normal-case pointer-events-auto transition-opacity duration-1000 ${subtitleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs sm:text-sm md:text-lg font-semibold text-gray-300 text-center max-w-xl px-2">
            Junior developer working with React and Laravel. Open to roles in Egypt, Saudi Arabia, and remote.
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2.5 sm:gap-3">
            <a
              href="/Mahmoud_Abotaleb_CV.pdf"
              download
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold tracking-wide transition-colors whitespace-nowrap">
              Download CV
            </a>
            <a
              href="#projects"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/30 hover:bg-white/10 text-white text-xs sm:text-sm font-bold tracking-wide transition-colors whitespace-nowrap">
              View projects
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-50 text-white flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:bg-white/10 transition-colors whitespace-nowrap"
        style={{ animationDelay: '2.2s' }}>
        
        <span className="text-xs sm:text-sm font-bold tracking-wide">Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
      </button>

      <CanvasErrorBoundary>
        <Canvas
          className="absolute inset-0 z-0"
          flat
          dpr={[1, 1.5]}>
          
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>);

};

export default Html;