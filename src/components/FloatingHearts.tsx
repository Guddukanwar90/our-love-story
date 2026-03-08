import { useCallback, useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 20,
      duration: 6 + Math.random() * 10,
      delay: Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.3,
    }));
    setHearts(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-float-up text-primary"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            "--duration": `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          } as React.CSSProperties}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
