"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type DotFieldProps = {
  className?: string;
  dotColor?: string;
  glowColor?: string;
  backgroundColor?: string;
};

const parseHex = (hex: string) => {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((char) => char + char).join("") : value;
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalized);

  if (!result) {
    return { r: 255, g: 255, b: 255 };
  }

  return {
    r: Number.parseInt(result[1], 16),
    g: Number.parseInt(result[2], 16),
    b: Number.parseInt(result[3], 16),
  };
};

export function DotField({
  className,
  dotColor = "#b06b4c",
  glowColor = "#f0c793",
  backgroundColor = "#f6efe6",
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dotRgb = parseHex(dotColor);
    const glowRgb = parseHex(glowColor);
    const backgroundRgb = parseHex(backgroundColor);

    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let raf = 0;

    const getSpacing = () => (width >= 1280 ? 24 : width >= 1024 ? 28 : 34);
    const baseRadius = 1.8;
    const influenceRadius = 140;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.ceil(window.innerWidth);
      height = Math.ceil(window.innerHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handlePointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = `rgba(${backgroundRgb.r}, ${backgroundRgb.g}, ${backgroundRgb.b}, 0.18)`;
      context.fillRect(0, 0, width, height);

      const timeFactor = reducedMotion ? 0 : time * 0.0008;
      const spacing = getSpacing();

      for (let y = -spacing; y < height + spacing * 2; y += spacing) {
        for (let x = -spacing; x < width + spacing * 2; x += spacing) {
          const waveOffsetX = Math.sin(y * 0.012 + timeFactor) * 2.2;
          const waveOffsetY = Math.cos(x * 0.01 + timeFactor * 1.2) * 2.2;
          const px = x + waveOffsetX;
          const py = y + waveOffsetY;

          const distance = Math.hypot(px - mouseX, py - mouseY);
          const influence = Math.max(0, 1 - distance / influenceRadius);
          const radius = baseRadius + influence * 2.8;
          const alpha = 0.34 + influence * 0.52;

          context.beginPath();
          context.shadowBlur = 10 + influence * 22;
          context.shadowColor = `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${0.2 + influence * 0.38})`;
          context.fillStyle = `rgba(${dotRgb.r}, ${dotRgb.g}, ${dotRgb.b}, ${alpha})`;
          context.arc(px, py, radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      context.shadowBlur = 0;

      if (!reducedMotion) {
        raf = window.requestAnimationFrame(draw);
      }
    };

    resize();

    if (!reducedMotion) {
      raf = window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [backgroundColor, dotColor, glowColor]);

  return <canvas ref={canvasRef} className={cn("absolute inset-0 block h-full w-full", className)} aria-hidden="true" />;
}
