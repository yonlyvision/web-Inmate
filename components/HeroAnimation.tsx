import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 192;
const FPS = 24;
const START_THRESHOLD = 24; // start playing after first 1 second of frames

export const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const requestRef = useRef<number>(0);
  const frameIndexRef = useRef(0);
  const lastTimeRef = useRef<number>(0);

  // Intersection Observer to pause when not in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Preload images — start playing after START_THRESHOLD frames, load rest in background
  useEffect(() => {
    Array.from({ length: FRAME_COUNT }).forEach((_, i) => {
      const img = new Image();
      const frameNumber = String(i).padStart(3, '0');
      img.src = `${import.meta.env.BASE_URL}animation/frame_${frameNumber}.jpg`;
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCountRef.current++;
        if (loadedCountRef.current === START_THRESHOLD) {
          if (canvasRef.current && imagesRef.current[0]) {
            canvasRef.current.width = imagesRef.current[0].width;
            canvasRef.current.height = imagesRef.current[0].height;
          }
          setIsLoaded(true);
        }
      };
    });
  }, []);

  const animate = (time: number) => {
    if (!visible) {
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    if (lastTimeRef.current === undefined) {
      lastTimeRef.current = time;
    }

    const deltaTime = time - lastTimeRef.current;

    if (deltaTime >= 1000 / FPS) {
      if (canvasRef.current && loadedCountRef.current > 0) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          const img = imagesRef.current[frameIndexRef.current];
          if (img) {
            const canvas = canvasRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

            // Subtle vignette to enhance depth
            const gradient = ctx.createRadialGradient(
              canvas.width / 2, canvas.height / 2, 0,
              canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5
            );
            gradient.addColorStop(0, 'rgba(0,0,0,0)');
            gradient.addColorStop(1, 'rgba(0,0,0,0.1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          // advance to next frame — only if loaded, loop over full FRAME_COUNT
          const next = (frameIndexRef.current + 1) % FRAME_COUNT;
          if (imagesRef.current[next]) frameIndexRef.current = next;
        }
      }
      lastTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isLoaded) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isLoaded, visible]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-stone-100 overflow-hidden group">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-stone-200 animate-pulse"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply pointer-events-none group-hover:bg-transparent transition-all duration-700"></div>
    </div>
  );
};
