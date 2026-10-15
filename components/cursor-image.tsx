"use client";

import { useEffect, useRef } from "react";

// Profile photo that drifts and tilts toward the cursor while hovered (desktop only).
export function CursorImage({ src, alt }: { src: string; alt: string }) {
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = img.current;
    const boundary = el?.parentElement;
    if (!el || !boundary || "ontouchstart" in window) return;

    let rect = boundary.getBoundingClientRect();
    const update = () => (rect = boundary.getBoundingClientRect());

    const move = (e: MouseEvent) => {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `translate(${x * 100}px, ${y * 100}px) rotateX(${y * -15}deg) rotateY(${x * 15}deg)`;
    };
    const enter = () => {
      el.classList.add("following-cursor");
      update();
      document.addEventListener("mousemove", move);
    };
    const leave = () => {
      el.classList.remove("following-cursor");
      document.removeEventListener("mousemove", move);
      el.style.transform = "translate(0, 0) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", update);
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div ref={img} className="profile-image">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="eager" decoding="async" />
    </div>
  );
}
