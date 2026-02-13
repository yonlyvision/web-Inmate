import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 192;
const FPS = 24;

export const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const requestRef = useRef<number>();
  const frameIndexRef = useRef(0);
  const lastTimeRef = useRef<number>(0);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    // Create a promise for each image load
    const loadPromises = Array.from({ length: FRAME_COUNT }).map((_, i) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        const frameNumber = String(i).padStart(3, '0');
        img.src = `${import.meta.env.BASE_URL}animation/frame_${frameNumber}.jpg`;
        img.onload = () => {
          loadedImages[i] = img;
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
          resolve();
        };
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises).catch((err) => console.error("Failed to load images", err));

    return () => {
      // Cleanup if needed
    };
  }, []);

  const animate = (time: number) => {
    if (lastTimeRef.current === undefined) {
      lastTimeRef.current = time;
    }

    const deltaTime = time - lastTimeRef.current;

    // Control framerate
    if (deltaTime >= 1000 / FPS) {
      if (canvasRef.current && images.length > 0) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          // Clear canvas
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

          // Draw current frame
          const img = images[frameIndexRef.current];
          if (img) {
            // Calculate scaling to cover the canvas while maintaining aspect ratio
            const canvas = canvasRef.current;
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
          }

          // Advance frame
          frameIndexRef.current = (frameIndexRef.current + 1) % FRAME_COUNT;
        }
      }
      lastTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isLoaded && canvasRef.current) {
      // Set canvas size to parent size or fixed size? 
      // For hero background, we usually want it to handle resize.
      // But for now let's rely on CSS to size the canvas element and we set internal resolution.
      // We will set internal resolution to match the first image or a standard HD size.
      if (images[0]) {
        canvasRef.current.width = images[0].width;
        canvasRef.current.height = images[0].height;
      }

      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isLoaded, images]);

  return (
    <div className="relative w-full h-full bg-stone-100 overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Placeholder or loading state */}
          <div className="w-full h-full bg-stone-200 animate-pulse"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-transparent to-transparent opacity-50 md:opacity-0 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};
