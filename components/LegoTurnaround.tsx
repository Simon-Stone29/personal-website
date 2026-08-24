"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 80;
const FRAME_FOLDER = "/lego-turnaround/webp";   // was "/art-turnaround"

function getFrameSrc(frame: number) {
  const padded = String(frame).padStart(4, "0");
  return `${FRAME_FOLDER}/${padded}.webp`;      // was `.png`
}
export default function LegoTurnaround() {
  const [frame, setFrame] = useState(1); // 1-indexed, 1..TOTAL_FRAMES
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  const isDragging = useRef(false);
  const lastX = useRef(0);
  const dragAccum = useRef(0);

  // Preload all frames so scrubbing/dragging is smooth (no flicker/pop-in)
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = img.onerror = () => {
        if (cancelled) return;
        loaded += 1;
        setImagesLoaded(loaded);
        if (loaded === TOTAL_FRAMES) setReady(true);
      };
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const clampFrame = (n: number) => {
    // wrap around so it feels like a continuous turntable
    const wrapped = ((n - 1) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES;
    return wrapped + 1;
  };

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
    dragAccum.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;

    // Sensitivity: pixels per frame step. Lower = more sensitive.
    const pxPerFrame = 8;
    dragAccum.current += dx;

    if (Math.abs(dragAccum.current) >= pxPerFrame) {
      const steps = Math.trunc(dragAccum.current / pxPerFrame);
      dragAccum.current -= steps * pxPerFrame;
      setFrame((f) => clampFrame(f + steps));
    }
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }, []);

  return (
    <div className="w-full max-w-2xl">
      <div
        className="relative w-full aspect-square bg-transparent rounded-xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
            Loading frames... {imagesLoaded}/{TOTAL_FRAMES}
          </div>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getFrameSrc(frame)}
          alt={`Lego turnaround frame ${frame}`}
          className="w-full h-full object-contain pointer-events-none"
          draggable={false}
        />
      </div>

      <input
        type="range"
        min={1}
        max={TOTAL_FRAMES}
        value={frame}
        onChange={(e) => setFrame(Number(e.target.value))}
        className="w-full mt-4 accent"
      />

      <p className="text-sm text-gray-500 mt-2 text-center">
        Frame {frame} / {TOTAL_FRAMES} — drag the model or use the slider to rotate it
      </p>
    </div>
  );
}