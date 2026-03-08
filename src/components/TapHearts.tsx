import { useEffect, useState, useCallback } from "react";

const TapHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleInteraction = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    setHearts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => handleInteraction(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) handleInteraction(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [handleInteraction]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-tap-heart text-primary text-2xl"
          style={{ left: h.x - 12, top: h.y - 12 }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default TapHearts;
