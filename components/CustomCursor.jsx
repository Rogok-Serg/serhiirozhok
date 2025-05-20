import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-screen"
      style={{
        transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
      }}
    >
      <div className="w-[600px] h-[600px] rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
    </div>
  );
}
